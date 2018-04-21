'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Check your email again'
        },
        isUnique: function(value, next) {
          Student.find({
            where: {
              email: value
            }
          })
          .then(function(err, emailStudent) {
            if(err) return next(err)
            if(emailStudent) return next('Email already have been used')
            next()
          })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        not: {
          args: ["[a-z]",'i'],
          msg: 'Phone not allow letters'
        },
        isNumeric: {
          args: true
        },
        len: {
          args: [10, 13],
          msg: 'Phone length must be 10 - 13'
        }
      }
    },
    Height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 150,
          msg: 'Your height have to be 150 cm or greater'
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here

  };

  Student.prototype.getFullName = function () {
    let fullName =  this.first_name + ' ' + this.last_name
    return fullName
  }

  Student.prototype.getAge = function () {
    let year = new Date(this.birthday).getFullYear()
    let now = new Date().getFullYear()
    let age = now - year
    return age
  }

  Student.getFemaleStudent = function(cb) {
    Student.findAll({
      where: {
        gender: 'female'
      }
    })
    .then((students) => {
      for(let i in students) {
        students[i]["full_name"] =
        students[i].first_name + ' ' + students[i].last_name
      }
      cb(students)
    })
  }

  Student.addNew = function(objStudent, cb) {
    Student.create({
      first_name: objStudent.first_name,
      last_name: objStudent.last_name,
      gender: objStudent.gender,
      email: objStudent.email,
      phone: objStudent.phone,
      height: objStudent.height
    })
    .then(newStudent => {
      cb('added a new student')
    })
    .catch(err => {
      cb(err.message)
    })
  }

  Student.updateData = function(inputId, column, value, cb) {
    Student.update({
      [column]: value
    }, {
      where: {
        id: inputId
      }
    })
    .then(updated => {
      cb(updated)
    })
    .catch(err => {
      cb(err.message)
    })
  }

  Student.deleteData = function(inputId, cb) {
    Student.update({
      where: {
        id: inputId
      }
    })
    .then(deleted => {
      cb(deleted)
    })
    .catch(err => {
      cb(err.message)
    })
  }

  return Student;
};
