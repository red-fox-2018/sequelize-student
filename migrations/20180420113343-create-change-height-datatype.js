'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Stoodents', 'height',{
      type:Sequelize.INTEGER
    });
  },
  down: (queryInterface, Sequelize) => {
    // return queryInterface.dropTable('ChangeHeightDatatypes');
  }
};