class BankAccount {
    constructor(balance) {
        this.balance = balance
    }

    deposit(value) {
        this.balance += value
    }

    withdraw(value) {
        if (value > this.balance) {
            return 'withdrawal value exceeds the balance value'
        }
        this.balance -= value
        return `amount withdrawn: ${value}`
        
    }

}

let myAccount = new BankAccount(10)

console.log(myAccount.balance)
myAccount.deposit(1000)
console.log(myAccount.balance)
console.log(myAccount.withdraw(1009))
myAccount.withdraw(999)
console.log(myAccount.balance)