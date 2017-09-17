const knex = require('../db/knex.js');
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
  getContributionsByAccount: (id) => {
    return knex('account')
      .innerJoin('project_contributor', 'account_id', 'account.id')
      .innerJoin('project', 'project.id', 'project_contributor.project_id')
      .select('project.*', 'project_contributor.amount as amount_contributed')
      .where('account.id', id)
  },
  getContributionsByProject: (id) => {
    return knex('project')
      .innerJoin('project_contributor', 'project_id', 'project.id')
      .innerJoin('account', 'account.id', 'project_contributor.account_id')
      .select('account.*', 'project_contributor.amount as amount_contributed')
      .where('project.id', id)

  },
  postToAccount: (account)=>{
    return knex('account')
      .insert(account)
      .returning('*')
  },
  postToProject: (project)=>{
    return knex('project')
      .insert(project)
      .returning('*')
  },
  postContribution: (contribution)=>{
    return knex('project_contributor')
      .insert(contribution)
      .returning('*')
  },
  updateAccount: (account, id)=>{
    return knex('account')
      .where('id', id)
      .update(account)
      .returning('*')
  },
  updateProject: (project, id)=>{
    return knex('project')
      .where('id', id)
      .update(project)
      .returning('*')
  },
  deleteAccount: (id) => {
    return knex('account')
      .where('id', id)
      .del()
  },
  deleteProject: (id) => {
    return knex('project')
      .where('id', id)
      .del()
  }
}
