# knex-todo-cli

Command-line todo app using Knex.

We're building a simple command-line tool to manage our list of todos. We're finally at the point of storing our data in a database! Woooo! We're using the Knex module to talk to our SQLite3 database.


## Setup

* Install dependencies.

  ```sh
  npm i knex sqlite3 
  npm i minimist
  ```
* minimist dependency turns argv into an object
node example/parse.js -a beep -b boop
{ _: [], a: 'beep', b: 'boop' }

node example/parse.js -x 3 -y 4 -n5 -abc --beep=boop foo bar baz
{ _: [ 'foo', 'bar', 'baz' ],
   x: 3,
   y: 4,
   n: 5,
   a: true,
   b: true,
   c: true,
   beep: 'boop' }
   
* Set file permissions.

  ```sh
  chmod +x user_upload.js
  ```

* command line directives to handle
userInputs.file = name of CSV to be parsed
userInputs.create_table = causes the 'users' table to be built
userInputs.dry_run = used with --file directive, to run script but not insert into DB. All other functions executed, but DB won't be altered
userInputs.u = username
userInputs.p = password
userInputs.h = host
userInputs.help = prints out list of directives with details


