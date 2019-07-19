
exports.up = function(knex) {
  return knex.schema
    .createTable('actions', table => {
      table.increments();
      table.string('desc', 128).notNullable();
      table.string('notes').notNullable();
      table.boolean('isCompleted').defaultTo(false);
      table
        .integer('projectId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('actions')
};
