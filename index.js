/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

const Controller = require('./controllers/controller.js');
const argv = process.argv;

class Start {
   static run() {
      switch (argv[2]) {
         case 'read_one':
            Controller.findOne(argv[3]);
            break;
         case 'read_all':
            Controller.list();
            break;
         case 'add':
            Controller.add(argv[3], argv[4], argv[5], argv[6], argv[7], argv[8], argv[9]);
            break;
         case 'update':
            Controller.update(argv[3], argv[4], argv[5]);
            break;
         case 'delete':
            Controller.delete(argv[3]);
            break;
         case 'get_fullname':
            Controller.getFullNameStudent(argv[3]);
            break;
         case 'get_age':
            Controller.getAgeStudent(argv[3]);
            break;
         case 'get_female':
            Controller.findFemale();
            break;
         default:
            Controller.list();
            break;
      }
   }
}

Start.run();
