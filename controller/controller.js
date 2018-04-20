const db = require('../models');
const View = require('../View');


class Controller {
  constructor() {

  }

  static showHelp(){
      View.help()
  }

  static FullName(data){
    //console.log(number);
    db.Student.findOne({
      where: {id: data}
    })
    .then(student => {
      View.show(student.getFullName())
      process.exit()
    })
  }

  static getAge(data){
  //  console.log('======',data);
    db.Student.findOne({
      where: {id: data}
    })
    .then(student => {
    //  console.log(student);
      View.show(student.getAge());
      process.exit()
    })
    .catch(function(err){
      console.log(err);
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

  static add(obj){
    console.log(obj.first_name);
    let student = db.Student.create({
      first_name: obj.first_name,
      last_name: obj.last_name,
      gender: obj.gender,
      birthday: obj.birthday,
      email: obj.email,
      phone: obj.phone,
      height: obj.height
    })
    process.exit()
  }


}

module.exports = Controller;
//
