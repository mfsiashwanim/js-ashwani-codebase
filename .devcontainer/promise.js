/*
const promise = new Promise(function(resolve,reject)
    {
        // define a async function
        setTimeout(function(){
            console.log("async function is defined")
            resolve()
        },1000)
    })
promise.then(function(){
            console.log("function is resolved")
        })
new Promise(function(resolve,reject){

    // defined an async function
    setTimeout(function(){
        console.log("second async function is defined")
    })
})
*/

const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name : "hitesh",emailID : "hitesh@gmail.com"})
    },1000)
})

promisethree.then(function(user){
    console.log(user)
})

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async function is executing")
        resolve({userName : "Hitesh" , useremail : "hitesh@gmail.com"})
    },2000)

})
promisefour.then(function(user){
    console.log(user)
})
/*
const promiseerror = new Promise(function(resolve,reject){
    setTimeout(function(){
       let error = false
       if(!error){
        resolve({name : "ashwani" , maidID : "ashwani@gmail.com" , phonenumber : "8825103847"})
       }
       else{
        reject('data cannot be retrieved')
       }
},2000)
}).then(function(user){
    console.log(user)
})

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName : "hitesh",email : "hitesh@gmail.com" , phonenumber : "9835598401"})
        reject('ERROR in data loading ')
    },3000)
})
promisefour.then((user) => {
    console.log(user)
    return user.userName
}).then((userName) => {
    console.log(userName)
}).catch(function(error){
    console.log(error)
})

*/
const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({userID : "Javascript",password : "abc123"})
        }
        else{
            reject(`there is issue in JS`)
        }
    },2000)
})
async function consumePromiseFive(){
    try{
    const promise = await promisefive
    console.log(promise)
    }
    catch(error){
        console.log(error)
    }
}

consumePromiseFive()

const promiesix = new Promise((resolve,reject) => {
    resolve({name : "Ashwani" , email : "ashwani.mishra938@gmail.com"})
    reject("ERROR in getting response")
})

async function promiesixfunction(){
    try{
        const promise = await promiesix
        console.log(promise)
    }
    catch(error){
        console.log(error)
    }
}

promiesixfunction()








