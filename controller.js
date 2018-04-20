const model = require('./models')

// console.log(database);
// model.Student.findAll().then(result => {
//   result.forEach(function (dataStudent) {
//     console.log(dataStudent.getFullName());
//   })
// })
//
// model.Student.findAll().then(result => {
//   result.forEach(function (dataStudent) {
//     console.log(dataStudent.getAge());
//   })
// })
//
// // model.Student.findAll(
// //   {
// //     where :{gender:'female'}
// //   })
// //   .then(result => {
// //   console.log(result);
// // })
// model.Student.getFemaleStudent().then(dataFemale => {
//   console.log(dataFemale);
// })

model.Student.create({
  first_name: `Brad`,
  last_name: `Pitt`,
  gender: `Female`,
  birthday: '1996-05-27',
  email: 'Jennyfer@gmail.com',
  phone: '0812223123',
  createdAt: new Date(),
  updatedAt: new Date(),
  Height: 160
})
