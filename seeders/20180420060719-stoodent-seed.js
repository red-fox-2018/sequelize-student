'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Stoodents', [{
        first_name: 'Nikolas',
        last_name:'Friesen',
        gender: 'female',
        birthday:'1998-12-24',
        email:'heber.upton@bla.com',
        phone:"449.897.7415",
      },
      {
      first_name: 'Randi',
      last_name:'Halvorson',
      gender: 'male',
      birthday:'1997-1-29',
      email:'heber.upton@bla.com',
      phone:"(697)436-2633",
      
    },
    {
      first_name: 'Sally',
      last_name:'Buckridge',
      gender: 'male',
      birthday:'1997-10-12',
      email:"nora@bla.com",
      phone:"1-351-672-6358x02502",
      
    },
    {
      first_name:'Morris',
      last_name:'Swift',
      gender: 'male',
      birthday:'1995-6-27',
      email:'cordell@bla.com',
      phone:"(600)142-5639x9380",
      
    },
    {
      first_name: 'Sidney',
      last_name:'Ortiz',
      gender: 'male',
      birthday:'1997-4-4',
      email:"erling@davis.name",
      phone:"554.170.3265",
      
    },
    {
      first_name: 'Reid',
      last_name:'Skiles',
      gender: 'male',
      birthday:'1994-10-13',
      email:"mike_harvey@bla.com",
      phone:"(543)511-2123",
      
    },
    {
      first_name: 'Violet',
      last_name:'Dickes',
      gender: 'male',
      birthday:'1994-11-19',
      email:"rubye_olsonn@bla.com",
      phone:"1-410-486-1411x5058",
     
    },
    {
      first_name: 'Marguerite',
      last_name:'Flatley',
      gender: 'female',
      birthday:'1995-5-28',
      email:"wanda_okon@bla.name",
      phone:"572.978.5828x07860",
    
    },
    {
      first_name: 'Cary',
      last_name:'Schoen',
      gender: 'male',
      birthday:'1996-7-31',
      email:"fay@runolfon.biz",
      phone:"1-828-134-7828x66958",
      
    },
    {
      first_name: 'Mazie',
      last_name:'Gibson',
      gender: 'female',
      birthday:'1995-9-23',
      email:"wanda_okon@bla.name",
      phone:"144.038.7351x24117",
      
    }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Stoodents', null, {});
  }
};
