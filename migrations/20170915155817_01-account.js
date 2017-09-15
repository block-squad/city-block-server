
exports.up = function(knex, Promise) {
  return knex.schema.createTable('account', (table)=> {
    table.increments();
    table.text('username').notNullable();
    table.text('password').notNullable();
    table.text('eth_wallet_key').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('account');
};
