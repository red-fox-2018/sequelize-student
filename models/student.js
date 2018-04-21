'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.INTEGER,
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate:{isEmail:true}
    } ,
    phone: DataTypes.STRING,
    height: {
      type: DataTypes.INTEGER,
      validate:{min:150}
    }
  }, {});

  Student.prototype.getFullName = function() {
    return this.first_name+" "+this.last_name
  }

  Student.prototype.getAge = function() {
    return 2018-this.birthday.getFullYear()
  }

  Student.getFemaleStudent = function() {
   return Student.findAll({
      where:{
        gender:'female'
      }
    })
    .then(dataFemale => {
        return dataFemale   
    })
  }




  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};