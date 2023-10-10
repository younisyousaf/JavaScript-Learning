/*   THIS Keyword
    -> In the browser environment the global object is Window.
    -> In node environment the global object is empty object {}.

*/
//PS G:\JS\JavaScript-Learning\03_JS_Basics> node .\04_this_and_arrowFunction.js
//{}
//console.log(this) //As you can see the output in the above line

//Now we will check the output in the function
// function myFunction(){
// console.log(this) the output will be undefined
// }
// myFunction() //When we invoke this function the keyword "this" will work perfectly
//But When we want to access a variable it will not work
// function myFunction(){
//     let userName = "younis khan";
// console.log(this.userName) the output will be undefined
// }
// myFunction()

//Now let's do it through arrow-function
/*  ARROW FUNCTION */
function myFunction (){
    let userName = "Younis Khan"
    console.log(this.userName)
}
myFunction() //Still it will not work so we can conclude that this keyword will not work in arrow function.


//let's experience the arrow function now
// () =>{

// } This is the syntax of the arrow function

//Basic Arrow Function
// const addTwo = (num1, num2) =>{
// return num1 + num2
// }

//Implicit return Arrow Function, In this context the paranthesis and "return" keyword will not we used
const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(23,55));

//If we want to access the object using arrow function
const myObject = () => ({"username":"Younis Khan"});
console.log(myObject(this.username));






















/*
+++++++++++++++++++ THIS +++++++++++++++++++
In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.

Note: Remember that "this" is not a variable, it's a keyword, so you cannot change
the value of "this".
*/