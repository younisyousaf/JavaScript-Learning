//Functions in JavaScript
//If you want to perform a task repeatedly you can use the functions
const sayMyName = function () {
    console.log("Younis Yousaf");
    console.log("Younis Yousaf");
}

//sayMyName : This the reference of the function
//sayMyName() : Now this function will execute, it's mean that function will not execute without paranthesis, Let's execute the above function

//sayMyName() //This will print the name two times because we wrote it two  times

//Let's write some other functions

//Add two numbers
const addTwoNumbers = function (num1, num2) {
    //Method 1
    //let result = num1 + num2;
    //return result;

    //Method 2
    return num1 + num2; //You can simply write this    

}
// let result = (Math.random(),Math.random()); //I have used Math.random() function, you can use the numbers
// console.log(result) 0.11636988618358357
let result = (2, 4) //In some cases if you have provided the string it will concatenate them 
//console.log(result) //Output: 6

//Display Message Function
const loggedInMessage = function (username /*= "user" */)/*If you want to pass a default value than you can simply write it in parameters and when you provide argument it will be override that value you have provided be-default:
Output: Younis Yousaf just logged in!
*/ {
    let message = `${username} just logged in!`;
    //If user didn't pass any arugment then we can check it here using conditional-statements
    //This is the simple way for conditional statements
    // if(username === undefined){
    //     console.log("Please enter a value first!");
    // }
    //Output will be: just logged in! because we didn't pass any value as argument
    //Let's do it in professional way
    if (!username) {
        console.log("Please enter a value first!");
        //if you want that the statements after if-condition do not execute then simply write:
        // return //Here you can say that code execution after this statement will stopped.
        //Output:
        // Please enter a value first!
        // undefined
        //As you can see the output
    }

    //Output will be the same
    return message;
}
//if you write just function like loggedInMessage(), it will execute but the message will not be printed, so you have to store it in a variable
let resultedMessage = loggedInMessage("Younis Yousaf");
//console.log(resultedMessage); //Younis just logged in!

//Objects and Arrays in Function
// Object:
const user = {
iteName : "Football",
price : "999"
}

//Let access it in the function
/*const calculatePrice = function(anyObject){
    return anyObject.price
}*/
//console.log(calculatePrice(user)) //Here it will simply print the price
//In the case of Cart, multiple values be as arguments so what should we do
//we will use the rest operator (...)
//Scenario 1
function calculatePrice(...anyObject){
    return anyObject
}
//console.log(calculatePrice(200,300,330))
//Scenario 2
function calculateCartPrice(val1, val2, ...anyObject){
    return anyObject
}
//[ 43, 90, 21, 84 ] The output is like this because we have provided the parameters val1, and val2 also. So the first and second Element will be assigned to the val1 and val2 respectively and the rest of the values will be assigned to anyObject.
//console.log(calculateCartPrice(239,384,43,90,21,84))

//Objects Handling
//Scenario 1 passing the object
const myUser = {
    userName : "Younis Khan",
    id: 999
}
function handleObject(anyObject){
    console.log(`UserName is : ${anyObject.userName} and ID is ${anyObject.id}`);
}
//handleObject(myUser) //Here we have to provided the object compulsory
// You can simply pass the object itself
handleObject({
    userName : "Talha Khan",
    id : 2323
}) //So it will simply override the default value 

//Array Handling in Functions
const scoreArray = [200,304,434,43,934];
function handleArray (anyArray){
console.log(`The Second Element is ${anyArray[1]}`);
}
//handleArray(scoreArray) //This will simply print the value at index[1]/second value
//We can directly pass the values
handleArray([22,34,445,3434])