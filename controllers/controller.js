/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

const Model = require('../models');
const View = require('../views/view');

class Controller {

   static list() {
      Model.Student.findAll({
            raw: true
         })
         .then(data => {
            View.read_all(data);
         })
         .catch(err => {
            console.log(err.message);
         });
   }

   static findOne(id) {
      Model.Student.findById(id, {
            raw: true
         })
         .then((data) => {
            View.read_one(data);
         })
         .catch(err => {
            console.log(err.message);
         });
   }

   static getAgeStudent(id) {
      Model.Student.findById(id)
         .then(data => {
            View.list(data.getAge());
         }).catch(err => {
            console.log(err.message);
         });
   }

   static getFullNameStudent(id) {
      Model.Student.findById(id)
         .then(data => {
            View.list(data.getFullName());
         }).catch(err => {
            console.log(err.message);
         });
   }

   static findFemale() {
      Model.Student.getFemaleStudent((students)=>{
          View.getFemale(students);
        });
   }

   static add(first_name, last_name, gender, birthday, email, phone, height) {
      let student = Model.Student.build({
         first_name: first_name,
         last_name: last_name,
         gender: gender,
         birthday: birthday,
         email: email,
         phone: phone,
         height: height
      });
      student.save()
         .then(() => {
            View.add(student);
         })
         .catch(err => {
            console.log(err.message);
         });
   }

   static update(id, column, value) {
      let student = Model.Student.findById(id)
         .then((student) => {
            student.update({
                  [column]: value
               })
               .then((studentUpdate) =>{
                  View.update(studentUpdate);
               })
               .catch(err => {
                  console.log(err.message);
               });
         })
         .catch(err => {
            console.log(err.message);
         });
   }

   static delete(id) {
      let student = Model.Student.findById(id)
         .then((student) =>{
            student.destroy()
               .then(() =>{
                  View.delete(student);
               })
               .catch(err => {
                  console.log(err.message);
               });
         })
         .catch(err => {
            console.log(err.message);
         });
   }
}

module.exports = Controller;
