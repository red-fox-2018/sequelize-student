const {Student} = require('./models')
var command = process.argv.slice(2)


// if(command[0] === 'get full name') {
//   Student.findAll()
//   .then((students) => {
//     students.forEach(function(student) {
//       console.log(student.getFullName());
//     })
//   })
//   .catch((err) => {
//     console.log(err);
//   })
// }
//
// if(command[0] === 'get full name') {
//   Student.findAll()
//   .then((students) => {
//     students.forEach(function(student) {
//       console.log(student.getAge());
//     })
//   })
//   .catch((err) => {
//     console.log(err);
//   })
// }
//
// if(command[0] === 'get female student') {
//   Student.getFemaleStudent((students) => {
//     students.forEach((students) => {
//       console.log(students.full_name);
//     })
//   })
// }

// Student.addNew({first_name: command[1],
// last_name: command[2],
// gender: command[3],
// email: command[4],
// phone: command[5],
// height: command[6]},  (newStudent) => {
//   console.log(newStudent);
// })

Student.addNew({
    first_name: 'Sam',
    last_name: 'Smith',
    gender: 'male',
    email: 'samsmith@mail.com',
    phone: '081122334455',
    height: 170
  },  (newStudent) => {
    console.log(newStudent);
})

// Student.updateData(inputId, column, value, (updated) => {
//   console.log(updated);
// })
