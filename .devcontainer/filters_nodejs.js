const books = [
    { title : "book 1", genre : "non-fuctional" , publish : 2024},
    {title : "boook 2" , genre : "functional" , publish : 2025},
    {title : "book 3" , genre : "non - function" , publish : 2028},
    {title : "book 4" , genre : "horror" , publish : 2029}
]
/*
const a = books.filter((bk) => {
    return bk.title == "book 1"
})

console.log(a)
*/
const b = books.filter((bk1) => { return bk1.publish === 2029
})

const c = books.filter((bk3) => {
    return bk3.publish === 2028
})
console.log(c)