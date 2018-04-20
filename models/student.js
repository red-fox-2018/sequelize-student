'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      }
    },
    phone: DataTypes.STRING,
    gender: DataTypes.STRING,
    height: DataTypes.INTEGER,
    birthday: DataTypes.STRING,
  }, {
    timestamps: false
  });

  Student.getFemaleStudent = function(students) {
    return Student.findAll({ where: { gender: 'female' } })
  }

  Student.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };

  Student.prototype.getAge = function() {
    return 2018 - Number(this.birthday.split('-')[0]);
  }

  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};