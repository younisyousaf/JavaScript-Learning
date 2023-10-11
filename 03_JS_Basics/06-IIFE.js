//Immediately Invoked Function Expressions

//Regular Function
const fn = function () {
    console.log("Hello World");
}
fn();

//Now we will declare the IIFE 
//This is an example of Named IIFE also
(function chaiaurCode() {
    console.log("Hello World!");
})();

//Now let's pass parameters and take the values as arguments and use arrow function also
//Example 1
const myFunc = ((a, b) => {
   return a + b;
})(2,3); //Here the values are arguments
console.log(`Sum is : ${myFunc}`);

//Example 2
((a,b)=>{
    let result = a - b;
    console.log(`${a} - ${b} = ${result}`);
})(34,6.6)