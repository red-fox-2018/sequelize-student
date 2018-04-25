'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    email: {
      type: DataTypes.STRING,
    }
    phone: DataTypes.STRING,
    height: {
      type: DataTypes.STRING,
      validate: {
        min: {
          args: 150,
          msg: 'Tinggi Badan Minimal 150 cm'
        }
      }
    }
  }, {});

  Student.associate = function(models) {
    // associations can be defined here
  };

  //Instance Method
  Student.prototype.getFullName = function(){
    return this.first_name + ' ' + this.last_name
  }

  Student.prototype.getAge = function(){
    let date = new Date(this.birthday)
    let birthdate = date.getFullYear()
    let currentDate = new Date().getFullYear()
    return currentDate - birthdate
  }

  //class Method
  Student.getFemaleStudent = function(column, value){
    return new Promise(function(res,rej){
      Student.findAll({
        where : {
          [column] : value
        }
      })
      .then(function(students){
        students.forEach(function(student){
          student.full_name = student.getFullName();
          student.age = student.getAge()
        })
        res(students)
      })
    })
  }

  return Student;
};
