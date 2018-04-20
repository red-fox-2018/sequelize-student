'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'The email you entered is invalid.'
        }/* ,
        isEven(value) {
          Student.find({where: {email:value}}).then(e => {
            console.log(e)
          })
        } */
        // isUnique: function (email) { // This doesn't work
        //   Student.find({ where: { email: email } })
        //     .success(function () { // This gets called
        //       throw new Error({ error: [{ message: 'Email address already in use!' }] });  // But this isn't triggering a validation error.
        //     });
        // }
      }
    },
    phone: /* DataTypes.STRING */{
      type: DataTypes.STRING,
      validate: {
        is: {
          args: ["^\\d+$", 'i'],
          msg: 'Format No Salah'
        },
        len: { 
          args: [10, 13], 
          msg: 'Jumlah angka yang dimasukkan harus min 10 dan max 13' 
        }
      }
    },
    tinggi_badan: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 150,
          msg: 'Tinggi kurang.'
        }
      }
    }
  }, {});

  // class method
  // Student.getFemaleStudents = function() {
  //   Student.findAll({where: {gender: 'female'}})
  //     .then( femaleStudents => {
  //       cb(femaleStudents)
  //     })
  // } 

  Student.getFemaleStudents = function () {
    return Student.findAll({ where: { gender: 'female' } })
  }

  // instance method
  Student.prototype.getFullName = function () {
    return this.first_name + ' ' + this.last_name
  }
  Student.prototype.getAge = function () {
    var DateNow = new Date();
    var birthday = new Date(this.birthday)
    return DateNow.getYear() - birthday.getYear()
  }
  return Student;
};

