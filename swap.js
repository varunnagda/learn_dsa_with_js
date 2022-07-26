//swapping of two numbers without using third variable

var firstNumber = 10;
var secondNumber = 20;

console.log("Before transpose the values are:-");
console.log(`First Number=${firstNumber}`);
console.log(`Seond Number=${secondNumber}`);

firstNumber = firstNumber + secondNumber;
secondNumber = firstNumber - secondNumber;
firstNumber = firstNumber - secondNumber;

console.log("Before transpose the values are:-");
console.log(`First Number=${firstNumber}`);
console.log(`Seond Number=${secondNumber}`);