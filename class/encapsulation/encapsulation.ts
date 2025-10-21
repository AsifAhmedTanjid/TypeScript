//access modifiers: public , protected,private, readonly

class User1 {
  //propertise,methos, constructors
  readonly userName: string;
  public age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }
  display(): void {
  console.log(
      `username : ${this.userName}, age: ${this.age}`
    );
  }
}

class Student1 extends User1 {
  private studentId: number;
  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }

  display(): void {
    console.log(
      `username : ${this.userName}, age: ${this.age}, studentId : ${this.studentId}`
    );
  }
  setStudentId(studentId:number):void{
    this.studentId=studentId;
  }
  getStudentId():number{
    return this.studentId;
  }
}

let student2 = new Student1("hello", 1, 116667);
//class objects
let user2=new User1 ("sanj",5)
console.log(user2.userName);

user2.display()
student2.setStudentId(2)
student2.display();
console.log(student2.getStudentId());




