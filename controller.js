const models = require('./models');
const view = require('./view')
class Controller{
    static getFullNameStudent(){
      models.Student.findAll().then(data=>{
        for(let i =0; i<data.length;i++){
          view.show(data[i].getFullName())
        }

      });
    }

    static getAgeStudent(){
      models.Student.findAll().then(data=>{
        for(let i =0; i<data.length;i++){
          data[i].getAge()
        }
      });
    }

    static getFullFemaleStudent(){
      var all = models.Student.getFemaleStudent(function(student){
        student.forEach(function(Student){
          view.show(Student.id);
          view.show(Student.first_name);
          view.show(Student.last_name);
          view.show(Student.getFullName());
        })
      });
    }

    static addStudent(first_name,last_name,gender,birthday,email,phone,heigh){
      models.Student.create({
        first_name:first_name,
        last_name:last_name,
        gender:gender,
        birthday:birthday,
        email:email,
        phone:phone,
        heigh:heigh,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      .then((obj)=>{
          Controller.getFullName()
      })
      .catch((obj)=>{
        view.show(`Error found : ${obj.errors[0].message}`)
      })

    }
}

Controller.addStudent('ujang','abraham','male','1996-02-23','udin@gmail.com','0987676-98',170)






  // process.exit()
