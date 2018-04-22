const model = require('./models')
const View = require('./view.js')
const Students = model.Students
const Sequelize = require('sequelize')
require('sequelize-values')(Sequelize)

class Controller{
	static addStudent(data){
		Students.create({
			first_name: data[0],
			last_name: data[1],
			gender: data[2],
			birthday: data[3],
			email: data[4],
			phone: data[5],
			createdAt: new Date(),
			updatedAt: new Date(),
			height: Number(data[6])
			
		})
		.then((student)=>{
			View.addStudent(student)
		})
		.catch((err)=>{
			View.showErr(err)
		})
	}
	static findAll(){
		Students.findAll({
			attributes:['id','first_name','last_name','gender','birthday',
			'email','phone','height']
		})
		.then((students)=>{
			return students.map((students)=>{
				return students.getValues()
			})
		})
		.then((students)=>{
			View.showStudents(students)
		})
		.catch((err)=>{
			View.showErr(err)
		})
	}
	static findFemale(){
		model.Students.getFemaleStudents()
		.then((students)=>{
			students(students)
		})
		.catch((err)=>{
			View.showErr()
		})
	}
}

module.exports = Controller