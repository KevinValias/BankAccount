"use strict"

const assert = require("assert")
const readline = require("linebyline");
const { isDate } = require("util");
const { type } = require("os");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

class BankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber
    this.owner = owner
    this.transactions = []
  }

  balance() {
    function sumTotal(total, num) {
    return total + num
      }
    return transactions.reduce(sumTotal)
  }

  deposit(amt) {
    this.transactions = amt;
    transactions.push(this)
  }

  charge(payee, amt){

  transactions.push(this)
  }
}

class Transactions {
  constructor(amount, payee) {
    this.amount = amount;
    this.payee= payee;
    this.date = new Date();
  }
  
}

const getPrompt = () => {
  printStacks()
  rl.question("start stack: ", (startStack) => {
    rl.question("end stack: ", (endStack) => {
      towersOfHanoi(startStack, endStack)
      getPrompt()
    })
  })
}

//Test
if (typeof describe === 'function'){
  describe('BankAccount', function(){
    it('should be a number', function(){
      const bankAccount1 = new BankAccount('900-300-200','Bob Dylan')
      assert.equal(bankAccount1.accountNumber, '900-300-200')
      assert.equal(bankAccount1.owner,'Bob Dylan')
      assert.equal(bankAccount1.transactions.length, 0)
    })
  })
}