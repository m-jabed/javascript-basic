"use strict";

///////////////////////////////////////
// Activating Strict Mode
let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log("I can drive :D");

// const interface = audio;
// const private = 534;

///////////////////////////////////////
// Functions
function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();
/*
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/
const num = Number("23");
console.log(num);

///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

///////////////////////////////////////
// Arrow functions

/*
const age2 = calcAge2(1991);

console.log(age1, age2);

const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1980);
console.log(age3);

const yearsUntilRetirement = (firstName, birthYear) => {
  const age = 2037 - birthYear;
  const retirementYear = 65 - age;
  // return retirementYear;
  return `${firstName} retires in ${retirementYear}`;
};

console.log(yearsUntilRetirement("Jonas", 1991));
console.log(yearsUntilRetirement("Bob", 1980));
*/

///////////////////////////////////////
// Functions Calling Other Functions
function cutFruitPeices(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPeices(apples);
  const orangePieces = cutFruitPeices(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} peices of orange`;
  return juice;
}

console.log(fruitProcessor(2, 3));

///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYear) {
  const age = 2037 - birthYear;
  return age;
};

const yearsUntilRetirement = function (firstName, birthYear) {
  const age = calcAge(birthYear);
  const retirementYear = 65 - age;

  if (retirementYear > 0) {
    console.log(`${firstName} retires in ${retirementYear} years`);
    return retirementYear;
  } else {
    console.log(`${firstName} has already retired 💐`);
    return -1;
  }
};

console.log(yearsUntilRetirement("Jonas", 1991));
console.log(yearsUntilRetirement("Mike", 1950));

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.
TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
GOOD LUCK 😀
*/
const calcAverage = (score1, score2, score3) => {
  const average = (score1 + score2 + score3) / 3;
  return average;
};

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Dolphins win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
}

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);

checkWinner(avgDolphins, avgKoalas);

avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);

checkWinner(avgDolphins, avgKoalas);

///////////////////////////////////////
// Introduction to Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ['Bob', 'Alice'];

const personName = "Jonas";
const jonasArray = [personName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonasArray);
console.log(jonasArray.length);

// Exercise
const calcAges = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const myAge1 = calcAges(years[0]);
const myAge2 = calcAges(years[1]);
const myAge3 = calcAges(years[years.length - 1]);
console.log(myAge1, myAge2, myAge3);

const ages = [
  calcAges(years[0]),
  calcAges(years[1]),
  calcAges(years[years.length - 1]),
];

console.log(ages);

///////////////////////////////////////
// Basic Array Operations (Methods)
const myFriends = ["Michael", "Steve", "Peter"];

// Add elements
const newLength = myFriends.push("Jay");
console.log(myFriends);
console.log(newLength);

myFriends.unshift("John");
console.log(myFriends);

// Remove elements
myFriends.pop(); // Last
const popped = myFriends.pop();
console.log(popped);
console.log(myFriends);

myFriends.shift(); // First
console.log(myFriends);

console.log(myFriends.indexOf("Steve"));
console.log(myFriends.indexOf("Bob"));

myFriends.push(23);
console.log(myFriends.includes("Steven"));
console.log(myFriends.includes("Bob"));
console.log(myFriends.includes("23"));
console.log(myFriends.includes(23));

if (myFriends.includes("Steven")) {
  console.log("You have a friend called Steven");
}

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
TEST DATA: 125, 555 and 44
HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
GOOD LUCK 😀
*/
const calcTip = (bill) => {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
};

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);

///////////////////////////////////////
// Introduction to Objects
const myArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "Tecaher",
  friends: ["Michael", "Peter", "Steven"],
};

///////////////////////////////////////
// Dot vs. Bracket Notation
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

//console.log(jonas.'last' + nameKey);
const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job and friends"
  );
}

jonas.location = "Portugal";
console.log(jonas["location"]);
jonas["twitter"] = "@jonasschmedtmann";
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(
  `${jonas["firstName"]} has ${jonas["friends"].length} friends, and his best freind is called ${jonas.friends[0]}`
);

///////////////////////////////////////
// Object Methods

const mosh = {
  firstName: "Mosh",
  lastName: "Hamedani",
  birthYear: 1990,
  job: "programmer",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: true,

  // calcAge: function(birthYear) {
  //   return 2037 - this.birthYear;
  // }

  // calcAge: function() {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    } and he has ${this.hasDriverLicense ? "a" : "no"} driver's license`;
  },
};

console.log(mosh.calcAge());

console.log(mosh.age);
console.log(mosh.age);
console.log(mosh.age);

// Challenge
// "Mosh is a 46-year old teacher, and he has a driver's license"
console.log(mosh.getSummary());

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
GOOD LUCK 😀
*/

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

console.log(mark.calcBMI());
console.log(john.calcBMI());

console.log(mark.bmi, john.bmi);

if (john.bmi > mark.bmi) {
  console.log(
    `${john.firstName} ${
      john.lastName
    }'s BMI (${john.calcBMI()}) is higher than ${mark.firstName} ${
      mark.lastName
    }'s BMI (${mark.calcBMI()})`
  );
} else if (mark.bmi > john.bmi) {
  console.log(
    `${mark.firstName} ${
      mark.lastName
    }'s BMI (${mark.calcBMI()}) is higher than ${john.firstName} ${
      john.lastName
    }'s BMI (${john.calcBMI()})`
  );
} else {
  console.log("Nothing to print");
}

///////////////////////////////////////
// Iteration: The for Loop
console.log("Lifting weights repetition 1 🏋️‍♀️");
console.log("Lifting weights repetition 2 🏋️‍♀️");
console.log("Lifting weights repetition 3 🏋️‍♀️");
console.log("Lifting weights repetition 4 🏋️‍♀️");
console.log("Lifting weights repetition 5 🏋️‍♀️");
console.log("Lifting weights repetition 6 🏋️‍♀️");
console.log("Lifting weights repetition 7 🏋️‍♀️");
console.log("Lifting weights repetition 8 🏋️‍♀️");
console.log("Lifting weights repetition 9 🏋️‍♀️");
console.log("Lifting weights repetition 10 🏋️‍♀️");

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}

///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
const stephen = [
  "Stephen",
  "Grider",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

// console.log(jonas[0]);
// console.log(jonas[1]);
// ...
// console.log(jonas[4]);
// jonas[5] does NOT exists

for (let i = 0; i < stephen.length; i++) {
  // Reading from stephen array
  console.log(stephen[i], typeof stephen[i]);
  types[i] = typeof stephen[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const era = [1991, 2007, 1969, 2020];
const youth = [];

for (let i = 0; i < era.length; i++) {
  youth.push(2037 - era[i]);
}

console.log(youth);

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < stephen.length; i++) {
  if (typeof stephen[i] !== "string") {
    continue;
  }
  console.log(stephen[i], typeof stephen[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < stephen.length; i++) {
  if (typeof stephen[i] === "number") {
    break;
  }
  console.log(stephen[i], typeof stephen[i]);
}

///////////////////////////////////////
// Looping Backwards and Loops in Loops
const jalal = [
  "Jalal",
  "Uddin",
  "2037 - 1991",
  "teacher",
  ["Sadman", "Sakib", "Sajib"],
  true,
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jalal.length - 1; i >= 0; i--) {
  console.log(i, jalal[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------------Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♂️`);
  }
}

///////////////////////////////////////
// The while Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♂️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`Loop is about to end...`);
  }
}
