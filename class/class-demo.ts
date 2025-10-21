class User {
    //propertise,methos, constructors
    userName : string;
     age: number

     constructor(userName:string,age:number){
        this.userName =userName;
        this.age =age;
     }
     display():void{
        console.log(`username : ${this.userName}, age: ${this.age}`);
        
     }
}

//class objects
let user1=new User('Asif',26)
user1.display()