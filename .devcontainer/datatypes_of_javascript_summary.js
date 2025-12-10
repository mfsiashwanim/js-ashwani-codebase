//PRIMITVE DATATYPES

// 7 TYPES : STRINGS,NUMBER.BOOLEAN,SYMBOL,BIGINT(FOR LARGE RANGE OF VALUES),null,undefined

//REFERENCE TYPE : ARRAY,OBJECTS,FUNCTIONS,CONST

//REFERENCE (NON PRIMITIVE)

// ARRAY,OBJECTS,FUNCTIONS,

const score = 100

const scoreval = 100.3

const isLoggedin = false
const outsidetemp = null

const id = Symbol('@123')
const id1 = Symbol('2567')
console.log(score)
console.log(scoreval)
//console.log(typeof scoreval)
console.log(id)
console.log(id1)
console.log(id == id1)

const heros = ["shaktimaan","naagraj","doga"]
console.log(heros)

console.log(typeof heros)

console.log(typeof id)
//console.log(typeof )

let myobj = ( {
    name : 'Ashwani',
    age : 29
})

console.log(myobj)

let func = function(){
    console.log("hello world")
}

console.log(typeof func) // return type is called as object function
console.log(typeof myobj) // return type as object