const config = require('./knexfile').development
const database = require('knex')(config)

function insertUserData (array, db = database) {
  return db('users').insert(array)
}

module.exports = {
  insertUserData
}
