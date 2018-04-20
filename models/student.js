'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  //classmodel
  Student.associate = function(models) {

    // associations can be defined here
  };


  Student.getFemaleStudent = function (cb) {
    Student.findAll({
      where:{gender:'female'}
    })
     .then(student => {
       cb(student)
     })
     .catch(err => {
       cb(err)
     })
  };

  Student.prototype.getFullName = function() {
    let full_name = `${this.first_name} ${this.last_name}`;
    return full_name;
  };

  Student.prototype.getAge = function() {
    let date = new Date();
    let birthDate = new Date(this.birthday);
    let age = (date.getFullYear() - birthDate.getFullYear());
    let data = `${this.first_name} ${this.last_name} age ${age}`
    return data;
  };

  return Student;
};
