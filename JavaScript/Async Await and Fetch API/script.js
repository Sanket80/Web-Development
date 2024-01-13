// Async and Await

// async function getData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Data Received');
//         }, 2000);
//     });
// }

// async function main(){
//     console.log('Before getData');
//     let data = await getData();
//     console.log(data);
//     console.log('After getData');
// }

// main();
// Output:
// Before getData
// Data Received
// After getData

// Explanation:
// 1. The main function is an async function.
// 2. The getData function is also an async function.
// 3. The main function calls the getData function.
// 4. The getData function returns a promise.
// 5. **The main function awaits the promise returned by the getData function, and then only proceeds further.
// 6. If await is not used, it will not wait for getData to return the promise, and will proceed further.


// FETCH API

async function getData(){
    // Simulate getting data from server
    let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = (await x).json();
    console.log(data);
    return data;
}

async function main(){
    console.log('Before getData');
    let data = await getData();
    console.log(data);
    console.log('After getData');
}

main();