const model = require("./models")


class Controller {

	static showFullName() {
		model.Student.findAll().then(dataStudents =>{
			dataStudents.forEach(function(dataStudent) {
				console.log(dataStudent.getFullName())
			})
		})	
	}


	static showAge() {
		model.Student.findAll().then(dataStudents => {
			dataStudents.forEach(function(dataStudent) {
				console.log(dataStudent.getAge())
			})

		})
	}

	static getFemale() {
		model.Student.getFemaleStudent().then(dataFemale => {
			console.log(dataFemale)
		})
	}





}

// Controller.getFemale()

model.Student.create({ first_name:"tes" , last_name: "tes",gender:"tes",birthday:"2018-04-20",email:"tes1@gmail.com",phone:"234",height:159, createdAt: new Date(),updatedAt:new Date() ,raw:true}).then(task => {
  			console.log(task.get({plain:true}))
			})