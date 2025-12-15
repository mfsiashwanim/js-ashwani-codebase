const mysym = Symbol("key1")
console.log(mysym)

const JSUser = {
    name : "Hitesh",
    full_name : "hitesh choudhary",
    [mysym] : "mykey1", // bracket is added to return value as key:value of the object not for symbol type variable declared above
    age : 18,
    location : "Bhubaneswar",
}

console.log(JSUser['name'])
console.log(JSUser.full_name)
console.log(JSUser.mysym)
console.log(JSUser['age'])
Object.freeze(JSUser)
JSUser.email = "hitesh@chatgpt.com"
console.log(JSUser)

