// let name = "Christopher MickeyMouse Johnson";
// let positionOfSpace = name.indexOf(" ");
// let positionOfSpaceEnd = name.indexOf

// let firstName = name.substring(0, positionOfSpace);

// console.log(firstName);
// console.log(lastName);


let name = "Christopher MickeyMouse Johnson";
let positionOfFirstSpace = name.indexOf(" ");
let positionOfLastSpace = name.lastIndexOf(" ");

let firstName = name.substring(0, positionOfFirstSpace);
let middleName = name.substring(positionOfFirstSpace + 1, positionOfLastSpace);
let lastName = name.substring(positionOfLastSpace + 1);


console.log(firstName);
console.log(middleName);
console.log(lastName);
console.log(); //<-- ignore this thx :)

let message = "Your first name is " + firstName + " and your middle name is " + middleName + " and your last name is " + lastName
console.log(message);
