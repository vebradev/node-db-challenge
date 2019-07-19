
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, desc: 'Description of Action 1', notes: "Notes of Action 1", projectId: "1"},
        {id: 2, desc: 'Description of Action 2', notes: "Notes of Action 2", projectId: "2"},
        {id: 3, desc: 'Description of Action 3', notes: "Notes of Action 3", projectId: "3"},
        {id: 4, desc: 'Description of Action 4', notes: "Notes of Action 4", projectId: "1"},
        {id: 5, desc: 'Description of Action 5', notes: "Notes of Action 5", projectId: "1"},
        {id: 6, desc: 'Description of Action 6', notes: "Notes of Action 6", projectId: "2"},
        {id: 7, desc: 'Description of Action 7', notes: "Notes of Action 7", projectId: "3"}
      ]);
    });
};
