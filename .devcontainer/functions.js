function A(){
    console.log("hello world")
    B()
}

function B(){
    console.log("hello world 2")
    C()
}

function C(){
    console.log("hello world 3")
}

A()
B()
C()
