//Scope in JS
//Let declare's the variables
let a = 10
const b = 20
var c= 30

//This will print the value's of the variables
// console.log(a)
// console.log(b)
// console.log(c)

//Let now check the scope of the variables
if(true){
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

function one(){
    const username = "younis yousaf"
    function two(){
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
if(true){
    const username = "younis yousaf"
if(username === "younis yousaf"){
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


//Hoisting in JS (Example)

//Let's declare two functions to understand the hosting
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

console.log(addOne(4));
function addOne(num){
    return num + 1
}
//PS G:\JS\JavaScript-Learning\03_JS_Basics> node .\03_scopes.js
//5
//As you can see that the function is working properly
//Let's apply the same logic on addTwo() function
console.log(addTwo(4));
const addTwo = function (num){
    return num + 2
}
//console.log(addTwo(4));
// ReferenceError: Cannot access 'addTwo' before initialization
//As you can see the error that in this case we cannot invoke/call the function
//before the initialization
//I hope you understand the Hoisting in JS
