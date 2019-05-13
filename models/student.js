'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate:  {
      isEmail: true,
      isUniqueEmail: function(object){
          Student.findOne({where: {email:object.email}}).then(data=>{
            if(data !== null){
              throw new Error("email sudah terdaftar");
            }
          })
        }
    }
    },
    phone: DataTypes.STRING,
    Height: {
      type: DataTypes.INTEGER,
      validate: {
      min: 150
    }
  }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  Student.prototype.getFullName = function(){
    let fullName = this.first_name + ' ' + this.last_name
    return fullName
  }
  Student.prototype.getAge = function () {
    let today = new Date();
    let age = today.getFullYear() - this.birthday.getFullYear();
    let m = today.getMonth() - this.birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < this.birthday.getDate())) {
      age--;
    }
  return age;
  }
  Student.getFemaleStudent = function () {
    return Student.findAll({
      where:
        {gender :'female'},raw:true
    })
    .then(result => {
      return result
    })
  }
  return Student;
};
