const model=require('./models')

class Student{
    static addStudent(){
        model.Stoodent.create({first_name:'Nikolas',last_name:'Friesen',gender:"female",birthday:"1998-12-24",email:"lololoo@gmail.com",phone:4498977415,height:80})
        .then(stoodent=>{
            console.log("testing")
        })
    }

    static getFullName(){
        model.Stoodent.findAll().then(stoodent=>{
           for(var i=0; i<stoodent.length; i++){
              console.log(stoodent[i].getFullName())
           }
        })
    }


    static getBirthday(){
        model.Stoodent.findAll().then(stoodents=>{
            stoodents.forEach((student)=>{
                let birthday = student.birthday
                let year = new Date().getFullYear()
                var birthYear= Number(birthday.slice(0,4))
                console.log(year-birthYear+" years old")
            })
        })
    }

    static getFemaleStudent(){
        model.Stoodent.getFemaleStudent().then(stoodents=>{
            stoodents.forEach(stoodent=>{
                console.log(stoodent.getFullName())
            })
        })
    }

}


Student.addStudent()
// Student.findAll()
// Student.getBirthday()
// Student.getFemaleStudent()