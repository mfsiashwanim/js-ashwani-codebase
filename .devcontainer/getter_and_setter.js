class credentials{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get password(){
        return `${this._password.toUpperCase()}hitesh`
    }

    set password(val){
        this._password = val
    }
}

const a = new credentials("abc@gmail.com","abc")
console.log(a.password)
console.log(a)
console.log(a.email)