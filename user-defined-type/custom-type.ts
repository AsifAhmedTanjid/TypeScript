type User ={name:string,id:number}
let usersL:User[];
usersL=[]
let user1011:User
user1011={
    name:"Asif",
    id:101,
}
let user1021: User
user1021={
    name:"Rafid",
    id:102,
}
usersL.push(user1011)
usersL.push(user1021)
for(const user of usersL){
    console.log(user);

}

type RequestT ="GET" |"POST";
let getRequest : RequestT;
getRequest="GET";

function requestHanlder(requestType:RequestT){
    console.log(requestType);
    
}
requestHanlder("GET")
