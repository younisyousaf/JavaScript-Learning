//Scope in JS
//Scope determines the accessibility of variables, objects, and functions from different parts of the code.
//Let declare's the variables
let a = 10
const b = 20
var c = 30

//This will print the value's of the variables
// console.log(a)
// console.log(b)
// console.log(c)

//Let now check the scope of the variables
if (true) {
    let a = 20;
    const b = 22;
    var c = 300
}
//There will be error's comes out for the first two variables (a and b)
//because they had block scope 
//What is block scope?
//  {} , this is scope. It means that any variable that we want to access outside
//these curly brackets will not be access, because they had block scope, means outside
//the curly we cannot access them
//But there is problem for the third variable (c):
//It will override the first value which is 30, and it's new value will be 300, because
//we can access the variable c, it doesn't have block scope
//If we didn't redeclare the (c) variable this problem will still be occurred
//So we have to avoid using the 'var' keyword for declaring the variable in most of the cases
// console.log(a)
// console.log(b)
// console.log(c)


//If we are running the JS code in browser console, the global scope will be seperate
//If we are running the JS code through node (Terminal) the global scope will be seperate

//Scope Level and Mini-Hoisting

//Closure in JS
/*Lexical Scope (Closure):

Lexical scope is created when a function is defined inside another function.
Inner functions have access to variables declared in their outer (enclosing) functions.
This concept is often referred to as "closure." */
function one() {
    const username = "younis yousaf"
    function two() {
        const website = "github"
        //This will be printed because child can access the parent
        //younis yousaf, the reason is in above line
        console.log(username);
    }
    //This should not be printed because the scope of the website is block
    //ReferenceError: website is not defined, so comment this 
    // console.log(website) 
    two() //call/invoke function
}
//one() //call/invoke function

//Same case for the if-statement
if (true) {
    const username = "younis yousaf"
    if (username === "younis yousaf") {
        const website = " github"
        //younis yousaf github, this is the output because the child can access the
        // the properties of parent
        //  console.log(username + website)
    }
    // ReferenceError: website is not defined, as you can see that it will not be accessed outside the scope, so we will comment this
    // console.log(website)
}
//this will also not be executed because it's scope is ended
// console.log(username)

//Let's declare two functions
// function addOne(num){
//     return num + 1
// }
// addOne(4)

// const addTwo = function (num){
//     return num + 2
// }
// addTwo(4)

//If we print the values of the function's it will be printed but
//Case 1: 
//      If we invoke the function before the function(){} body so what will happen
//      to the function addOne()

// console.log(addOne(4));
function addOne(num) {
    return num + 1
}
//PS G:\JS\JavaScript-Learning\03_JS_Basics> node .\03_scopes.js
//5
//As you can see that the function is working properly
//Let's apply the same logic on addTwo() function
//Note:
//function expressions and class expressions are not hoisted
//Declarations can be hoisted but not initializaions
// console.log(addTwo(4));
const addTwo = function (num) {
    return num + 2
}
//console.log(addTwo(4));
// ReferenceError: Cannot access 'addTwo' before initialization
//As you can see the error that in this case we cannot invoke/call the function
//before the initialization


/*In JavaScript, scope refers to the context in which variables and functions are declared and accessed. It determines the visibility and accessibility of variables and functions within a program. Understanding scope is crucial for writing maintainable and error-free code.

There are two main types of scope in JavaScript:

Global Scope:
Variables declared in the global scope are accessible from anywhere in the code, including inside functions.
Variables declared outside of any function or block have global scope.
They are typically defined using the var keyword, but in modern JavaScript, you should use let or const for better scoping.*/
//Example:
var globalVar = "I'm in Global Scope";

function myFunction() {
    console.log(globalVar); //Accessible inside the function
}
//myFunction();
// console.log(globalVar); //Accessible outside the function

/*
Local Scope (Function Scope):

Variables declared inside a function are local to that function and can only be accessed within that function.
Variables declared with let or const inside a block (e.g., if statements or loops) are also block-scoped and can only be accessed within that block.

*/
//Example:
function myFunction() {
    var localVar = "I'm in local scope"; // Function-scoped variable

    if (true) {
        let blockVar = "I'm in block scope"; // Block-scoped variable
        console.log(blockVar); // Accessible inside the block
    }

    console.log(localVar); // Accessible inside the function
    // console.log(blockVar); // Error: blockVar is not defined here
}

//   myFunction();
// console.log(localVar); // Error: localVar is not defined here


/*Block Scope (ES6+):

Introduced in ES6 (ECMAScript 2015), block scope allows variables declared with let and const to be limited in scope to the nearest enclosing block, such as an if statement or a loop. */
//Example:
if (true) {
    let blockVar = "I'm in block scope"; // Block-scoped variable
    // console.log(blockVar); // Accessible inside the block
}

// console.log(blockVar); // Error: blockVar is not defined here

/*
Module Scope (ES6+):

In ES6, when you use import and export statements to organize code into separate modules, each module has its own scope.
Variables declared in one module are not accessible in another module unless explicitly exported and imported.
*/
//Module A
// moduleA.js
// export const moduleVar = "I'm in module A";
//Module B
// moduleB.js
// import { moduleVar } from './moduleA.js';

// console.log(moduleVar); // Accessing moduleVar from module A


function myFunction() {
    var localVar = "I'm a var variable in a function";
  }
  
  myFunction();
  
//   console.log(localVar); // Accesses localVar outside the function


  