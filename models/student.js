'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: { 
        isEmail: {
          args: true,
          msg: 'Email yang dimasukan tidak unik !!'
        }, 
        isUnique:function(value,next){
          Student.find(
            {where:{email: value} 
          })
          .then(value =>{
            if(value !== null){
              return next('Email sudah terdaftar !!')
            }
            else{
              next();
            }
          })
        }
      }
    },
    phone:{
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10,13],
          msg: 'Jumlah digit nomor telefon harus antara 10-13 digit !!'
        },
        not:{
          args: ["[a-z]",'i'],
          msg: 'nomor telefon tidak boleh ada huruf !!'
        }
      }
    },
    Hight: {
      type: DataTypes.INTEGER,
      validate: { 
        min: {
          args: 150,
          msg: 'Tinggi Badan Minimal 150 !!'
        } 
      }
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