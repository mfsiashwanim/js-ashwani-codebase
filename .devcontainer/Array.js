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

const myarr2 = newArray.join()
console.log(myarr2)

console.log(typeof myarr2)

myarray.unshift(9)
console.log(myarray)
myarray.shift()
console.log(myarray)

console.log(newArray.includes(5))
console.log(newArray)

const myarray3 = new Array('hitesh','ashwani','mukesh','rohit')
const myarray4 = new Array('rak','rup','puyesh','rktm')
console.log(myarray3.concat(myarray4))

console.log("A : ",arr)
const myarray5 = arr.slice(1,3)
console.log(myarray5)

console.log("B : ",arr)
const myarray6 = arr.splice(1,3)
console.log(myarray6)

let arr2 = [10,20,30,1,2,3]

let ar2 = arr2.filter((a) => { 
    return a>10 })


console.log(ar2)

let a = 10

if(true){
     let a=20
    const b=30
    var c=40
}

console.log(a)
//console.log(b)
console.log(c)

console.log(arr2.slice(2,3))

console.log(typeof 5)

console.log(ar2.slice(1,1))

console.log(newArray.isArray())

console.log(myarray3[0].isString())

console.log()