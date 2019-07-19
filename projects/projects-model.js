const knex = require('knex');
const db = knex(require('../knexfile').development);

module.exports = {
  getProject,
  getActions
}

function getProject(id) {
  return db
    .select(knex.raw("id as id, name as name, desc as description, isCompleted as completed"))
    .from("projects")
    .where("projects.id", id)
}

function getActions(id) {
  return db
    .select(knex.raw("actions.id as id, actions.desc as description, notes as notes, actions.isCompleted as completed"))
    .from("projects")
    .leftJoin("actions", "projects.id", "actions.projectId")
    .where("projects.id", id)
}