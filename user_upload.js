#!/usr/bin/env node

//csv parser
const csv = require('csv');

//file system access
const fs = require('fs')

//database functions
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

//read file
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

      //convert csvData into a list of object entries ready for database
      let dbEntries = []
      for (let i = 0; i < csvData.name.length; i++) {
        let newObject = {name: csvData.name[i], surname: csvData.surname[i], email: csvData.email[i]}
        dbEntries.push(newObject)
      }

      console.log("Here's your data: ", dbEntries)

      if(!userInputs.hasOwnProperty('dry_run')) {
        //insert into knex db if not a dry_run
        return db.insertUserData(dbEntries)
      }



    }) // end of data processing


