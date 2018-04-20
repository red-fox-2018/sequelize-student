const {Student} = require('./models')

Student.findAll()
.then((students) => {
  students.forEach(function(student) {
    console.log(student.getFullName());
  })
})
.catch((err) => {
  console.log(err);
})

Student.findAll()
.then((students) => {
  students.forEach(function(student) {
    console.log(student.getAge());
  })
})
.catch((err) => {
  console.log(err);
})

Student.getFemaleStudent((students) => {
  students.forEach((students) => {
    console.log(students.full_name);
  })
})
