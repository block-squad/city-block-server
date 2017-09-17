const knex = require('knex');
module.exports = {
  getAllAccounts: ()=>{
    return knex('account')
  }
}
