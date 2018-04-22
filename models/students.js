'use strict';
module.exports = (sequelize, DataTypes) => {
  var Students = sequelize.define('Students', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Wrong Email Format!'
        },
        isUnique: function(value,next){
          Students.find({
            where:{email:value},
            attributes:['id']
          })
          .then(function(err,user){
            if (err || user) {
              return next('Email address already in use!')
              next()
            }
          })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10, 13],
          msg: 'Phone length mush be 10-13 digits'
        },
        not: {
          args: ["[a-z]","i"],
          msg: 'Phone not allow letters'
        }
      }
    }
  },{});

  //instance method
  Students.prototype.getFullName = function(){
    let fullname = this.first_name+' '+this.last_name
    return fullname
  }
  Students.prototype.getAge = function(){
    let now = new Date().getFullYear() 
    let birth = this.birthday.getFullYear()
    let age = now-birth
    return age
  }

  //class method
  Students.getFemaleStudents = function(){
    return new Promise((resolve,reject)=>{
      Students.findAll({
        where:{
          gender: 'female'
        }
      })
      .then(femaleStudents =>{
        //console.log(this)
        femaleStudents.forEach(femaleStudents=>{
          femaleStudents.full_name = femaleStudents.first_name+' '+femaleStudents.last_name
          //console.log(femaleStudents)
        })
        resolve(femaleStudents)
        //console.log(femaleStudents)
      })
    })
    return Students
  }
  Students.associate = function(models) {
    // associations can be defined here
  };
  return Students;
};
