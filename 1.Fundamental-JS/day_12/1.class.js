// Class
// 1. simplenya, class itu cetakan buat bikin object.
// 2. bahasa kerennya itu blueprint
// 3. Bisa punya method
// 4. Semua di javascript itu object dan punya method
//    contoh string.length
class Student {
  constructor(name, age, address, hobby) {
    this.nameProp = name;
    this.ageProp = age;
    this.addressProp = address;
    this.hobbyProp = hobby;
    this.fullData = name + age + address + hobby
  }

  bebas() {
    console.log("nama adalah " + this.nameProp);
  }

  checkName(nameToCheck) {
    return this.nameProp === nameToCheck;
  }
}
const stud = new Student("kanzun", 10, "banyumas", "reading");
console.log(stud.fullData)

// Function vs Method
// function berdiri sendiri
function a () {
  console.log('a')
}
a()

// method itu punya nya object
stud.checkName('fikri')
const abc = 'abc'
abc.replace()
