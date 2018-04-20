/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/


class View {

   static read_one(data) {
      console.log(data);
      process.exit();
   }

   static read_all(data) {
      console.log(data);
      process.exit();
   }

   static getFemale(data) {
     data.forEach((Student)=> {
       console.log('> Id:', Student.id);
       console.log('  Full Name:', Student.full_name);
     });
     process.exit();
   }

   static list(data) {
      console.log(data);
      process.exit();
   }

   static add(data) {
      console.log(`Data ${data.first_name} berhasil ditambahkan`);
      process.exit();
   }

   static delete(data) {
      console.log(`Data ${data.first_name} berhasil di hapus`);
      process.exit();
   }

   static update(data) {
      console.log(`Data ${data.first_name} berhasil di update`);
      process.exit();
   }
}

module.exports = View;
