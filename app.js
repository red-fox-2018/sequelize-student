//const Models = require('./models')
const Controller = require('./controller.js')
const View = require('./view.js')

let command = process.argv.slice(2)

if (command[0]==='add') {
	Controller.addStudent(command.slice(1))
	console.log(command.slice(1))
}
if (command[0]==='findAll') {
	Controller.findAll(command.slice(1))
}
if (command[0]==='findFemale') {
	Controller.findFemale()
}

//console.log(command)	