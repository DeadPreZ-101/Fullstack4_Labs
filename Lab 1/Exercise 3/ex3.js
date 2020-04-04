//Exercise 3:
//● Write two functions that use Promises that you can chain! The first function, makeUpperCase(),
//will take in an array of words and capitalize them, and then the second function, sortWords(), will
//sort the words in alphabetical order. If the array contains anything but strings, it should throw an
//error.

const arrayOfNames = ["jaxx", "tiny", "clay"];
const mixedArray = ["anarchy", 99, true];

let makeUpperCase = names => {
    return new Promise((resolve, reject) => {
        resolve(names.map(x => x.toUpperCase()));
    });
};
let sortWord = data => {
    return new Promise((resolve, reject) => {
        resolve(data.sort());
    });
};

makeUpperCase(arrayOfNames)
    .then(sortWord)
    .then(result => console.log(result))
    .catch(error => console.log("Not all items are strings"));

makeUpperCase(mixedArray)
    .then(sortWord)
    .then(result => console.log(result))
    .catch(error => console.log("Not all items are strings"));
