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
    return knex('project_contributor')
      .join('project', 'project.id', '=', 'project_contributor.project_id')
      .join('account', 'account.id', '=', 'project_contributor.account.id')
      .where('project.id', projectId)
  },
  getAllContributionsForOneAccount: (accountId)=>{
    return knex('project_contributor')
      .join('project', 'project.id', '=', 'project_contributor.project_id')
      .join('account', 'account.id', '=', 'project_contributor.account.id')
      .where('account.id', accountId);
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
