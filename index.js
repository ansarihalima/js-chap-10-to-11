// /////////////////////////////Question-1

var cityName = prompt("Enter the city name")

if (cityName === "karachi") {
    alert("Welcome to city of lights");
} else {
    alert("Welcome!");
}


/////////////////////////////Question-2

var gender = prompt("Please enter the gender (male or female):");

if (gender === "male") {
    alert("Good Morning Sir.");
} else if (gender === "female") {
    alert("Good Morning Ma’am.");
} else {
    
    alert("Good Morning.");
}
///////////////////////////Question-3

// Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

let trafficColor = prompt("Enter traffic color for information");

if (trafficColor === "red") {
    alert("Must stop");  
}
else if (trafficColor === "yellow") {
    alert("Ready to move");
}
else if (trafficColor === "green") {
    alert("Move now");
}
else {
    alert("Error: Invalid traffic color");
}
/////////////////////////////Question-4

// Write a program to take input remaining fuel in car (in
//litres) from user. If the current fuel is less than 0.25litres,
//show the message “Please refill the fuel in your car”

let remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));

if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car");
} else {
    alert("You have enough fuel. Drive safely!");
}
/////////////////////////////Question-5
// Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
var a = 4;

if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
    }

///////////////////////////Question-6
var marks1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
    var marks2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
    var marks3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
    var totalMarks = parseFloat(prompt("Enter total marks:"));
  
    var obtainedMarks = marks1 + marks2 + marks3;
    var percentage = (obtainedMarks / (totalMarks * 3)) * 100;
  
    var grade, remarks;
  
    if (percentage >= 90) {
      grade = "A+";
      remarks = "Excellent";
    } else if (percentage >= 80) {
      grade = "A";
      remarks = "Very Good";
    } else if (percentage >= 70) {
      grade = "B";
      remarks = "Good";
    } else if (percentage >= 60) {
      grade = "C";
      remarks = "Fair";
    } else if (percentage >= 50) {
      grade = "D";
      remarks = "Average";
    } else {
      grade = "F";
      remarks = "Fail";
    }
  
    document.write("<h2>Result</h2>");
    document.write("Total Marks: " + totalMarks + "<br>");
    document.write("Marks Obtained: " + obtainedMarks + "<br>");
    document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
    document.write("Grade: " + grade + "<br>");
    document.write("Remarks: " + remarks + "<br>");

    

/////////////////////////////Question-7
let secretNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer.");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    alert("Close enough to the correct answer.");
} else {
    alert(`Sorry, the secret number was ${secretNumber}. Try again!`);
}

/////////////////////////////Question-8

let user = parseInt(prompt("Enter a number to check if it's divisible by 3:"));
function checkDivisibilityBy3(number) {
    if (number % 3 === 0) {
        console.log(user + " " + "is divisible by 3.");
    } else {
        console.log(user + " " + "is not divisible by 3.");
    }
}

checkDivisibilityBy3(user);


// /////////////////////////////Question-9

// Function to check if a number is even or odd
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is an even number.`);
    } else {
        console.log(`${number} is an odd number.`);
    }
}

let userInput = parseInt(prompt("Enter a number to check if it's even or odd:"));

checkEvenOrOdd(userInput);

// /////////////////////////////Question-10

let weather = parseFloat(prompt("Enter the temperature in degrees Celsius:"));
function checkWeather(temperature) {
    if (temperature > 40) {
        console.log("It is too hot outside.");
    } else if (temperature > 30) {
        console.log("The Weather today is Normal.");
    } else if (temperature > 20) {
        console.log("Today’s Weather is cool.");
    } else if (temperature > 10) {
        console.log("OMG! Today’s weather is so Cool.");
    } else {
        console.log("Temperature is below 10 degrees. It's very cold!");
    }
}

// /////////////////////////////Question-11

var firstNumber = parseFloat(prompt("Enter the first number:"));
var secondNumber = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");

var result;

if (operation === "+") {
    result = firstNumber + secondNumber;
} else if (operation === "-") {
    result = firstNumber - secondNumber;
} else if (operation === "*") {
    result = firstNumber * secondNumber;
} else if (operation === "/") {
    if (secondNumber === 0) {
        result = "Infinity (Division by zero error)";
    } else {
        result = firstNumber / secondNumber;
    }
} else if (operation === "%") {
    result = firstNumber % secondNumber;
} else {
    result = "Invalid operation";
}

console.log("Result: " + result);

