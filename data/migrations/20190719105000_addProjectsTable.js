
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {
      table.increments();
      table.string('name', 128).notNullable();
      table.string('desc').notNullable();
      table.boolean('isCompleted').defaultTo(false);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
};
