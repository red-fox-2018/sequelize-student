/*jshint esversion:6*/

const { Student } = require('./models');


class Controller{
  static getFemale(){
    Student
      .getFemaleStudents()
      .then(students => {
        for(let i = 0 ; i < students.length ; i++){
          students[i].FullName = students[i].getFullName();
        }
        console.log(students);
      });
  }

  static getFullName(){
    Student.findAll()
    .then(students=>{
      for(let i = 0 ; i < students.length ; i++){
        console.log(students[i].getFullName());
      }
    });
  }

  static getStudentsAge(){
    Student.findAll()
    .then(students=>{
      for(let i = 0 ; i < students.length ; i++){
        console.log(students[i].getAge());
      }
    });
  }

}


Controller.getFemale();
Controller.getStudentsAge();
Controller.getFullName();
