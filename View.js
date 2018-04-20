class View {
  constructor() {

  }

  static help(){
    console.log('======Documentation=====================================');
    console.log(`getFullName    -> "Input id name yang diinginkan"`);
    console.log(`getAge         -> "Input id name yang diinginkan untuk cek umur"`);
    console.log(`==========================================================`);

  }

  static show(data){
    console.log(data);
    // process.exit()
  }
}

module.exports = View;
