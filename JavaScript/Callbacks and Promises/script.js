console.log("Sanket is a Hacker")
console.log("He is finding interst in web development")

setTimeout(() => {
    console.log("I am inside the settimeout function")
}, 1000);
console.log("The End")

// Output:
// Sanket is a Hacker
// He is finding interst in web development
// The End
// I am inside the settimeout function
// The above output is because of the asynchronous nature of javascript, the settimeout function is executed after 
// the console.log("The End") statement because the settimeout function is executed after 1000ms and the console.log("The End") statement is executed before 1000ms.

// Callbacks - A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// Example:
const study = () => {
    console.log("Student is studying")
}
const student = (name, callback) => {
    console.log(`Student name is ${name}`)
    callback()
}
student("Sanket", study)
// Output:
// Student name is Sanket
// Student is studying
// In the above example, the study function is passed as an argument to the student function and the study function is called inside the student function.

// Callback hell - Callback hell is a phenomenon that afflicts a JavaScript developer when he tries to execute multiple asynchronous operations one after the other.
// Promises - A promise is an object that may produce a single value after some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred).
// Example:
const student1 = (name) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("Rejected")
    }
    else {
        return new Promise((resolve, reject) => {
            console.log(`Student name is ${name}`)
            resolve("Resolved")
        })
    }

}
student1("Sanket").then(() => {
    console.log("Student is studying")
}).catch((err) => {
    console.log(err)
})
// Output:
// Student name is Sanket
// Student is studying
// In the above example, the student1 function returns a promise and the then function is used to resolve the promise.
