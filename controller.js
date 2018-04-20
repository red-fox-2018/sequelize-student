const Model = require('./models')
const Students = Model.Student

class Controller{

    static showAllData(){
        Students.findAll({raw:true})
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    static getAge(){
        Students.findAll()
        .then( data => {
            data.forEach(result => {
                let birtYear = result.getAge()
                let now = new Date()
                let StudentAge = now.getFullYear() - birtYear
                console.log(result.getFullName()+': '+ StudentAge)
            })
        })
    }

    static getFullNames(){
        Students.findAll()
        .then( data => {
            data.forEach(result => {
                console.log(result.getFullName())
            });
        })
        .catch(err => {
            console.log(err)
        })
    }

    static getFemaleStudents(){
        Students.getFemaleStudents()
        .then( femaleStudents => {
            femaleStudents.forEach(femaleStudent => {
                console.log(femaleStudent.id)
                console.log(femaleStudent.firstName)
                console.log(femaleStudent.lastName)
                console.log(femaleStudent.getFullName())
            })        
        })
        .catch(err => {
            console.log(err)
        })
    }

    static addData(firstName, lastName, gender, birthday, email, phone, Hight){
        Students.create({firstName: firstName, lastName: lastName, gender: gender, birthday: birthday, email: email, phone: phone, Hight: Hight})
        .then(newStudent => {
            console.log(newStudent)
        })
        .catch(err => {
            console.log('Ada Data Yang Tidak Unique')
        })
    }

    static addHight(param,id){
        Students.update({Hight: param},{raw: true, where:{id: id}})
        .then(data =>{
            console.log('Data Berhasil Dimasukan')
        })
        .catch(err => {
           console.log('Tinggi Minimal 150cm')
        })
    }

    static updateEmail(param, id){
        Students.update({email: param},{raw: true, where:{id: id}})
        .then(data => {
            console.log('Data Berhasil Dimasukan')
        })
        .catch(err => {
           console.log('Alamat Email Salah !!')
        })
    }
}

Controller.addData('anugrah','rezki','male','1994-10-25','z@a.com','628117892510',180)