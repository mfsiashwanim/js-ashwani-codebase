const promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Ashwani",emailID : "ashwani.mishra938@gmail.com"})
        reject("ERROR in data loading")
    },2000)
}).then((user) => {
    console.log(user)
    console.log(user.username)
}).catch((error) => {
    console.log(error)
})