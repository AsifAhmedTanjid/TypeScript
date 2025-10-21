abstract class User {
    //propertise,methos, constructors
    userName : string;
     age: number

     constructor(userName:string,age:number){
        this.userName =userName;
        this.age =age;
     }
     abstract display():void;
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
