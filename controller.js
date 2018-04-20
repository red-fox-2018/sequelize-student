const model = require('./models');
const Student = model.Student

class Controller {
  constructor() {

  }

  static showFullName() {
    Student.findAll().then((students) => {
      students.forEach(function (student) {
        student.getFullName();
      });
    })
  }

  static showAge() {
    Student.findAll({
      attributes: ['birthday']
    })
    .then((birthdays) => {
      birthdays.forEach(function (birthday) {
        birthday.getAge()
      })
    })
  }

  static showFemaleStudents() {
    Student.getFemaleStudents(students => {
      console.log(students);
    })
  }

  static updateEmailById(condition) {
    //[0] id; [1] newEmail
    Student.update({
      email: condition[1],
      updatedAt: new Date()
      }, {
        where: {id: condition[0]},
        returning: true
      })
      .then((countAndRows) => {
        console.log(countAndRows);
      })
  }
}

module.exports = Controller
