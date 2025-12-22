
function twonumbers(number1,number2){
    return number1+number2
}

console.log(twonumbers(3,"3"))

function userlogin(userName = "Hitesh"){
    if(!userName){
        return "Please enter a valid userName"
    }
    return `${userName} logged in successfully`
}

console.log(userlogin("hitesh"))

function calculatecartprice(...num1){
    return num1
}


const userval = {
     userName : "hitesh",
     prices : 200
}
console.log(calculatecartprice(5,100,200))


let arr = [100,200,300]
function handleobject(user){
    console.log(`UserName is ${user.userName} and price is ${user.prices}`)
}

function arrprintsecondval(arr){
    return arr[1]
}

//arrval(arr)

handleobject(userval)

console.log(arrprintsecondval(arr))

console.log(arrprintsecondval([10,20,30,40]))

console.log(userlogin())

const user = {
    name : "hitesh",
    price  : 20000,

    welcomemessage : function(){
        console.log(`${this.name} , loggins to the portal`)
    }
}

const abc =  function(){
    console.log("hello world")
}
const chai = () => {
    console.log(`${this.name} , loggins into the portal`)
    }
user.welcomemessage()
user.name = "deepesh"
user.welcomemessage()

const val = () =>{
    const username = "hitesh"
    console.log(`${username} , loggins into the portal`)
}

console.log(chai())

const addtwo = (num1,num2) => num1+num2  // implicit return 

const addtwo1 = (num1,num2) => {   // explicit return 
    return num1 + num2
}


console.log(addtwo(3,5))
console.log(addtwo1(5,6))

console.log(val())

console.log(abc())

function A(){
    console.log("hello world")
    B()
}

function B(){
    console.log("hello world 2")
    C()
}

function C(){
    console.log("hello world 3")
}

A()
B()
C()
