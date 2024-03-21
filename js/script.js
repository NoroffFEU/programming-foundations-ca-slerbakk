//Module 1:
//Strings, Numbers and Booleans:
//Q1: This is two number variables, one with an integer value and one with a decimal value
var thisIsInteger = 10;
var thisIsDecimal = 81.1;
console.log(thisIsInteger);
console.log(thisIsDecimal);

//Q2: This is variables containing all the workdays in a week.
var workingDay1 = "monday";
var workingDay2 = "tuesday";
var workingDay3 = "wednesday";
var workingDay4 = "thursday";
var workingDay5 = "friday";

//This is a variable containing the variables for every day of the week.
var workingDays =
  workingDay1 +
  "-" +
  workingDay2 +
  "-" +
  workingDay3 +
  "-" +
  workingDay4 +
  "-" +
  workingDay5;

console.log(workingDays);

//Q3: This is variables that demonstrate the basic arithmetic operators.
var addition = 8 + 4;
console.log(addition);

var substraction = 19 - 17;
console.log(substraction);

var multiplication = 73 * 54;
console.log(multiplication);

var division = 751 / 37;
console.log(division);

//Q4: This is an example of a boolean variable with initial value of false.
var snowIsHot = false;
console.log(typeof snowIsHot);
console.log(snowIsHot);

//Q5: This will show the numbers of characters in my string:
var numberOfCharacters = "The frogs are angry.";
console.log(numberOfCharacters.length);

//Q6: This will convert the variable names to camelCase:
var time_elapsed = "timeElapsed";
var totalprice = "totalPrice";

console.log(time_elapsed);
console.log(totalprice);

//Q7: This will convert the string values from question 7 to number values:
var number1 = "53";
var readyNumber1 = parseInt(number1);
var number2 = "44.6";
var readyNumber2 = parseFloat(number2);

console.log(readyNumber1);
console.log(readyNumber2);

//Q8: This will check the type of the following variables:
var pet = "Donkey";
var age = 89;
var discountApplied = true;
var timeLeft;

var petType = typeof pet;
var ageType = typeof age;
var discountAppliedType = typeof discountApplied;
var timeLeftType = typeof timeLeft;

console.log(petType);
console.log(ageType);
console.log(discountAppliedType);
console.log(timeLeftType);

//Q9: Declare and initialise a variable with the value "Updating heading".
var updatedText = "Updating Heading";
var headerText = document.querySelector("h1");

headerText.innerHTML = updatedText;

//Q10:
var bodyStyle = document.querySelector("body");
bodyStyle.style.backgroundColor = "lightskyblue";

//Making Decisions:
//Question 1:
var firstNumber = 34;
var secondNUmber = 89;

if (firstNumber < secondNUmber)
  console.log("The first number is smaller than the second");
else {
  console.log("The first number is not smaller than the second");
}

//Question 2: I wrote Q1 above^ before reading Q2 x)
var age = 11;
var minimumAge = "13";

if (age > parseInt.minimumAge) console.log("The condition is met");
else {
  console.log("The condition is not met.");
}

//Question 3:
var income = "11.050";
var maximumIncome = "13.075";

if (parseFloat.income <= parseFloat.maximumIncome)
  console.log("It passes the test.");
else {
  console.log("It does not pass the test.");
}

//Question 4:
var colour = "blue";

if (colour === "orange") {
  console.log("This colour is a bit rubbish");
}

//Question 5:
var invoicePaid = false;

if (invoicePaid !== true);
console.log("The invoice has not been paid.");

//Question 6:
var selectedNumber = 11;
var winningNumber = "15";

if (winningNumber !== parseInt.selectedNumber);
console.log("You lose!");

//Question 7:
var dayOfTheWeek = 7;
var weekDay;

switch (dayOfTheWeek) {
  case 7:
    weekDay = "Sunday";
    break;
  case 6:
    weekDay = "Saturday";
    break;
  case 5:
    weekDay = "Friday";
    break;
  case 4:
    weekDay = "Thursday";
    break;
  case 3:
    weekDay = "Wednesday";
    break;
  case 2:
    weekDay = "Tuesday";
    break;
  case 1:
    weekDay = "Monday";
    break;
  default:
    weekDay = "Invalid day number";
}

console.log(weekDay);

//Loops
//Question 1:
for (var i = 0; i <= 7; i++) {
  console.log(i);
}

//Question 2:
for (var i = 10; i >= 1; i--) {
  console.log(i);
}

//Question 3:
for (var i = 10; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//Module 2: String Properties:
//Q1:  Use a JavaScript string method to determine whether these strings are equal regardless of letter case.
var requiredName = "Gertrude";
var suppliedName = "GERTRUDE";

if (requiredName === suppliedName) {
  console.log("Correct, they are equal.");
} else {
  console.log("False, they are not equal.");
}

//I realised when I saw the answer that I missunderstood, so I'll convert them too.
//To lowercase:
if (requiredName.toLowerCase() === suppliedName.toLowerCase()) {
  console.log("They are equal.");
}
//To uppercase:
if (requiredName.toUpperCase() === suppliedName.toUpperCase()) {
  console.log("They are equal.");
}

//Question 2: Write an if statement to check if the variable below has a minimum character count of 4 and a maximum of 10.
var username = "myusername";

if (username.length >= 4 && username.length <= 10) {
  console.log("Username is valid");
} else {
  if (username.length > 10) {
    console.log("They have too many characters");
  }

  if (username.length <= 4) console.log("There's not enough characters");
}

//Question 3:
var invoicePaid = true;
var productDispatched = true;
var customerHasSigned = true;

if (
  invoicePaid === true &&
  productDispatched === true &&
  customerHasSigned === true
) {
  console.log("Order Complete.");
} else {
  if (invoicePaid === false) {
    console.log("Invoice has not been paid.");
  }
  if (productDispatched === false) {
    console.log("The product has not been dispatched.");
  }
  if (customerHasSigned === false) {
    console.log("The customer has not yet signed.");
  }
}

//Question 4:
var invoicePaid = false;
var productDispatched = true;
var customerHasSigned = false;

if (!invoicePaid || !productDispatched || !customerHasSigned) {
  if (invoicePaid === false) {
    console.log("Invoice has not been paid.");
  }
  if (productDispatched === false) {
    console.log("The product has not been dispatched.");
  }
  if (customerHasSigned === false) {
    console.log("The customer has not yet signed.");
  }
} else {
  console.log("Order Complete");
}

//Module 2: Arrays:
//Question 1: Log the 3rd item in this array.
var winningNumbers = [7, 13, 5, 1, 16, 79];
console.log(winningNumbers[2]);

//Saw in the answers its done differently and made into a variable before console logged.
var thirdNumber = winningNumbers[2];
console.log(thirdNumber);

//Question 2: Add a new item to this array using the Push method.
var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];
vegetables.push("newItem");
console.log(vegetables);
console.log(vegetables.length);

//Question 3: Console log each item in this array using a for loop.
var randomThings = ["pumpkin", false, 23, true, "tomato"];

for (var i = 0; i < 5; i++) {
  var item = randomThings[i];
  console.log(item);
}
