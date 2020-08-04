// Import Modules-
const assert = require("assert")

// Import Classes
const { BankAccount, Transaction } = require("../index.js")

// Declare and Define variables
const bankAccount1 = new BankAccount(888, "Roger Rabbit")
const transaction1 = new Transaction(45, "Betty Boop")
bankAccount1.transactions.push(transaction1)
console.log(bankAccount1)
console.log(transaction1)
console.log(bankAccount1.transactions)
//TESTS

if (typeof describe === "function") {
  describe("BankAccount", function () {
    it("should create Bank account: account number, name, transaction", function () {
      const bankAccount1 = new BankAccount("xx2345", "Bob Dylan")
      assert.equal(bankAccount1.owner, "Bob Dylan")
      assert.equal(bankAccount1.accountNumber, "xx2345")
      assert.equal(bankAccount1.transactions.length, 0)
      assert.equal(bankAccount1.balance(), 0)
    })
    it("Should return correct balance", function () {
      const bankAccount1 = new BankAccount("xx2345", "Bob Dylan")
      assert.equal(bankAccount1.balance(), 0)
      bankAccount1.deposit(100)
      assert.equal(bankAccount1.balance(), 100)
      bankAccount1.charge("Starbucks", 10)
      assert.equal(bankAccount1.balance(), 90)
    })
    it("Should not allow negative deposit", function () {
      const bankAccount1 = new BankAccount("xx2345", "Bob Dylan")
      assert.equal(bankAccount1.balance(), 0)
      bankAccount1.deposit(100)
      assert.equal(bankAccount1.balance(), 100)
      bankAccount1.deposit(-30)
      assert.equal(bankAccount1.balance(), 100)
    })
    it("Should prevent overdraft", function () {
      const bankAccount1 = new BankAccount("xx2345", "Bob Dylan")
      assert.equal(bankAccount1.balance(), 0)
      bankAccount1.charge("Wayfair", 45)
      assert.equal(bankAccount1.balance(), 0)
    })
    it("Should allow a refund", function () {
      const bankAccount1 = new BankAccount("xx2345", "Bob Dylan")
      assert.equal(bankAccount1.balance(), 0)
      bankAccount1.charge("Home Depot", -65)
      assert.equal(bankAccount1.balance(), 65)
    })
  })
  describe("Transaction", function () {
    it("Should create transactions with a date, payee, amount for a deposit", function () {
      const transaction1 = new Transaction(50, "Barb Dylan")
      assert.equal(transaction1.amount, 50)
      assert.equal(transaction1.payee, "Barb Dylan")
      assert.notEqual(transaction1.date, undefined)
      assert.notEqual(transaction1.date, null)
    })
    it("Should create transactions with a date, payee, amount for a charge", function () {
      const transaction1 = new Transaction(-41.65, "Target")
      assert.equal(transaction1.amount, -41.65)
      assert.equal(transaction1.payee, "Target")
      assert.notEqual(transaction1.date, undefined)
      assert.notEqual(transaction1.date, null)
    })
  })
  describe("Multiple Transactions", function () {
    const bankAccount3 = new BankAccount("xx4127", "Moana")
    it("should create new account correctly", function () {
      assert.equal(bankAccount3.owner, "Moana")
      assert.equal(bankAccount3.accountNumber, "xx4127")
      assert.equal(bankAccount3.balance(), 0)
    })
    it("should allow you to deposit multiple times and clearout account", function () {
      bankAccount3.deposit(30)
      bankAccount3.deposit(20)
      bankAccount3.deposit(-3)
      bankAccount3.deposit(34.25)
      bankAccount3.deposit(10000.45)
      assert.equal(10084.7, bankAccount3.balance())
      bankAccount3.charge("Clearout", 10084.7)
      assert.equal(0, bankAccount3.balance())
    })
    it("should balance account with multiple charges and count transactions", function () {
      bankAccount3.deposit(10000)
      bankAccount3.charge("target", 40)
      bankAccount3.charge("chipotle", 10.32)
      bankAccount3.charge("HEB", 40)
      bankAccount3.charge("Bob's", -20)
      assert.equal(9929.68, bankAccount3.balance())
      assert.equal(10, bankAccount3.transactions.length)
    })
    it("should not allow overdraft", function () {
      bankAccount3.charge("target", 40000)
      assert.equal(9929.68, bankAccount3.balance())
      assert.equal(10, bankAccount3.transactions.length)
    })
  })
  describe("Multiple Transactions", function () {
    it("should accrue interest correctly for deposit and create an account", function () {
      const savingsMan = new SavingsAccount("xxx1010", "Aqua Man", 0.1)
      assert.equal("xxx1010", savingsMan.accountNumber)
      assert.equal("Aqua Man", savingsMan.owner)
      assert.equal(0.1, savingsMan.interestRate)
      assert.equal(0, savingsMan.balance())
      savingsMan.deposit(100)
      savingsMan.accrueInterest()
      assert.equal(110, savingsMan.balance())
    })
    it("should accrue interest correctly for charge, account never reaches 0", function () {
      const savingsMan = new SavingsAccount("xxx1010", "Aqua Man", 0.1)
      savingsMan.deposit(100)
      savingsMan.charge("ATM", 30)
      savingsMan.accrueInterest()
      assert.equal(77, savingsMan.balance())
      assert.equal(true, savingsMan.balance() > 0)
    })
  })
}
