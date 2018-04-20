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
        },
        isUnique(value, next) {
          sequelize.models.findOne({
              where: {
                email: value
              }
            })
            .then(email => {
              if (email) {
                next('Email is already exist');
              }
            })
            .catch(err => {
              next(err);
            })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10, 13],
          msg: 'Phone length must be 10 - 13'
        },
        isNumeric: {
          args: true,
          msg: 'Phone not allow letters'
        },
        isAlphanumeric: {
          args: true,
          msg: 'Phone not allow alphanumeric'
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args = 150,
          msg: 'Minimum height is 150'
        }
      }
    }
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