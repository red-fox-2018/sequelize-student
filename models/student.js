'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    phone: DataTypes.STRING,
    height: {
      type: DataTypes.INTEGER,
      validate: {
        max: {
          args: > 150
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here

  };

  Student.prototype.getFullName = function () {
    let fullName =  this.first_name + ' ' + this.last_name
    return fullName
  }

  Student.prototype.getAge = function () {
    let year = new Date(this.birthday).getFullYear()
    let now = new Date().getFullYear()
    let age = now - year
    return age
  }

  Student.getFemaleStudent = function(cb) {
    Student.findAll({
      where: {
        gender: 'female'
      }
    })
    .then((students) => {
      for(let i in students) {
        students[i]["full_name"] =
        students[i].first_name + ' ' + students[i].last_name
      }
      cb(students)
    })
  }

  return Student;
};
