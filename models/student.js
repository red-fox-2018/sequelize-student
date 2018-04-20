'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: { isEmail: true, isUnique: true
      }
    },
    phone: DataTypes.STRING,
    Hight: {
      type: DataTypes.INTEGER,
      validate: { min: 150 }
    }
  }, {
    timestamps: false
  });


  Student.prototype.getFullName = function() {
    return this.firstName+' '+this.lastName
  };

  Student.prototype.getAge = function() {
    let date = this.birthday.split('-')
    return Number(date[0])
  };  

  Student.getFemaleStudents = function(){
    return this.findAll({where: {gender: "female"} })
  }

  return Student;
  Student.prototype
};