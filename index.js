'use strict';
const Student = require('./controllers/student');
const commands = process.argv;

switch (commands[2]) {
  case 'add':
    Student.add_student(commands[3], commands[4], commands[5], commands[6], commands[7], commands[8], commands[9]);
    break;
  case 'getFullName':
    Student.full_name(commands[3]);
    break;
  case 'getAge':
    Student.current_age(commands[3]);
    break;
  case 'getFemaleStudents':
    Student.female_students();
    break;
  default:
    break;
}