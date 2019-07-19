const knex = require('knex');
const db = knex(require('../knexfile').development);

module.exports = {
  findAction,
  addAction
}
function findAction(id) {
  return db("actions")
    .where({ id });
}

function addAction(action, id) {
  return db("actions")
    .insert({
      desc: action.desc,
      notes: action.notes,
      projectId: id 
    })
    .then(([id]) => this.findAction(id))
}