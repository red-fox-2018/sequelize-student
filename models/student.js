'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    phone: DataTypes.STRING
  }, {});

  //CLASS METHODS
  Student.getFemaleStudents = function (cb) {
    this.findAll({
      where: {
        gender: 'female'
      },
      raw: true
    })
    .then((femaleStudents) => {
      cb(femaleStudents);
    })
  }

  //INSTANCE METHODS
  Student.prototype.getFullName = function () {
    console.log(this.first_name + ' ' + this.last_name);
  };

  Student.prototype.getAge = function () {
    let yearNow = new Date().getFullYear()
    let birthday = new Date(this.birthday).getFullYear()
    console.log(yearNow - birthday);
  };

  return Student;
};
