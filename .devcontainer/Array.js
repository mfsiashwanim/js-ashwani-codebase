const myarray = [1,2,3,4,5]
console.log(myarray)

const myarray1 = ["hitesh","anand","mukesh"]
console.log(myarray1)

const myarray2 = new Array(3,6,7,8)
console.log(myarray2)

myarray2.push(6)
myarray2.push(7)
myarray2.push(8)

console.log(myarray2)

myarray2.pop()
myarray2.pop()

console.log(myarray2)

const s2 = new Set();
s2.add(myarray)

console.log(s2)


const arr = [1,2,2,3,4,4,5,6]
console.log(new Set(arr));

myarray.push(6)
console.log(myarray)

const newArray = new Array(1,2,3,4,5);
console.log(newArray)

//console.log(typeof myarr2)

myarray.unshift(9)
console.log(myarray)
myarray.shift()
console.log(myarray)

console.log(newArray.includes(5))

const myarr2 = newArray.join(myarray)
console.log(myarr2)
console.log(typeof myarr2)

const myarray3 = new Array('hitesh','ashwani','mukesh','rohit')
const myarray4 = new Array('rak','rup','puyesh','rktm')
console.log(myarray3.concat(myarray4))

console.log("A : ",arr)
const myarray5 = arr.slice(1,3)
console.log(myarray5)

console.log("B : ",arr)
const myarray6 = arr.splice(1,3)
console.log(myarray6)
console.log("C : ",arr)

let arr2 = [10,20,30,1,2,3]
let a2 = arr2.filter((a) =>{
    return a>10
})
console.log(a2)

let s3 = arr2.reduce((h1,h2) =>{
    return h1+h2
})
console.log(s3)

