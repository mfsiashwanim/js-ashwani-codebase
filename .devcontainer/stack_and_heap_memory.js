let userone = "hiteshchoudhary@gmaildotcom" //primitive stack memory llocation 
let usertwo =userone
console.log(usertwo)
console.log(userone)
usertwo = "shareyourcode"
console.log(userone)
console.log(usertwo)

const user1 = {
    email : "user@google.com",
    upiID : "ash@ybl.com"
}
/*
const user2 ={
    email : "user2@gmail.com",
    upiID : "user2@ybl.com"
}
*/
let user2=user1
console.log(user1)
console.log(user2)
user2.email = "user3@gmail.com"
console.log(user1)
console.log(user2)

