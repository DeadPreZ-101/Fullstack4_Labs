//Exercise 4:
//
//● Use the Promise.all syntax to resolve all three promises below and return a new promise. Call
//the function and use the thenable .then() keyword to output the result.

let promise1 = 101;
let promise2 = "follow the white";
let promise3 = new Promise((resolve, reject) => {
    resolve("rabbit...neo");
});

Promise.all([promise1, promise2, promise3])
    .then(result => console.log(result))
    .catch(error => console.log(error));
