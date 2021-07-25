const config = require('./knexfile').development
const database = require('knex')(config)

// createTable() called 'users' with column names: id, name, surname, email, created_at
function createTable() {
  database.schema.createTable('users', function (table) {
    table.increments();
    table.string('name');
    table.string('surname')
    table.string('email')
    table.timestamps('created_at');
  })

  console.log("Ran create table script")
}



function getTodos (db = database) {
  return db('todos').select()
}

// Your DB functions go here

function close (db = database) {
  db.destroy()
}

module.exports = {
  getTodos,
  close,
  createTable
}
