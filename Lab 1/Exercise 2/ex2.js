// Write a function compareNumToTen that takes a number as an argument and returns a Promise that tests and rejects if the value is less than or resolves if greater than the value 10.

const compareNumToTen = num => {
    return new Promise((resolve, reject) => {
        // big calculation...
        if (num > 10) resolve();
        else reject();
    });
};

compareNumToTen(90)
    .then(() => {
        console.log("Greater than 10!");
    })
    .catch(() => {
        console.log("Less than 10!");
    });


