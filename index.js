'use strict';
const Student = require('./controllers/student');
const commands = process.argv;

switch (commands[2]) {
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