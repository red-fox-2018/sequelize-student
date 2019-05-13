var argv = process.argv;
const Controller = require('./controller/controller');

var command = argv.slice(2);
Controller.getCommand(command);

module.exports = command;
