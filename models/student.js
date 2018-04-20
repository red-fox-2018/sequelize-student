/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

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
               msg: 'Wrong email format!'
            },
            isUnique: function(value, next) {
               Student.find({
                     where: {
                        email: value
                     },
                     attributes: ['id']
                  })
                  .then(function(error, user) {
                     if (error || user)
                        return next('Email address already in use!');
                     next();
                  });
            }
         }
      },
      phone: {
         type: DataTypes.STRING,
         validate: {
            len: {
               args: [10, 13],
               msg: 'Phone length must be 10-13'
            },
            not: {
               args: ["[a-z][A-Z]", 'i'],
               msg: 'Phone not allow letters'
            }
         }
      },
      height: {
         type: DataTypes.INTEGER,
         validate: {
            min: {
               args: 150,
               msg: 'Tinggi minimal 150 cm'
            }
         }
      }
   }, {});
   Student.associate = function(models) {
      // associations can be defined here
   };

   // Instance Method
   Student.prototype.getFullName = function() {
      let full_name = `${this.first_name} ${this.last_name}`;
      return full_name;
   };

   Student.prototype.getAge = function() {
      let yearBirthday = this.birthday.substr(0, 4);
      let date = new Date();
      let yearNow = date.getFullYear();
      let age = yearNow - yearBirthday;
      return (`${this.first_name} ${this.last_name}, age = ${age}`);
   };

   // class method
   Student.getFemaleStudent = (callback) => {
      Student.findAll({
            where: {
               gender: 'female'
            }
         })
         .then(students => {
            students.forEach((student) => {
               student.full_name = student.getFullName();
            });
            callback(students);
         });
   };
   return Student;
};
