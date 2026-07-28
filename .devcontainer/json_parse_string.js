var jsonstring = '{"name" : "John", "age" : 30}'

var obj  = JSON.parse(jsonstring) // used to convert a json formatted string into a native javascript object

console.log(obj)

const Jsonstr = JSON.stringify(obj)
console.log(Jsonstr)

console.log(Jsonstr.name)

var invalidjsonstring = '{"name" : "val", "email" : "ashwani@gmil.com"}'
console.log(JSON.parse(invalidjsonstring))


