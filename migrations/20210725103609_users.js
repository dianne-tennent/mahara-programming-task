
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
      table.increments('id')
      table.string('name')
      table.string('surname')
      table.string('email')
      table.timestamp('created_at')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
