const Controller = require('./controller/controller');

let argv = process.argv
let command = argv[2]
let content = argv.slice(3)

if( command===undefined||command=='help'){
  Controller.showHelp()
}else{
  switch (command) {
    case 'getFullName':{return Controller.FullName(Number(content[0])) }
    case 'getAge':{return Controller.getAge(Number(content[0])) }
    case 'getFemaleStudent':{return Controller.FemaleStudent()}

      break;
    default:{return Controller.showHelp()}
  }



}
