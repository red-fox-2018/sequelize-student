const { Student } = require ('./models')


// Student.findAll()
// .then(function(students){
//   students.forEach(student => {
//     console.log(student.getAge());
//     console.log(student.getFullName());
//   })
//   // console.log();
//   process.exit()
// })

Student.getFemaleStudent('gender', 'female')
  .then(function(students){
    students.forEach( function(student){
      console.log(student.id);
      console.log(student.full_name);
      console.log(student.age);
    })
    // console.log(students);
    process.exit()
  })
  .catch(err => {
    console.log(err);
  })
