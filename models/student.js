'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email:{
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'email is not valid!' 
        }, 
        isUnique: function (value, next){
          Student.findOne({
            where: {email: value},
          })
          .then(email =>{
            if(email){
              next('email already taken!')
            }
          })
          .catch(error =>{
            next(err)
          })
        }
      }
    }, 
    
    phone: DataTypes.STRING,
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 150,
          msg: 'min 150cm'
        } 
      } 
    }
    
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  //Instance Method
  Student.prototype.getFullName = function(){
    let fullName = `${this.first_name} ${this.last_name}`

    return fullName
  }

  Student.prototype.getAge = function(){
    let age = new Date().getFullYear() - this.birthday.getFullYear()

    return age
  }

  //Class Method
  Student.getFemaleStudent = function(){
    return new Promise ((resolve, reject) =>{
      Student.findAll({
        where: {
          gender: 'female'
        }
      })
      .then (femaleStudents =>{    
        for(let i = 0; i < femaleStudents.length; i++){
            femaleStudents[i].full_name = femaleStudents[i].getFullName()
        }    
        resolve(femaleStudents)
      })
      .catch(error =>{
        reject(error)
      })
    })
  }

  return Student;
};