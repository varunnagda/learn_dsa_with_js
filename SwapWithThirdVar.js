//Swaping two numbers using third variable

var startNumber = 55;
var lastNumber = 66;

console.log("Before Swaping the values are :-");
console.log(`First Number=${startNumber}`);
console.log(`Seond Number=${lastNumber}`);

var temp = startNumber;
startNumber = lastNumber;
lastNumber = temp;

console.log("After transpose the values are:-");
console.log(`First Number=${startNumber}`);
console.log(`Seond Number=${lastNumber}`);