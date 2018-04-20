const argv = process.argv
const Controller = require('./controllers/controller');
const command = argv[2]

switch (command) {
  case 'getFullName':{ return Controller.getFullName() }
  case 'getAge':{ return Controller.getAge() }
  case 'getFemaleStudent':{ return Controller.getFemaleStudent() }

  default:{return console.log(`please input valid command`)}

}
