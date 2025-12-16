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