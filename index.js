
let models = require('./models');
let Student = models.Student;

let argv = process.argv.slice(2);
let command = argv.slice(0, 2).join(' ');
let values = argv.slice(2);

switch(command) {
  case 'student add': {
    let firstName = values[0];
    let lastName = values[1];
    let email = values[2];
    let phone = values[3];
    let gender = values[4];
    let height = values[5];
    let birthday = values[6];

    Student.create({ firstName, lastName, email, phone, gender, height, birthday })
      .then(student => {
        if (student) {
          console.log(`Data baru berhasil dimasukan!`);
          process.exit(0);
        } else {
          console.log(`Gagal memasukan data!`);
          process.exit(0);
        }
      });
    break;
  }
  default:
    console.log('Please enter correct command!');
    break;
}

// ---------------------------------------------

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