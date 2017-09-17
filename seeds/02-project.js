exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('truncate project restart identity cascade')
    .then(function(){
      return knex('project').insert([
        {
          name: "New Trees",
          type: "parks and rec.",
          desc: "We want to add new trees to the park in downtown Denver on blah street.",
          money: 50,
          target: 1000,
          date: new Date(),
          owner_id: 1,
          official_id: 5
        },{
          name: "Major Road Construction for South Broadway",
          type: "street/roads",
          desc: "Will add too more lanes in each direction on Broadway in Denver.",
          money: 1000,
          target: 6000000,
          date: new Date(),
          owner_id: 2,
          official_id: 5
        },{
          name: "New playground equipment.",
          type: "education",
          desc: "The playground equipment is unsafe, and needs to be replaced immediately for grade school on Denver Street rd.",
          money: 200,
          target: 200,
          date: new Date("04/04/2017"),
          owner_id: 3,
          official_id: 5
        },{
          name: "New community center",
          type: "building",
          desc: "We would like to see a new community center be built on Broadway in Denver.",
          money: 50000,
          target: 8000000,
          date: new Date(),
          owner_id: 4,
          official_id: 5
        },{
          name: "New Art Sculpture",
          type: "culture",
          desc: "We want to add a new sculpture to the top of Stoner Hill.",
          money: 0,
          target: 500,
          date: new Date(),
          owner_id: 1,
          official_id: 5
        },{
          name: "Clean up the Platte River",
          type: "environment",
          desc: "It's nasty, it smells like someone spilled thousands of gallons of sewage in there, this is a top priority.",
          money: 40000,
          target: 900000,
          date: new Date(),
          owner_id: 2,
          official_id: 5
        }
      ])
    })
};
