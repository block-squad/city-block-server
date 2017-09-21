exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('truncate project restart identity cascade')
    .then(function(){
      return knex('project').insert([
        {
          name: "New Trees",
          type: "parks and rec.",
          desc: "We want to add new trees to the park in downtown Denver on Corona street.",
          money: 50,
          target: 1000,
          date: new Date(),
          owner_id: 1,
          official_id: 5
        },{
          name: "Major Road Construction for South Broadway",
          type: "street/roads",
          desc: "Will add two more lanes in each direction on Broadway in Denver.",
          money: 1000,
          target: 6000000,
          date: new Date(),
          owner_id: 2,
          official_id: 5
        },{
          name: "New Playground Equipment.",
          type: "education",
          desc: "The playground equipment is unsafe, and needs to be replaced immediately for Steel Elementary School.",
          money: 200,
          target: 200,
          date: new Date(),
          owner_id: 3,
          official_id: 5
        },{
          name: "New Community Center",
          type: "building",
          desc: "We would like to see a new community art center built in Capital Hill, Denver.",
          money: 50000,
          target: 8000000,
          date: new Date(),
          owner_id: 4,
          official_id: 5
        },{
          name: "New Art Sculpture",
          type: "culture",
          desc: "We want to add a new sculpture to the top of Stoner Hill, built by Tim Joseph, a real life human of Colorado who makes sculputures.",
          money: 0,
          target: 500,
          date: new Date(),
          owner_id: 1,
          official_id: 5
        },{
          name: "Platte River Clean Up",
          type: "environment",
          desc: "There is a lot of trash in and around the river.  We should restore the cleaness of the river.",
          money: 40000,
          target: 900000,
          date: new Date(),
          owner_id: 2,
          official_id: 5
        }
      ])
    })
};
