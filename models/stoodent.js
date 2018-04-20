'use strict';
module.exports = (sequelize, DataTypes) => {
  var Stoodent = sequelize.define('Stoodent', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail:true
      }
    },
    phone: {type:DataTypes.STRING,
    validate:{
      isNumeric:true
    }}
  
  },);

  Stoodent.associate = function(models) {
    // associations can be defined here
  };

  Stoodent.prototype.getFullName = function(){
    return this.first_name+" "+this.last_name
  }

  Stoodent.prototype.getAge=function(){
    return this.birthday
  }

  Stoodent.getFemaleStudent = function(){
    return this.findAll({where: {gender: 'female'} })
  }

  Stoodent.emailValidation=function(){
    
  }

  return Stoodent;
};


