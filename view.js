const Controller = require('./controller.js')

class View{
	static showErr(err){
		console.log(err)
	}
	static addStudent(data){
		console.log(data)
	}
	static showStudents(data){
		console.log(data)
	}
	static emailUsed(data){
		console.log(data,'already used')
	}
}

module.exports = View

console.log(__dirname)