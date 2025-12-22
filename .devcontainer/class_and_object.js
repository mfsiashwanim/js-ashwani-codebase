function user(username, logginID , isloggedin){
    this.username = username
    this.logginID = logginID
    this.isloggedin = isloggedin
    return this
}
const a = new user("hitesh",12,true)
const b = new user("don",23,false)
const c = new user("hrithik" , 29,true)

console.log(b)
console.log(c)

class A{ 

constructor(username,userID,marks){
    this.username=username
    this.userID = userID
    this.marks = marks
}
}

const n = new A("hitesh",121,635)
console.log(n)
const n1 = new A("akash",165,686)
console.log(n1)
const n3 = new A("adarsh",195,986)
console.log(n3)

const arr1 = [1,2,3,4,5,6]
console.log(!arr1.includes(9))

class B{
    constructor(username,userID,ISloggedIn){
        this.username = username
        this.userID = userID
        this.ISloggedIn = ISloggedIn
    }
}
const n5 = new B("akash",12890,"True")
console.log(n5)
console.log(this)


