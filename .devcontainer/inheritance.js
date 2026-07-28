/*
class A{
    constructor(car){
        this.car=car
    }
     
    selectedcar(){
        return `the ${this.car} is selected by me`
    }
}

class B extends A{
    constructor(car,model){
        super(car)
        this.model=model
    }
    present(){
        
        return `${this.selectedcar()} and the model is ${this.model} selected by me`
    }
}

const v1 = new B("Ford","mustang")
const v2 = new B("Mercedes","Benz")
console.log(v1.present())

class foodcategory{
    constructor(food){
        this.food=food
    }

    typeoffood(){
        return `the food catogory is ${this.food}`
    }
}

class foodproduct extends foodcategory{
    contructor(foodcategory,food){
        super(foodcategory)
        this.food=food    
    }

    food(){
        return `${this.typeoffood()} and the food is ${this.food}`
    }

}

const food = new foodproduct("continental","idli sambhar")
console.log(food.food())
*/
class A{
    constructor(car){
        this.car = car
    }
}

class B extends A{
    constructor(car,model){
        super(car)
        this.model = model
    }
    present(){
    console.log(`the car Name is ${this.car} and the model is ${this.model}`)
}
}

const a = new B("maruti","suzuki")
a.present()



class Bankaccount {
    constructor(deposit,withdrawal){
        this.deposit = deposit
        this.withdrawal = withdrawal
    }
    deposit(money){
        this.deposit = this.deposit + money
        console.log(`the deposited amount is : ${this.deposited}`)
    }

    withdraw(money){
        this.withdrawal = this.withdrawal - money
        console.log(`the withdrew amount is : ${this.money}`)
    }
}

const bankac = new Bankaccount(3500,1200)
bankac.deposit(200)
bankac.withdraw(300)