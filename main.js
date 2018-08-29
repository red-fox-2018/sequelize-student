const models = require('./models')

class Student {

    static getFullName () {

        models.Student.findAll().then(student =>{
            for (let i = 0; i < student.length; i++) {
                
                console.log(student[i].getFullName());
            }
            process.exit()
        })
    }

    static getAge () {

        models.Student.findAll().then(data => {
            for (let i = 0; i < data.length; i++) {
                
                console.log(data[i].getAge());
            }
            process.exit()
        })
    }

    static getFemaleStudent () {

        models.Student.getFemaleStudent({raw:true}).then(femaleStudent => {
            for (let i = 0; i < femaleStudent.length; i++) {
                let fStudent = femaleStudent[i]
                console.log(fStudent.id);
                console.log(fStudent.first_name);
                console.log(fStudent.last_name);
                console.log(fStudent.getFullName());
                
            }
            process.exit()
        })        
    }

    static addStudet (fNameNew,lNameNew,genderNew,birthdayNew,emailNew,phoneNew,heightNew) {

        models.Student.create({
            first_name: fNameNew,
            last_name: lNameNew,
            gender:genderNew,
            birthday:birthdayNew,
            email:emailNew,
            phone:phoneNew,
            tinggi_badan:heightNew
        })
        .then(function(newStudent) {
            console.log(newStudent);
            process.exit()  
        })
    }
}

Student.getAge()
student.getFullName()
student.getFemaleStudent()
student.addStudet('Paul','William','male','1993-10-22','a@gmail.com','1123124123',157) //true
student.addStudet('Paul','William','male','1993-10-22','asgmail.com','1123124123',157) //false email
student.addStudet('Paul','William','male','1993-10-22','a@gmail.com','1123124123',157) //same email
student.addStudet('Paul','William','male','1993-10-22','b@gmail.com','1-123124123',157) //false number alpha
student.addStudet('Paul','William','male','1993-10-22','b@gmail.com','1123',157) //false number length
student.addStudet('Paul','William','male','1993-10-22','b@gmail.com','1-123124asdas',157) //false number not number
