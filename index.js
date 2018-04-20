
let models = require('./models');
let Student = models.Student;

Student.findAll().then(rows => {
  console.log(` ----------get fullName()`);
  rows.forEach(row => {
    console.log(row.getFullName());
  })
});

Student.findAll().then(rows => {
  console.log(`------------ get getAge()`);
  rows.forEach(row => {
    console.log(row.firstName, row.getAge());
  })
});

Student.getFemaleStudent().then(femaleStudents => {
  console.log(`------------ get getFemaleStudent()`);
  femaleStudents.forEach(fs => {
    console.log(fs.getFullName());
  })
});