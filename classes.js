'use strict'

// function User(name, role = 'User') {
//   this.name = name;
//   this.role = role;
//   this.friends = [];
// }

// User.prototype.getInfo = function() {
//   const { role, name, friends } = this;

//   return `${role} ${name} has ${friends.length} friends.`
// };

// const bob = new User('Bob');

// console.log(
//   bob.getInfo()
// );


// class Human {
//   friends = [];

//   constructor(name, role = 'User') {
//     this.name = name;
//     this.role = role;
//     // this.friends = [];
//   }

//   getInfo() {
//     const {role, name, friends } = this;

//     return `${role} ${name} has ${friends.length} friends.`
//   }
// };

// const bob = new Human('Bob');

// console.log(
//   bob.getInfo()
// );

class BankAccaount {
  constructor(name, money) {
    this.name = name;
    this.money = money;
    this.history = [`Initial: ${money}`]
  }

  getInfo() {
    return `Name: ${this.name}, Amount: ${this.money}`
  }

  addMoney(amount, info) {
    this.money += amount;

    this.history.push(`${info}: ${amount}`);
  }

  withdrawMoney(amount, info) {
    this.money -= amount;

    this.history.push(`${info}: ${amount}`);
  }

  getAccountHistory() {
    return this.history;
  }
}

const bob = new BankAccaount('Bob', 400);

bob.addMoney(100, "sale");
console.log(bob.getInfo());
console.log(bob.getAccountHistory());
bob.withdrawMoney(250, "buy new phone");
console.log(bob.getAccountHistory());
