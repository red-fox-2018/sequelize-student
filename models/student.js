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
          msg:'salah'
        },
        isUnique : true
      }
    },
    phone: DataTypes.STRING,
    Tinggi_badan: {
      type: DataTypes.INTEGER,
      validate: {
        min: 150,
        args: true,
        msg: 'harus diatas 150 !'
      }
    }
  }, {});
  //class method
  Student.associate = function(models) {
    // associations can be defined here
  };

  //instace method
  Student.prototype.getFullName = function() {
    var fullname = this.first_name + ' ' + this.last_name;
    return fullname;
  }

  Student.prototype.getAge = function() {
    var yearLahir = this.birthday.split('-')[0]
    var yearSekarang = new Date().getFullYear();
    var age = yearSekarang - yearLahir;

    return age;
  }

  //class method
  Student.getFemaleStudent = function() {
    return Student.findAll({where: {gender: 'female'}})
    .then(data => {
      return data
    })
  }

  return Student;
};
