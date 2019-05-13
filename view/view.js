const Controller = require('../controller/controller');

class View {
  static showError(error) {
    console.log(error);
  }

  static showFullName(full_name) {
    console.log(full_name);
  }

  static showRealAge(age) {
    console.log(age);
  }

  static showFemaleStudents(data) {
    console.log(data);
  }
}

module.exports = View;
