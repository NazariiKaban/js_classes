"use strict";

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

// class BankAccaount {
//   constructor(name, money) {
//     this.name = name;
//     this.money = money;
//     this.history = [`Initial: ${money}`]
//   }

//   getInfo() {
//     return `Name: ${this.name}, Amount: ${this.money}`
//   }

//   addMoney(amount, info) {
//     this.money += amount;

//     this.history.push(`${info}: ${amount}`);
//   }

//   withdrawMoney(amount, info) {
//     this.money -= amount;

//     this.history.push(`${info}: ${amount}`);
//   }

//   getAccountHistory() {
//     return this.history;
//   }
// }

// const bob = new BankAccaount('Bob', 400);

// bob.addMoney(100, "sale");
// console.log(bob.getInfo());
// console.log(bob.getAccountHistory());
// bob.withdrawMoney(250, "buy new phone");
// console.log(bob.getAccountHistory());

// class Calendar {

//   constructor() {
//     this.bookHistory = [];
//   }

//   book(start, end) {
//     if (start < end) {
//       if (this.bookHistory.length === 0) {
//         this.bookHistory.push([start,end]);
//         return true;
//       }

//       for (const booked of this.bookHistory) {
//         if (start >= booked[0] && start < booked[1]) {
//           return false;
//         }
//         else if (start <= booked[0] && end > booked[1]) {
//           return false;
//         }
//       }
//           this.bookHistory.push([start,end]);

//           return true;
//     }
//   }
// }

// newDate.book(5, 10);
// console.log(newDate.bookHistory);
// console.log(newDate.book(9,12));

// const obj = {
//   name: "Cleaner-900",
//   score: 16,
// };

// class BoardOfFame {
//   constructor(numberOfRobots = 3) {
//     this.numberOfRobots = numberOfRobots;
//     this.robots = [];
//   }

//   addRecord(robot) {
//     const existingRobot = this.robots.find((rob) => rob.name === robot.name);

//     if (existingRobot && robot.score > existingRobot.score) {
//       existingRobot.score = robot.score;
//     } else if (existingRobot && robot.score < existingRobot.score) {
//       return false;
//     } else {
//       this.robots.push(robot);
//     }

//     this.robots.sort((a, b) => b.score - a.score);

//     if (this.robots.length > this.numberOfRobots) {
//       this.robots = this.robots.slice(0, this.numberOfRobots);
//       console.log("too much robots");
//     }
//   }

//   list() {
//     return this.robots;
//   }
// }

// const board = new BoardOfFame();
// board.addRecord({ name: "Cleaner-900", score: 6 });
// board.addRecord({ name: "Cleaner-900", score: 8 });
// board.addRecord({ name: "Cleaner-900", score: 4 });
// board.addRecord({ name: "Cleaner-901", score: 4 });
// board.addRecord({ name: "Cleaner-902", score: 4 });
// console.log(board.list());


// ===========================================
class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  introduce() {
    return `Hi, my name is ${this.name} and I'm ${this.age} y.o.`;
  }

  get letterGrade() {
    if (this.grade < 60) return "F";
    if (this.grade < 70) return "D";
    if (this.grade < 80) return "C";
    if (this.grade < 90) return "B";
    return "A";
  } 

  get passed() {
    if (this.grade > 60 && this.grade <= 100) {
      return true;
    } else {
      return false;
    }
  }

  set upgradeGrade(val) {
    if (val > 0 && val <= 100) {
      this.grade = val;
    } else {
      return console.log('Invalid Grade') ;
    }
  }
}

const student1 = new Student("John", 18, 92);
const student2 = new Student("Emma", 17, 74);
const student3 = new Student("Mike", 19, 58);

console.log(student1.introduce());
console.log(student2.introduce());
console.log(student3.introduce());

console.log(student1.letterGrade);
console.log(student2.letterGrade);
console.log(student3.letterGrade);

console.log(student1.passed);
console.log(student3.passed);

// What you'll practice

// By completing this exercise, you'll use:

// ✅ Creating classes
// ✅ Constructors
// ✅ Creating objects with new
// ✅ Instance methods
// ✅ Getters
// ✅ Setters
// ✅ Using this
// ✅ Basic if/else logic

// ===========================================