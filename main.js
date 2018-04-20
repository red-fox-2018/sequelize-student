const argv = process.argv.slice(2)
const Controller = require('./controller');

let command = argv[0]

switch (command) {
  case 'show:all:fullName':
    Controller.showFullName()
    break;
  case 'show:all:age':
    Controller.showAge()
    break;
  case 'show:all:female':
    Controller.showFemaleStudents()
    break;
  case 'update:email':
    Controller.updateEmailById(argv.slice(1))
    break;
  default:

}
