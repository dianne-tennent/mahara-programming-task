#!/usr/bin/env node
const csv = require('csv');
const fs = require('fs')
const db = require('./db')
//import data processing functions from utils
const utils = require('./utils')

//access command line directives
const userInputs = require('minimist')(process.argv.slice(2))

//check for --help flag
if(userInputs.hasOwnProperty('help')) {
  return console.log(
    "Help menu:\n\n--file='csv file name' - this is the name of the CSV to be parsed. It must be in the current working directory.\n\n--dry_run - this can be used with the --file directive in the instance that we want to run the script but not insert into the DB. All other functions will be executed, but the database won't be altered."
  )
}

//create empy array to hold csv file data
const csvData = {name: [], surname: [], email: []};

fs.createReadStream(__dirname + '/' + userInputs.file)
    .pipe(
      csv.parse({
      delimiter: ','
      })
    )
    .on('data', function (dataRow) {
      //add each entry to related object property
      csvData.name.push(dataRow[0].trim())
      csvData.surname.push(dataRow[1].trim())
      csvData.email.push(dataRow[2].trim())
    })
    .on('end', function () {
      //data processing:
      //remove first entry from each array, as the first entry is the column name
      for (const key in csvData) {
        if (csvData.hasOwnProperty(key)) {
          csvData[key].shift()
        }
      }
      //format name entries
      csvData.name = csvData.name.map(element => {
        return utils.nameFormatter(element)
      })
      //format surname entries
      csvData.surname = csvData.surname.map(element => {
        return utils.nameFormatter(element)
      })

      //format email entries
      csvData.email = csvData.email.map(element => {
        return utils.emailValidator(element)
      })

      //convert csvData into a list of entries ready for database
      let dbEntries = []
      for (let i = 0; i < csvData.name.length; i++) {
        let newObject = {name: csvData.name[i], surname: csvData.surname[i], email: csvData.email[i]}
        dbEntries.push(newObject)
      }

      console.log("Here's your data: ", dbEntries)

      if(!userInputs.hasOwnProperty('dry_run')) {
        //insert into knex db
        return db.insertUserData(dbEntries)
      }



    }) // end of data processing





//acccess first item of argv array
const cmd = userInputs._[0]



// //handle command line directives
// if(userInputs.hasOwnProperty('help')) {
//   console.log("help info")
//   //print help info
// } else if (userInputs.hasOwnProperty('file') && userInputs.hasOwnProperty('dry_run')) {
//   //run without altering db
//   console.log("run without altering db, filename is ", userInputs.file)
// } else {
//   //run full script
//   console.log("Running full script, filename is ", userInputs.file)
//   console.log(userInputs)
//   //commands.createTable()
// }

////functions required:
// createTable() called 'users' with column names: id, name, surname, email, created_at

// processData() - take csv input, convert to format able to be inserted into db i.e. list of objects with key-value pairs

// insertData() - take list of objects and insert into db
