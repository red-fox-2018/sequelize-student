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
 
  static createStudent(first_name,last_name,gender,birthday,email,phone,height){
    Student.create({ first_name:`${first_name}`,last_name:`${last_name}`,gender:`${gender}`,birthday:`${birthday}`,email:`${email}`,phone:`${phone}`,height:`${height}`})
    .then(function(data){
    console.log(data.first_name);
    }).catch(function(error){
      throw error;
    });
  }
}


// Controller.getFemale();
// Controller.getStudentsAge();
// Controller.getFullName();
Controller.createStudent('Iwan','Joni','male','1997-08-20','nora@treutel.name','4642343654',125)
