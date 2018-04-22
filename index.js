const Model = require('./models')

Model.Student.findAll()
.then(function(result){
    result.forEach(fullname => {
        console.log(fullname.getFullName())
        console.log(fullname.getAge())
    });
})

//Class Method promise
// Model.Student.getFemaleStudent()
// .then(function(students){
//     students.forEach(student => {
//         console.log(student.fullname)
//     });
// })

//Class Method versi callback
Model.Student.getFemaleStudent(function(students) {
    students.forEach(student => {
        console.log(student.fullname)
    });
})

Model.Student.create(
    { 
        first_name: 'keshin',
        last_name: 'himura',
        gender: 'male',
        birthday: '1998-12-24',
        email: 'keshinhimura.com',
        phone: '449.897.741534a',
        height: 150,
        createdAt: new Date(),
        updatedAt: new Date(), 
    }
)
.then(user => {
    console.log(user.get({plain: true}))
})
.catch(err =>{
    console.log(err.message)
})

