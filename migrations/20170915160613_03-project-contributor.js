
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project_contributor', (table)=> {
    table.increments();
    table.float('amount', 8, 2).notNullable();
    table.integer('project_id').references('project.id').onDelete('CASCADE');
    table.integer('account_id').references('account.id').onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project_contributor');
};
