let userId: string | number | boolean;

userId = "101";
userId = 101;
userId = "hello";
userId.charAt(2);
// console.log(userId.charAt(0));

const displayUserId = (username: string | number |boolean) => {
  console.log(username);
};

displayUserId("asif");
displayUserId(101);
displayUserId(1010);
displayUserId(true);
