exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('truncate account restart identity cascade')
    .then(function(){
      return knex('account').insert([{
        id: 1,
        username: "MattDrumheller",
        password: process.env.MATTPASSWORD,
        eth_wallet_key: process.env.MATTKEY
      },{
        id: 2,
        username: "ErinShaben",
        password: process.env.ERINPASSWORD,
        eth_wallet_key: process.env.ERINKEY
      },{
        id: 3,
        username: "MariaMatta",
        password: process.env.MARIAPASSWORD,
        eth_wallet_key: process.env.MARIAKEY
      },{
        id: 4,
        username: "EllenDowning",
        password: process.env.ELLENPASSWORD,
        eth_wallet_key: process.env.ELLENKEY
      },{
        id: 5,
        username: "MayorMoneybags",
        password: process.env.MAYORPASSWORD,
        eth_wallet_key: process.env.MAYORKEY
      }])
    })
};
