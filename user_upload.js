#!/usr/bin/env node
const readline = require('readline');
const commands = require('./commands')

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
