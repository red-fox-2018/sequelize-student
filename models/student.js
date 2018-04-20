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
        isEmail: {
          args: true,
          msg: 'Email is not valid'
        }
      }
    },
    phone: DataTypes.STRING
  }, {});
  Student.associate = function (models) {
    // associations can be defined here
  };

  // Instance Method
  Student.prototype.getFullName = function () {
    return `${this.first_name} ${this.last_name}`;
  }

  Student.prototype.getAge = function () {
    let currentYear = (new Date()).getFullYear();
    let birthYear = (new Date(this.birthday)).getFullYear();

    return currentYear - birthYear;
  }

  // Class Method
  Student.getFemaleStudent = function () {
    return new Promise((resolve, reject) => {
      Student.findAll({
          where: {
            gender: 'female'
          }
        })
        .then(femaleStudent => {
          femaleStudent.forEach(female => {
            female.full_name = female.getFullName();
          });

          resolve(femaleStudent);
        })
        .catch(err => {
          reject(err);
        })
    })
  }

  return Student;
};