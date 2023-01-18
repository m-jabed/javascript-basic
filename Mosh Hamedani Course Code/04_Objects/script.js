// Objects
// Objects are collections of key value pairs

// So, if we have properties that are highly related, we want to encapsulate them inside of an object

// As an  example, lets say we are building an application for drawing different kinds of shapes, like circles, rectangles and so on.

// So, we could declare multiple variables, around circles for example radius we set that to 1. let  x = 1, y = 1, we are defining multiple variables, but all these variables are highly related, they represents the circle. A better approach is to put these variables inside of an object.

// Now we can send that object anywhere in our programs, we can pass that to any functions, and all these variables would be avilable in that object.

// The value we have in an object can be any type in Javascript, It can be a number, a string,  a boolean, null, undefined, it can even be another object, or an array, or a function.

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("Draw");
  },
};

const circle2 = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("Draw");
  },
};

// Factory or Constructor functions

// Factory Functions is just like a factory producing products.
// These factory functions produce objects

// function createCircle() {
//   const circle = {
//     radius: 1,
//     location: {
//       x: 1,
//       y: 1,
//     },
//     isVisible: true,
//     draw: function () {
//       console.log("draw");
//     },
//   };
//   return circle;
// }

function createCircle(radius) {
  return {
    radius,
    location: {
      x: 1,
      y: 1,
    },
    isVisible: true,
    draw() {
      console.log("draw");
    },
  };
}
const circle1 = createCircle(10);
//console.log(circle1);
circle1.draw();
//circle.draw(); // Method

// Constructor Function (Another pattern for creating objects)
// The naming convention we use for construction functions is differnt. that is pascel notation

// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const myCircle = new Circle(20);
console.log(myCircle);
myCircle.draw();

// Dynamic nature of objects
// One thing we need to understand about objects in JavaScript is that they are dynamic which means once we create them we can always add new properties or methods, or remove existing ones.

const rectangle = {
  radius: 1,
};
console.log(rectangle);

rectangle.color = "Yellow";
console.log(rectangle);

rectangle.draw = function () {};
console.log(rectangle);

delete rectangle.color;
console.log(rectangle);

delete rectangle.draw;
console.log(rectangle);

// Constructor Property
// Every object in JavaScript has a property called constructor
// And that references the function that was used to construct or create that object.

// Every object in JavaScript has a constructor property, and that refernces the function taht was create taht object.

// When we create an object using object literal syntax, intermnally the Javascript engine uses this constructor function.

// Example

//let x = {}; // -> When use this syntax, object lliteral, Javascript will translate that to something like this
// let x = new Object();

// In Javascript we have a few built in constructor, for example, we have
new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1, 2, 3

// Every object has a constructor property and taht references a function that was used to create that object

// Finctions are objects
// Functions are Objects
// One of the confusing concepts in JavaScript is here functions are objects.

function Circle1(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle1(1);
another.draw();

console.log(Circle1.name);
console.log(Circle1.length);

const Circle2 = new Function(
  "radius",
  `this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };`
); // when we declare a functuion internally it's represent like this
const c = new Circle2(2);
console.log(c);

// Value vs. References Type
// In Javascript we have two categories of types.
// On one side we have value types, also called primitives
// On the other side we have Reference types

// In Value type category we have->
// 1. Number
// 2. String
// 3. Boolean
// 4. Symbol
// 5. undefined
// 6. null
// These are primitive or value types

// On the other sides we have
// 1. Object
// 2. Function (also an object)
// 3. Array (also an object)

// So, in a nutshell in JavaScript we have primitives and objects.
/*
let x = 10; // x = 10
let y = x; // y = 10
x = 20; // x = 20, y = 10
*/

let x = { value: 10 }; // x = 10
console.log(x);
let y = x; // y = 10
console.log(y);
x.value = 20; // x = 20, y = 10
console.log(x);
console.log(y);

// Primitives are copied by their value
// Objects are copied by their reference
/*
let number = 10;

function increase(number) {
  number++;
}

increase(number);
console.log(number);
*/

let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);

console.log(obj);
