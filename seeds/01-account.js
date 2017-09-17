var bcrypt = require('bcrypt')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('truncate account restart identity cascade')
    .then(function(){
      return knex('account').insert([{
        username: "MattDrumheller",
        password: bcrypt.hashSync(process.env.MATTPASSWORD, 10),
        eth_wallet_key: process.env.MATTKEY
      },{
        username: "ErinShaben",
        password: bcrypt.hashSync(process.env.ERINPASSWORD, 10),
        eth_wallet_key: process.env.ERINKEY
      },{
        username: "MariaMatta",
        password: bcrypt.hashSync(process.env.MARIAPASSWORD, 10),
        eth_wallet_key: process.env.MARIAKEY
      },{
        username: "EllenDowning",
        password: bcrypt.hashSync(process.env.ELLENPASSWORD, 10),
        eth_wallet_key: process.env.ELLENKEY
      },{
        username: "MayorMoneybags",
        password: bcrypt.hashSync(process.env.MAYORPASSWORD, 10),
        eth_wallet_key: process.env.MAYORKEY
      }])
    })
};
