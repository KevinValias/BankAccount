"use strict"

// const readline = require("linebyline");
// const { isDate } = require("util");
// const { type } = require("os");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

class BankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber
    this.owner = owner
    this.transaction = []
  }

  balance() {
    function sumTotal(total, num) {
      return total + num
    }
    balance = transaction.reduce(sumTotal)
  }

  deposit(amt) {
    if (amt > 0) {
      this.transaction.push(new Transaction(amt, null))
      balance = amt
    } else {
      return "Input a positive integer, please. Do not make me ask again..."
    }
  }

  charge(payee, amt) {
    // balance = amt
    if (balance - amt > 0) {
      this.transaction.push(new Transaction(amt, payee))
    } else if (balance - amt < 0) {
      console.log("Ya broke, dude...")
    }
  }
}

class Transaction {
  constructor(amount, payee) {
    this.amount = amount
    this.payee = payee
    this.date = new Date()
  }
}

// const getPrompt = () => {
//   printStacks()
//   rl.question("start stack: ", (startStack) => {
//     rl.question("end stack: ", (endStack) => {
//       towersOfHanoi(startStack, endStack)
//       getPrompt()
//     })
//   })
// }


