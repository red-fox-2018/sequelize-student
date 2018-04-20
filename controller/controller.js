const db = require('../models');
const View = require('../View');


class Controller {
  constructor() {

  }

  static showHelp(){
      View.help()
  }

  static FullName(){
    //console.log(number);
    db.Student.findOne({
      where: {id: 1}
    })
    .then(student => {
      View.show(student.getFullName())
      process.exit()
    })
  }

  static getAge(){
    db.Student.findOne({
      where: {id: 2}
    })
    .then(student => {
      View.show(`${student.getAge()}`);
      process.exit()
    })
  }

  static FemaleStudent(){
    var all = db.Student.getFemaleStudent(function(student){
      student.forEach(function(student){
        View.show(`===================================`)
        View.show(`id        : ${student.id}`)
        View.show(`firstname : ${student.first_name}`)
        View.show(`lastname  : ${student.last_name}`)
        View.show(`fullname  : ${student.getFullName()}`)
        View.show(`===================================`)
      })

      process.exit()
    })

  }


}

module.exports = Controller;
//
