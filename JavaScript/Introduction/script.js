alert("Hello World");

console.log("Code is running")

var a = prompt("Enter your number")
console.log("Your number is " + a)

var a = 5;
var c = 10;
var b = "Sanket";

console.log(a + c);
console.log(typeof b);

/* var vs let */
/* let is block scoped and var is function scoped */

{
    // a is locally scoped to this block
    let a = 18;
    console.log(a);
}

let o = {
    "name": "Sanket",
    "age": 20,
    "college": "PCCOE",
}
// Here o is reference to the object
console.log(o);
o.salary = 100000;
console.log(o);

// Conditionals
let age = 20;
if (age > 18) {
    console.log("You can drive");
}
else {
    console.log("You cannot drive");
}

// loops
for (let i = 0; i < 10; i++) {
    console.log(i);
}
let obj = {
    "name": "Sanket",
    "age": 20,
    "college": "PCCOE",
}
for (let key in obj) {
    console.log(key);
    console.log(obj[key]);
}
for (const c of "Sanket") {
    console.log(c);
}

// Functions
function greet(name) {
    console.log("Hello " + name);
}
greet("Sanket");

// Strings
let a = "Sanket"
console.log(a.length);
console.log(a[0]);
console.log(a.indexOf("S"));

// Strings are immutable
let name1 = "Sanket";
let greeting = "Good Morning";
console.log(greeting + " " + name1);
console.log(greeting.concat(" ", name1));

let name2 = "Sanket";
console.log(name2.toUpperCase());
console.log(name2.toLowerCase());

console.log(name2.slice(1, 4));
console.log(name2.replace("San", "S"));

// Arrays
let arr = [1, 2, 6, 7, 9];
console.log(arr);
console.log(arr.length);
console.log(arr[2]);
arr.push(10);
arr.pop();
arr.shift();  // shifts the array to the left
arr.unshift();   // unshifts the array to the right
arr[0] = 69;
console.log(arr, typeof arr);
console.log(arr.toString());
console.log(arr.join("$"));
console.log(arr.concat([1, 2, 3]));
arr.splice(1, 2);   // removes 2 elements from index 1
arr.splice(1, 2, 69, 70);   // removes 2 elements from index 1 and adds 69 and 70
arr.slice(1, 3);   // returns a new array from index 1 to 3
arr.sort();   // sorts the array
arr.reverse();   // reverses the array

let a = [1, 93, 5, 77, 30]
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}
for (let i of a) {
    console.log(i);
}
a.forEach(function (element) {
    console.log(element);
}
)

// map, filter, reduce
let arr = [1, 2, 3, 4, 5];
let newArr = arr.map((element) => {
    return element * 2;
})
arr.filter((element) => {
    return element > 2;
})
arr.reduce((accumulator, element) => {
    return accumulator += element;
})
