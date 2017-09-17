exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('truncate account restart identity cascade')
    .then(function(){
      return knex('account').insert([{
        username: "MattDrumheller",
        password: process.env.MATTPASSWORD,
        eth_wallet_key: process.env.MATTKEY
      },{
        username: "ErinShaben",
        password: process.env.ERINPASSWORD,
        eth_wallet_key: process.env.ERINKEY
      },{
        username: "MariaMatta",
        password: process.env.MARIAPASSWORD,
        eth_wallet_key: process.env.MARIAKEY
      },{
        username: "EllenDowning",
        password: process.env.ELLENPASSWORD,
        eth_wallet_key: process.env.ELLENKEY
      },{
        username: "MayorMoneybags",
        password: process.env.MAYORPASSWORD,
        eth_wallet_key: process.env.MAYORKEY
      }])
    })
};
