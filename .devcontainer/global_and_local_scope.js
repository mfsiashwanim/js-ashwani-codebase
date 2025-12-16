var c= 300
let a = 200
let arr = [1,2,3,4,5,6]
 if(true){
    let a = 10
     a = 10    // even if a is not declared by var and is undeclared type,will modify the globally declared value
    const b = 20
    c = 30
    console.log("INNER SCOPE:",a)
 }

 for(let i=0;i<arr.length;i++){
    const val = arr[i]
    console.log(val)
 }
 //console.log(val) // outsied of scope will not be accessible
 console.log(a)  // a with inside of scope val will not be accessible
 //console.log(b)
 console.log(c)
 function one(){
    const username = "hitesh"
    function two(){
        const vartwo = "vartwo"
        console.log(vartwo)
    }
 //   console.log(vartwo)  // out of one function scope 
    two()                  // within one function scope
    console.log(username) // within one function scope
    
}
one()