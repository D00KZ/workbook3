"use strict";

//Ex. Covert F to C
function convertFtoC(currentFTemp) {
    var celsiusTemp = ((currentFTemp - 32) * 5) / 9;
    return celsiusTemp;
}

var currentTemp = 92;
var x = convertFtoC(currentTemp);

console.log(
    "The fahrenhiet temperature of "
    + currentTemp
    + " is "
    + x
);


//Ex. 1.
function sub(numberOne, numberTwo) {
    var functionSubResult = numberOne - numberTwo
    return functionSubResult;
}

var Number50 = 50;
var Number100 = 100;
var results = sub(Number50, Number100)

console.log(Number50 + " - " + Number100 + " = " + results);


//Ex. 2 (Using the function from Ex. 1)
var results2 = sub(5, 2);
console.log(results2);