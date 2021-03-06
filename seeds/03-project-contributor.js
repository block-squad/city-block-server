exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('truncate project_contributor restart identity cascade')
    .then(function(){
      return knex('project_contributor').insert([
        {
          amount: 50,
          project_id: 1,
          account_id: 1
        },{
          amount: 500,
          project_id: 2,
          account_id: 2
        },{
          amount: 500,
          project_id: 2,
          account_id: 3
        },{
          amount: 200,
          project_id: 3,
          account_id: 4
        },{
          amount: 50000,
          project_id: 4,
          account_id: 1
        },{
          amount: 10000,
          project_id: 6,
          account_id: 1
        },{
          amount: 10000,
          project_id: 6,
          account_id: 2
        },{
          amount: 10000,
          project_id: 6,
          account_id: 3
        },{
          amount: 10000,
          project_id: 6,
          account_id: 4
        }
      ])
    })
};
