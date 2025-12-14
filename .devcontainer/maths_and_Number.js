const value = new Number(100)
console.log(value)
const val = value.toString().length
console.log(val)
const otherName1 = new Number(1324.786)

const otherName  = 23.89989
console.log(otherName.toPrecision(3))
console.log(otherName1.toPrecision(5))

console.log(Math.abs(-4))
console.log(Math.round(4.4))

console.log(Math.min(1,4,3,6,5))
console.log(Math.max(3,1,5,4,7,6))

const max=30
const min =10
console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.random()*10+1) 
/*// in case value if in 0.1 after applying * 10 so adding value +1 to increase min val
console.log(Math.floor(Math.random()*(max-min) + 1) + min)
*/
