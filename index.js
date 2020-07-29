const assert = require("assert")
// const readline = require("linebyline");
// const { isDate } = require("util");
// const { type } = require("os");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

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
    this.transaction = []
  }
//should loops over all transactions and return the balance /sum of everything including negatives. 

  balance() {
    function sumTotal(total, num) {
      return total + num
    }
    this.balance = this.transaction.reduce(sumTotal)
  }

  deposit(amt, payee) {
    if (amt > 0) {
      this.transaction.push(new Transaction(amt, payee))
      this.balance = amt
    } else {
      return "Input a positive integer, please."
    }
  }

  charge(payee, amt) {
    // balance = amt
    if (this.balance - amt > 0) {
      this.transaction.push(new Transaction(amt, payee))
    } else if (this.balance - amt < 0) {
      console.log("Ya broke, dude...")
    }
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

if (typeof describe === "function") {
  describe("BankAccount", function () {
    it("should create Bank account: account number, name, transaction", function () {
      const bankAccount1 = new BankAccount("900-300-200", "Bob Dylan")
      assert.equal(bankAccount1.accountNumber, "900-300-200")
      assert.equal(bankAccount1.owner, "Bob Dylan")
      assert.equal(bankAccount1.transaction.length, 0)
    })
    it("should deposit correctly", function () {
      const arielsBank = new BankAccount("900-300-200", "Ariel")
      arielsBank.deposit(1, "Flounder")
      assert.equal(arielsBank.transaction[0].amount, 1)
      assert.equal(arielsBank.transaction[0].payee, "Flounder")
      arielsBank.deposit(10, "Sebastian")
      assert.equal(arielsBank.transaction[1].amount, 10)
      assert.equal(arielsBank.transaction[1].payee, "Sebastian")
    })
  })

  describe("Transaction", function () {
    it("Should have date, payee, amount", function () {
      const transaction1 = new Transaction(50, "Barb Dylan")
      assert.equal(transaction1.amount, 50)
      assert.equal(transaction1.payee, "Barb Dylan")
      assert.notEqual(transaction1.date, undefined)
      assert.notEqual(transaction1.date, null)
    })
  })
}

// Tests for your Bank Account App:
// 4. Should deduct/charge correctly
// 5. Should return correct balance
// 6. Should prevent overdraft
// 7. Should not allow negative deposit
// 8. Should track multiple deposits and return accurate balance
// 9. Also, 8. should track multiple charges and return accurate balance
