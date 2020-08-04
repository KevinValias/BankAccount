/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable spaced-comment */
const assert = require("assert")

class Transaction {
  constructor(amount, payee) {
    this.amount = amount
    this.payee = payee
    this.date = new Date()
  }
}
class BankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber
    this.owner = owner
    this.transactions = []
  }

  balance() {
    let total = 0
    for (let i = 0; i < this.transactions.length; i++) {
      total += this.transactions[i].amount
    }
    return total
  }

  deposit(amt) {
    if (amt > 0) {
      const depositTransaction = new Transaction(amt, "Deposit")
      this.transactions.push(depositTransaction)
    }
  }

  charge(payee, amt) {
    const currentBalace = this.balance()
    if (amt <= currentBalace) {
      const chargeTransaction = new Transaction(-amt, payee)
      this.transactions.push(chargeTransaction)
    }
  }
}
class SavingsAccount extends BankAccount {
  constructor(accountNumber, owner, interestRate) {
    super(accountNumber, owner)
    this.interestRate = interestRate
  }

  accrueInterest() {
    const currentBalance = this.balance()
    const interestAmt = currentBalance * this.interestRate
    const interestTransaction = new Transaction(interestAmt, "Interest")
    this.transactions.push(interestTransaction)
  }
}

module.exports = { BankAccount, Transaction }
