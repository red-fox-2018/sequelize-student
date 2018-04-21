const Models = require('./models')

// Models.Student.findAll().then(data=>{
//     data.forEach(student=>{
//         console.log(student.getFullName())
//         console.log(student.getDate())
//     })
// })
// Models.Student.getFemaleStudent(function (female_students) {
//     female_students.forEach(female_student=>{
//         console.log(female_student.id)
//         console.log(female_student.first_name)
//         console.log(female_student.last_name)
//         console.log(female_student.full_name)
//     })
// })

Models.Student.create(
    {
        first_name: 'max',
        last_name:'milan',
        gender:'male',
        birthday:'1998-10-24',
        email: 'erliaang@davis.name',
        phone: '11121131222',
        createdAt:new Date(),
        updatedAt:new Date(),
        Height: 151
    }
)
.then(student=>{
    console.log(student)
})
.catch(err=>{
    console.log(err.message)
})
