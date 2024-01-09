alert("Hello World");

console.log("Code is running")

var a = prompt("Enter your number")
console.log("Your number is "+a)

var a = 5;
var c = 10;
var b = "Sanket";

console.log(a+c);
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
if(age>18){
    console.log("You can drive");
}
else{
    console.log("You cannot drive");
}

// loops
for(let i=0;i<10;i++){
    console.log(i);
}
let obj = {
    "name": "Sanket",
    "age": 20,
    "college": "PCCOE",
}
for(let key in obj){
    console.log(key);
    console.log(obj[key]);
}
for(const c of "Sanket"){
    console.log(c);
}

// Functions
function greet(name){
    console.log("Hello "+name);
}
greet("Sanket");