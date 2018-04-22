
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
          msg: "Alamat email harus mengandung @ dan ."
        },
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 150,
          msg: 'Tinggi harus diatas 150 cm'
        },
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10,13],
          msg: 'Phone length must be 10-13',
        },
        not: {
          args: ["[a-z]",'i'],
          msg: 'Phone not allow letters'
        },
        isAlphanumeric: {
          args: true,
          msg: 'Phone not allow alphanumeric'
        }
      }
    }
  }, {});
  
  // // Class Method promise
  // Student.getFemaleStudent = function () {
  //   return Student.findAll({
  //     where : {gender : 'female'}
  //   })
  //   .then(function(result){
  //     result.forEach(function(student) {
  //       student["fullname"] = student.getFullName()
  //     })
  //     return result
  //   })
  // }

  // Class Method versi callback
  Student.getFemaleStudent = function (callback) {
    Student.findAll({
      where : {gender : 'female'}
    })
    .then(function(result){
      result.forEach(function(student) {
        student["fullname"] = student.getFullName()
      })
      
      callback(result)
    })
  }

  // Instance Method
  Student.prototype.getFullName = function () {
      return `${this.first_name} ${this.last_name}`
  }

  Student.prototype.getAge = function(){
      let Birth = new Date(this.birthday)
      let year = Birth.getYear()
      let Age = new Date()
      let newAge = Age.getYear()
      return newAge - year
  }

  return Student;
};
