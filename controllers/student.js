'use strict';
const Model = require('../models');
const View = require('../views/view');

class Controller {
  static full_name(id) {
    Model.Student.findById(id)
      .then(student => {
        let fullName = student.getFullName();
        View.showData(fullName);
      })
      .catch(err => {
        View.showErrorMessage(err);
      })
  }

  static current_age(id) {
    Model.Student.findById(id)
      .then(student => {
        let age = student.getAge();
        View.showData(age);
      })
      .catch(err => {
        View.showErrorMessage(err)
      })
  }

  static female_students() {
    Model.Student.getFemaleStudent()
      .then(students => {
        students.forEach(student => {
          View.showData(student.id);
          View.showData(student.first_name);
          View.showData(student.last_name);
          View.showData(student.full_name);
        });
      })
      .catch(err => {
        View.showErrorMessage(err);
      })
  }
}

Controller.female_students();