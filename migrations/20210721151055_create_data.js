
exports.up = function(knex) {
  return knex.schema.createTable('blogs', table =>{
    table.increments('id');
    table.string('author').notNullable();
    table.string('title').notNullable();
    table.string('image').defaultTo('');
    table.text('text').notNullable();
    table.string('date').defaultTo(Date()).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('blogs');
};
