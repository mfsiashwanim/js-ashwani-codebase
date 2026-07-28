function outer(){
    let username = "hitesh"
    function inner(){
        let secret = "secret val"
        console.log("inner :",username)
    }
    function innerTwo(){
  //      console.log("secret val : ",secret) secret is not defined due to inner functions cannot access data within themselves
        console.log("innerTwo : ",username)
    }
    console.log("Outer scope : ",username)
    inner()
    innerTwo()
}
outer()

function add(num1,num2){
    const b =  num1+num2
    function print(){
        console.log(`the sum in inner scope is : `,b)
    }
    console.log(`the sum in outer scope : `,b)
    return print()
}
    

const fun = add(5,6)
console.log(fun)


