let user1:{
    userName:string,
    userId:number
}
user1={
    userName:"ASIF",
    userId:101
}
console.log(user1);

let user2:object;
user2={
    name:"111",
    id:1
}

let users:object[];
users=[]
let user101: {name:string,id:number}
user101={
    name:"asif",
    id:101,
}
let user102: {name:string,id:number}
user102={
    name:"Rafid",
    id:102,
}
users.push(user101)
users.push(user102)
for(const user of users){
    console.log(user);

}
