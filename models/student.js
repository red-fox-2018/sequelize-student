'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING
    },
    phone: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: 151
      }
    },
    birthday: DataTypes.STRING,
  }, {
    timestamps: false
  });

  Student.getFemaleStudent = function(students) {
    return Student.findAll({ where: { gender: 'female' } })
  }

  Student.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };

  Student.prototype.getAge = function() {
    return 2018 - Number(this.birthday.split('-')[0]);
  }

  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};

/*
validate: {
  isEmail: true,
  isUnique: function (email, cb) {
    Student.find({where:{email: email}})
    .then(function (u) {
      if (u) {
        throw new Error('Email address already in use!');
        cb(true);
      }
    });
  }
}
*/