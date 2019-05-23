function Person(firstName, SecondName, dob){
    this.firstName = firstName;
    this.SecondName = SecondName;
    this.dob =dob;
    this.dateofbirth = function (){
        return this.dob.getFullYear();
    }
    this.getFullName
}
const person1 = new Person("EMMA", "NGWERO", 7-10-2019);
console.log(person1.dateofbirth());
