class User {
  //propertise,methos, constructors
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }
  display(): void {
    console.log(`username : ${this.userName}, age: ${this.age}`);
  }
}

class Student extends User {
  studentId: number;
  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }

  display(): void {
    console.log(`username : ${this.userName}, age: ${this.age}, studentId : ${this.studentId}`);
  }
}

let student1 = new Student("hello", 1, 116667);
student1.display();
//class objects
let user1 = new User("Asif", 26);
user1.display();
