const Model = require('../models/index');
const View = require('../views/view');

class Controller {
  constructor() {

  }

  static getFullName(){

    Model.Student.findAll()

    .then(data => {

      for (var i = 0; i < data.length; i++) {

        View.show(`${data[i].id}. ${data[i].getFullName()}`)

      }

      process.exit()

    })
    .catch(err => {

      View.show(`error`);

    })

  }

  static getAge(){

    Model.Student.findAll()

    .then(data => {

      for (var i = 0; i < data.length; i++) {

        View.show(`${data[i].getAge()}`)

      }

      process.exit()

    })
    .catch(err => {

      View.show(`error`);

    })

  }

  static getFemaleStudent(){

    var all = Model.Student.getFemaleStudent(function(students) {

      students.forEach(student => {
        View.show(student.id)
        View.show(student.first_name)
        View.show(student.last_name)
        View.show(student.getFullName())
      })

    })

  }

}

module.exports = Controller;
