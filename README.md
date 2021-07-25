# user_upload.js

You can use this file to upload a csv file into an sqlite database

## Setup

* Install dependencies.

  ```sh
  npm i knex sqlite3 
  npm i minimist
  npm i csv
  ```
* NB minimist dependency turns argv into an object
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

* Set up database

In your terminal, run:
  ```sh
  npx knex migrate:latest
  ```

And if you want to reset the database:
```sh
npx knex seed:run
```

* Uploading your csv

Add your csv file to the root directory of this folder.

Then simply type:
```sh
./user_upload.js --file='<your filename>'
```
into the command line and press enter

To run the script without inserting into db, run:
```sh
./user_upload.js --file='<your filename>' --dry_run

You can access your sqlite database by importing the dev.sqlite3 file into here: https://inloop.github.io/sqlite-viewer/


