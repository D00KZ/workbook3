//Exercise from page 16
"use stirct";

//Exercise 1
function displayMailingLable(displayName, displayAddress, displayCity, displayState, displayZip) {
  console.log(displayName);
  console.log(displayAddress);
  console.log(displayCity + ", " + displayState + ", " + displayZip);
  console.log();
}

var nameUser = "Christopher";
var address = "1405 MickyMouse Road";
var city = "Brooklyn";
var state = "NY";
var zip = "11220";

displayMailingLable(nameUser, address, city, state, zip);

var nameUser1 = "Dingleberry";
var address1 = "2932 MickyMouse Clubhouse";
var city1 = "Queens";
var state1 = "New York";
var zip1 = "8912";

displayMailingLable(nameUser1, address1, city1, state1, zip1);

//Exercise 2
function numbersForSomething(num1, num2) {
  var results = num1 + num2;
  console.log(num1, "+", num2, "=", results);
  console.log();
}

var x = 40;
var y = 50;

numbersForSomething(x, y);

//Exercise 3
function displayReceipt(totalDue, amountPaid) {
  var ChangeDue = amountPaid - totalDue;
  console.log("Total Due: " + "$" + totalDue);
  console.log("Amount Paid: " + "$" + amountPaid);
  console.log();

  if (ChangeDue > 0){
  console.log("Change Due: " + "$" + ChangeDue);}
    else if (ChangeDue < 0){
        console.log("Not enough funds. Customer owes: $" + Math.abs(ChangeDue));
    }

  console.log();
}

var due = 9.99;
var paid = 20;

displayReceipt(due, paid);
displayReceipt(100, 50);