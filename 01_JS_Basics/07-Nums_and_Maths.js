let score = 250;
// console.log(score)
let balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length) //First balance is converted to String and then it will print the length of that string respectively
let newNum = new Number(234);
// console.log(newNum.toFixed(2)) //Returns a string representing a number in fixed-point notation.

let myScore = new Number(123.545)
// console.log(myScore.toPrecision(3)); //Priority will be given to numbers before the decimal point.

let hundreds = 100000000;
// console.log(hundreds.toLocaleString('en-PK'));

/************   MATH *************/
//console.log(Math)
//console.log(Math.abs(-4.6)); //It will give us positive number
//console.log(Math.round(4.56)); //It will round off the number after decimal point
//Some other methods for roundoff, like you want to control it
//console.log(Math.ceil(5.6)) //It will give us output (6), because we have told here that use the upper value
//console.log(Math.floor(5.6)) //It will give us output the lower bound value (5), simply we can say that it will ignore the values/numbers after the decimal point. 
//Let's find minimum value in an array
//console.log(`Minimum Value: ${Math.min(2,4,5,-4,8,6.5)}`);
//Their is max function also to find the maximum value
//console.log(`Maximum Value: ${Math.max(2,4,5,-4,8,6.5)}`);

console.log(Math.random());
console.log(Math.random() * 10 + 1)
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min)