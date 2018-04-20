const Model = require('../models')

class ControllerStudent{

    static getFullName(id){
        Model.student.findById(id)
        .then(fullNameStudent =>{
            console.log(fullNameStudent.getFullName())  
        })
        .catch(err =>{
            console.log(err)
        })
    }

    static getAge(id){
        Model.student.findById(id)
        .then(usia => {
            console.log(`usia nya: ${usia.getAge()}`)
        })
    }

    static getFemaleStudent(){
        Model.student.getFemaleStudent(studentData => {
            studentData.forEach(student => {
                console.log(student.id)
                console.log(student.first_name)
                console.log(student.last_name)
                console.log(student.getFullName())
            });
            
        })
    }

    static inputStudent(objStudent){
        // Model.student.addStudent(objStudent)
        Model.student.create({
            first_name: objStudent.first_name,
            last_name: objStudent.last_name,
            gender: objStudent.gender,
            birthday: objStudent.birthday,
            email: objStudent.email,
            phone: objStudent.phone,
            hight: objStudent.hight
        })
        .then(newStudent => {
            console.log(`data berhasil diinput`)
        })
        .catch(msgErro => {
            console.log(msgErro)
        })
            // }
    }
}

// ControllerStudent.getFullName(1)
// ControllerStudent.getAge(1)
// ControllerStudent.getFemaleStudent()
let objStudent = {
    first_name: 'muhammad',
    last_name: 'maulana',
    gender: 'male',
    birthday: '1986-11-2',
    email: 'yasir.maulana@gmail.com',
    phone: '081586245143',
    hight: 160
}
ControllerStudent.inputStudent(objStudent)

module.exports = {ControllerStudent}