'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: `Email is not valid!`
        },
        isUnique(value, next) {
          sequelize.models.Student.findOne({
              where: {
                email: value
              }
            })
            .then(emailInput => {
              if (emailInput) {
                next(`Email is already exist...`);
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
          msg: `Phone number is not valid!`
        },
        isNumeric: {
          args: true,
          msg: `Phone not allow letters...`
        },
        isAlphanumeric: {
          args: true,
          msg: `Phone number is not valid!`
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 150,
          msg: 'Minimum height is 150'
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  // instance method

  Student.prototype.getFullName = function() {
    const fullname = `${this.first_name} ${this.last_name}`

    return fullname
  };

  Student.prototype.getAge = function() {

    const now = new Date().getFullYear()
    const birthDate = this.birthday.getFullYear()

    return now - birthDate

  };

  //class method

  Student.getFemaleStudent = function(cb) {

     Student.findAll({
       where:{
         gender:"female"
       }
     })

     .then(students => {

       cb(students)

     })

  }

  return Student;
};
