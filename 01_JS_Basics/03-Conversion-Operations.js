let score = undefined;

//console.log(typeof score) //Method 1 to check type
//console.log(typeof(score)) //Method 2 to check type

let newScore = Number(score)
//console.log(typeof newScore)//Here It will return correct value
//console.log(newScore) //Here It will give output of NaN (Not a Numbers)
//for undefined it will convert it to object (NaN)
//for null it will convert it 0

//1 => true; 0 => false
//"" => false
//"abc" => true

/***********************Operations*****************************/
let value = 3;
let negValue = -3;

console.log(negValue); //It will return -3

//Some Basic Arithmetic Operations
// console.log(2+2)
// console.log(2*2)
// console.log(2-2)
// console.log(2/2)
// console.log(3%2)

//Prefix and Postfix (For more understanding, read mdn documentation)
//Link to Documentation
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
let gameCounter = 100;
console.log(gameCounter++); //Postfix
console.log(++gameCounter); //Prefix