'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    date: DataTypes.STRING
  });

    

  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};