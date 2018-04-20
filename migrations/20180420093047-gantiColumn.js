'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    public changeColumn(tableName: String, attributeName: String, dataTypeOrOptions: Object, options: Object): Promise
      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.changeColumn('Students', 'email', {
      type: Sequelize.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'The email you entered is invalid.'
        }
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
