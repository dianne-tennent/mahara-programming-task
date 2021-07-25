#!/usr/bin/env node
const csv = require('csv');
const fs = require('fs')
//command line directives
const userInputs = require('minimist')(process.argv.slice(2))
//console.log("userInputs: ", userInputs)

//create empy array to hold csv file data
const csvData = {name: [], surname: [], email: []};

fs.createReadStream(__dirname + '/' + userInputs.file)
    .pipe(
      csv.parse({
      delimiter: ','
      })
    )
    .on('data', function (dataRow) {

      csvData.name.push(dataRow[0])
      csvData.surname.push(dataRow[1])
      csvData.email.push(dataRow[2])
    })
    .on('end', function () {
      console.log(csvData)
    })

//acccess first item of argv array
const cmd = userInputs._[0]



//handle command line directives
if(userInputs.hasOwnProperty('help')) {
  console.log("help info")
  //print help info
} else if (userInputs.hasOwnProperty('file') && userInputs.hasOwnProperty('dry_run')) {
  //run without altering db
  console.log("run without altering db, filename is ", userInputs.file)
} else {
  //run full script
  console.log("Running full script, filename is ", userInputs.file)
  console.log(userInputs)
  //commands.createTable()
}

////functions required:
// createTable() called 'users' with column names: id, name, surname, email, created_at

// processData() - take csv input, convert to format able to be inserted into db i.e. list of objects with key-value pairs

// insertData() - take list of objects and insert into db
