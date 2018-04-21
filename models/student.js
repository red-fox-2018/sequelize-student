'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    email: 
    {
      type: DataTypes.STRING, 
      validate:{
        isEmail:{
          args:true,
          msg:'email should includes @ and .'
        },
        isUnique: function (email,cb) {
          Student.findOne({where:{email:email}})
          .then(function(notAvailabel){
            if(notAvailabel){
              cb(true)
            }
            else{
              cb(false)
            }
          })
        }
      }
    },
    phone: {type:DataTypes.STRING,
            validate:{
              len:{
                    args: [10, 13],
                    msg:'phone length must more then 10 and under 13'
                  },
              isNumeric:{
                    args: true,
                    msg: 'its not a number'
                  }
              }
            },
    Height: { type: DataTypes.INTEGER, validate: { min: 150 } },
  }, {});
  //INSTANCE METHOD
  Student.prototype.getFullName = function(){
    return this.first_name + this.last_name
  }
  Student.prototype.getDate = function () {
    let birthday = new Date(this.birthday) 
    let now = new Date()
    let year = birthday.getFullYear()
    let yearNow = now.getFullYear()
    let result = yearNow - year
    return result
  }
  //CLASS METHOD
  Student.getFemaleStudent = function (callback){
    Student.findAll({
      where:{
        gender:'female'
      }
    })
    .then(female_students=>{
      for(let i=0;i<female_students.length;i++){
        female_students[i].full_name = female_students[i].getFullName()
      }
        callback(female_students)
    })
  }
  return Student;
};