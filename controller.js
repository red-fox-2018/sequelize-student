const models = require('./models');
const view = require('./view')

models.Student.findAll().then(data=>{
  for(let i =0; i<data.length;i++){
    view.show(data[i].getFullName())
  }

});

models.Student.findAll().then(data=>{
  for(let i =0; i<data.length;i++){
    data[i].getAge()
  }
});

var all = models.Student.getFemaleStudent(function(student){
  student.forEach(function(Student){
    view.show(Student.id);
    view.show(Student.first_name);
    view.show(Student.last_name);
    view.show(Student.getFullName());
  })
});

  // process.exit()
