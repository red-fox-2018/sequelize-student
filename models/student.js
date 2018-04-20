'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  //Class Method
  Student.getFemaleStudents = function () {
    return Student.findAll({where : {
      gender: 'female'
    }});
  };


  //Instance Method
  Student.prototype.getFullName = function(){
    let fullname = this.first_name +' '+ this.last_name;
    return fullname;
  };

  Student.prototype.getAge = function(){
    let today = new Date();
    let birthDate = new Date(this.birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    return age;
  };

  return Student;
};
