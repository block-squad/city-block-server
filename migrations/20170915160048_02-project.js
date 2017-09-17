
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', (table)=> {
    table.increments();
    table.text('name').notNullable();
    table.text('type').notNullable();
    table.text('desc').notNullable();
    table.float('money', 8, 2).notNullable();
    table.float('target', 8, 2).notNullable();
    table.date('date').notNullable();
    table.integer('owner_id').references('account.id').onDelete('CASCADE');
    table.integer('official_id').references('account.id').onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project');
};
