const db = require('./models');

let input = process.argv.splice(2);
let command = input[0];

// db.Student.findAll().then(students => {
//   students.forEach(student => {
//     console.log(student.getFullName());
//   });
// });

// db.Student.findAll().then(students => {
//   students.forEach(student => {
//     console.log(student.getFullName(), 'usia', student.getAge(), 'tahun');
//   });
// });

// db.Student.getFemaleStudents()
//   .then(femaleStudents => {
//     femaleStudents.forEach(femaleStudent => {
//       console.log(femaleStudent.getFullName())
//     });
//   });

// if (command == 'add') {
//   var first_name = input[1];
//   var last_name = input[2];
//   var gender = input[3];
//   var email = input[4];
//   var phone = input[5];
//   var createdAt = new Date();
//   var updateAt = new Date();


// }

db.Student.create({
  first_name: 'Moskov',
  last_name: 'Aureil',
  gender: 'male',
  birthday: '1994-10-10',
  email: 'faipmardoni@gmail.com',
  phone: '081213',
  createdAt: new Date(),
  updatedAt: new Date(),
  tinggi_badan: 166
})
  .then(
    student => {
      console.log(student.get({ plain: true }))
    }
  )
  .catch(err => {
    console.log(err.errors[0].message)
  }); 