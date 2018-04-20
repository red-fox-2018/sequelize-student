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
    case 'add':{return Controller.add({first_name:content[0],
                                       last_name:content[1],
                                       gender:content[2],
                                       birthday:content[3],
                                       email:content[4],
                                       phone:content[5],
                                       Height:content[6]})}
    default:{return Controller.showHelp()}
  }



}
