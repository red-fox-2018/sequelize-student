const App = require('../app');
const Models = require('../models');
const View = require('../view/view');

class Controller {
  static getCommand(command) {
    if (command[0] == 'getFullName') {
      Models.Student.findOne({where: {id: command[1]}})
      .then(data => {
        // console.log(data.getFullName());
        View.showFullName(data.getFullName())
        process.exit()
      })
      .catch(function(err) {
        View.showError(err)
        process.exit();
      })
    } else if (command[0] == 'getAge') {
      Models.Student.findOne({where: {id: command[1]}})
      .then(age => {
        // console.log(age.getAge());
        View.showRealAge(age.getAge());
        process.exit();
      })
      .catch(function(err) {
        View.showError(err)
        process.exit();
      })
    } else if (command[0] == 'getFemaleStudent') {
      Models.Student.getFemaleStudent()
      .then(data => {
        View.showFemaleStudents(data);
        process.exit();
      })
      .catch(function(err) {
        View.showError(err)
      })
    } else if (command[0] == 'create') {
      Models.Student.create({first_name: 'aseng', last_name: 'sing', gender: 'male', birthday: '12-12-2018', email: 'aseng@gmail.com', phone: '444-123-343', Tinggi_badan: 125})
    }
  }
}

module.exports = Controller;
