const db = require('./models')
const View = require('./view')


class Controller {

    static studentFullName(){
        db.Student.findAll()  
        .then(students=>{
            
            for(let i = 0; i < students.length; i++){
              View.print(students[i].getFullName());
            }
            process.exit();
        })
        .catch(error=>{
            View.print(error);
        })
    }

    static studentAge(){
        db.Student.findAll()
        .then(students=>{

            for(let i = 0; i < students.length; i++){
                View.print(students[i].getAge());
            }
            process.exit()
        })
        .catch(error=>{
            View.print(error);
        })
    }

    static femaleStudent(){
        db.Student.getFemaleStudent()
        .then(femaleStudents =>{
            femaleStudents.forEach(function(student){
                View.print(`id: ${student.id}`)
                View.print(`first name: ${student.first_name}`)
                View.print(`last name: ${student.last_name}`)
                View.print(`full name: ${student.full_name}`)
            })
            process.exit()
        })
        .catch(error=>{
            View.print(error);
        })        
    }

    static createStudent(firstName, lastName, gender, birthday, email, phone, height){
        
        db.Student.create({
            first_name: `${firstName}`,
            last_name: `${lastName}`,
            gender: `${gender}`,
            birthday: `${birthday}`,
            email: `${email}`,
            phone: `${phone}`,
            height: `${height}`
        })
        .then(student =>{
            View.print('add student success')
            
        })
        .catch(error =>{
            View.print(error)
        })
    }

}

// Controller.studentFullName()
// Controller.studentAge()
Controller.femaleStudent()

