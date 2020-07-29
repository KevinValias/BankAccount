"use strict"

const assert = require("assert")

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
    balance = transactions.reduce(sumTotal)
  }

  deposit(amt) {
    if (amt > 0) {
      this.transactions.push(new Transaction(amt, null))
      balance = amt
    } else {
      return "Input a positive integer, please. Do not make me ask again..."
    }
  }

  charge(payee, amt) {
    // balance = amt
    if (balance - amt > 0) {
      this.transactions.push(new Transaction(amt, payee))
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

if (typeof describe === "function") {
  describe("BankAccount", function () {
    // 1. Should create Bank account: account number, name, transactions
    it("should create Bank account: account number, name, transactions", function () {
      const bankAccount1 = new BankAccount("900-300-200", "Bob Dylan")
      assert.equal(bankAccount1.accountNumber, "900-300-200")
      assert.equal(bankAccount1.owner, "Bob Dylan")
      assert.equal(bankAccount1.transactions.length, 0)
    })
  })

  describe("Transaction", function () {
    it("Should create Transaction: is date defined, payee, amount", function () {
    const Transaction1 = new Transaction("50", "Bob Dylan")
    assert.equal(Transaction1.amount, "50")
    assert.equal(Transaction1.payee, "Bob Dylan")
  })
  })
}


// Tests for your Bank Account App:


// 3. Should deposit correctly
// 4. Should deduct/charge correctly
// 5. Should return correct balance
// 6. Should prevent overdraft
// 7. Should not allow negative deposit
// 8. Should track multiple deposits and return accurate balance
// 9. Also, 8. should track multiple charges and return accurate balance
