module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
       type: DataTypes.STRING,
       validate: {
           isUnique: function(value, next) {
               Student.findAll({
                   where: {email: value},
               }).then(student=>{
                 if(student){
                   return next('email sudah ada')
                 }else{
                   return next()
                 }
               }).catch((err) => {throw err})
           },isEmail :{
             args: true,
             msg : 'masukan email dengan baik dan benar'
           }
      }
    },
    phone: DataTypes.STRING,
    height: {type: DataTypes.INTEGER,
    validate:{
      min:{
        args: 150,
        msg: 'minum hilo tumbuh koq kesamping bukan keatas'
      }
    }}
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  //Class Method
  Student.getFemaleStudents = function () {
    return Student.findAll({where : {
      gender: 'female'
    }});
  };


  //Instance Method
  Student.prototype.getFullName = function(){
    let fullname = this.first_name +' '+ this.last_name;
    return fullname;
  };

  Student.prototype.getAge = function(){
    let today = new Date();
    let birthDate = new Date(this.birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    return age;
  };

  return Student;
};
