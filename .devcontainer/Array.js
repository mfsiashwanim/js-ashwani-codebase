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

const myarray3 = new Array('hitesh','ashwani','mukesh','rohit')
const myarray4 = new Array('rak','rup','puyesh','rktm')
console.log(myarray3.concat(myarray4))
const arr = [1,2,2,3,4,4,5,6]
//console.log(myarray3)
console.log("A init array: ",arr)
const myarray5 = arr.slice(1,3)
console.log(myarray5)

console.log("B array change after slice: ",arr)
const myarray6 = arr.splice(1,3)
console.log(myarray6)
console.log("C array after splice:",arr)

const arr5  = [1,2,3,4,[2,3,4,5],4,5,[1,2,3,4,5,6]]
console.log(arr5)

console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
