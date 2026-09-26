// //task - 13.1 

// class User{
//     constructor(userName,mobileNum,age){
//         this.userName=userName;
//         this.mobileNum=mobileNum;
//         this.age=age;
//     }

//     getUserDetails(){
//         return`UserName:${this.userName}
//         mobileNum:${this.mobileNum}
//         age:${this.age}`;
//     }

//     isAdult(){
//         if (this.age>=18){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
// }
// const user1 = new User("Alice", "9876543210", 22);
// const user2 = new User("Bob", "9123456780", 17);
// const user3 = new User("Charlie", "9988776655", 25);

// const users = [user1, user2, user3];

// for (let user of users) {
//     console.log(user.getUserDetails());
//     console.log("Adult:", user.isAdult());
// }


//task - 13.2 

// const jsonData = `[
//     {"userName":"harish","mobileNum":"2345609876","age":24},
//     {"userName":"Alice","mobileNum":"9876543210","age":25},
//     {"userName":"Bob","mobileNum":"9123456780","age":30}
// ]`;

// const users = JSON.parse(jsonData);

// for (let user of users) {
//     console.log(`${user.userName} - ${user.mobileNum} - ${user.age}`);
// }

// const jsonOutput = JSON.stringify(users);

// console.log(jsonOutput);