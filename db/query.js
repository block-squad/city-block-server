const knex = require('knex');
module.exports = {
  getAllAccounts: ()=>{
    return knex('account');
  },
  getOneAccount: (id)=>{
    return knex('account').where('id', id);
  },
  getAllProjects: ()=>{
    return knex('project');
  },
  getOneProject: (id)=>{
    return knex('project').where('id', id);
  },
  getAllContributionsForOneProject: (projectId)=>{
    return
      knex('project_contributor')
      .join('')
      .where('project_id', projectId)
  },
  getAllContributionsForOneAccount: (accountId)=>{
    return
      knex('project_contributor')
      .where('account_id', accountId);
  },

}
