const s ="abcdefgh"
s.substring(1,4)

let arr = new Array(1,2,3,4,5)
console.log(arr.slice(1,4))

let str = "JavaScript";
console.log(str.slice(-6));

const str2 = str.split("").reverse().join("")
console.log(str2)

let arr3 = [1,2,3]
console.log(arr3[arr3.length-1])


let arr4 = [...arr3]
console.log(arr4)

function abc(){
    return `Hello`
}

const b = function(){
    return `Hello`
}

const b1 = () => {
    return `Hello`
}

console.log(abc())
console.log(b())
console.log(b1())




function fetchUser(id, callback) {
    if (!id) {
        callback(new Error('Invalid ID'));

    }
    else{
    setTimeout(() => {
        callback(null, { id, name: 'Alice' });
    }, 1000);
}
}
 
fetchUser(null, (err, user) => {
    if (err) console.error(err.message);
    else console.log(user);
});





s4 = "abdefg"
console.log(Array.from(s4))


function greet(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}
 
function sayGoodBye() {
    console.log(`Good Bye`);
}
 
greet('sachin', sayGoodBye)

function outer(){

    let a = 20
    console.log(a)

    function inner(){
        let b = 30
        console.log(a+b)
    }
    inner()
}
outer()

console.log(undefined===0)
console.log(undefined>0)

console.log("a" + 4)

