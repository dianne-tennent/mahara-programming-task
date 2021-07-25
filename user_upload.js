#!/usr/bin/env node
const readline = require('readline');
const commands = require('./db')

//minimist dependency turns argv into an object
//node example/parse.js -a beep -b boop
//{ _: [], a: 'beep', b: 'boop' }

// node example/parse.js -x 3 -y 4 -n5 -abc --beep=boop foo bar baz
// { _: [ 'foo', 'bar', 'baz' ],
//   x: 3,
//   y: 4,
//   n: 5,
//   a: true,
//   b: true,
//   c: true,
//   beep: 'boop' }

//slice removes the first two args node and filename
const userInputs = require('minimist')(process.argv.slice(2))
console.log("userInputs: ", userInputs)

//acccess first item of argv array
const cmd = userInputs._[0]

//command line directives to handle
// userInputs.file = name of CSV to be parsed
// userInputs.create_table = causes the 'users' table to be built
// userInputs.dry_run = used with --file directive, to run script but not insert into DB. All other functions executed, but DB won't be altered
// userInputs.u = username
// userInputs.p = password
// userInputs.h = host
// userInputs.help = prints out list of directives with details

//handle command line directives
if(userInputs.hasOwnProperty('help')) {
  //print help info
} else if (userInputs.hasOwnProperty('file') && userInputs.hasOwnProperty('dry_run')) {
  //run without altering db
} else {
  //run full script
  commands.createTable()
}

////functions required:
// createTable() called 'users' with column names: id, name, surname, email, created_at

// processData() - take csv input, convert to format able to be inserted into db i.e. list of objects with key-value pairs


// insertData() - take list of objects and insert into db


switch (cmd) {
  case 'test':
    console.log('you typed "test"')
    break
  case 'upload':

    console.log('The filename is ', userInputs.file)
    break
  default:
    console.log(`I don't understand that command: ${cmd}`)
}
