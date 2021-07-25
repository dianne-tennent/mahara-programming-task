const config = require('./knexfile').development
const database = require('knex')(config)

function insertUserData (array, db = database) {
  return db('users').insert(array)
  .then(() => {
    console.log("Data successfully inserted into users table")
  })
  .catch(err => console.log(err))
}

module.exports = {
  insertUserData
}
