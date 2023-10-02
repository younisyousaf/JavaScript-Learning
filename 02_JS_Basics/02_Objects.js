//Singleton
//Object.create //Constructor method

//Object Literals
//How to access a Symbol in objects
const mySym = Symbol("key123")

//Declaring Object
const jsUser = {
    "name": "Younis Yousaf",
    "email": "younis@google.com",
    "age" : "22",
    [mySym] : "key123",
    "position": "Web Developer Intern",
    "location" : "Abbottabad",
    "company" : "codematics",
    "isLoggedIn": "true",
    "lastLoginDay": ["Monday"]
}

//Accessing Object's
// console.log(jsUser.name) //Not a appropriate way to access the value's of objects
// console.log(jsUser["name"]) //Appropriate and accurate way to access the value's of objects
//Let's access the Symbol
// console.log(jsUser[mySym])

//We can alter the values of the objects
jsUser.email = "yykhan@gmail.com"
//If you want that no one can change the object key's and it's values
//Object.freeze(jsUser) //This method will freeze the object and it's values cannot be changed 

/*
{
    name: 'Younis Yousaf',
    email: 'yykhan@gmail.com',       
    age: '22',
    position: 'Web Developer Intern',
    location: 'Abbottabad',
    company: 'codematics',
    isLoggedIn: 'true',
    lastLoginDay: [ 'Monday' ],      
    [Symbol(key123)]: 'key123'       
}
*/
//As you can see the above output, email is not changed because the object is freezed now
jsUser.email = "younisyousaf@google.com"
// console.log(jsUser);

//Let add some function's to the object
jsUser.greeting = function(){
    console.log("Hello World!");
}
// console.log(jsUser.greeting());

//Let's access the name key
jsUser.greetingTwo = function(){
    console.log(`Hello JS User! ${jsUser.name}`);
}
// console.log(jsUser.greetingTwo());

/* ---------------------Objects Part#02------------------------- */

//Singleton
// const obj = new Object();

const newObj = {} //Another method to declare an object
newObj.email = "yykhan@google.com"
newObj.location = "Mansehra"
newObj.id = "user88"

//console.log(newObj)

//Nested Objects
const nestObj = {
    "name" : "Younis Khan",
    "address" : {
        "region" : "KP",
        "city" : "Mansehra"
    },
    "fullname": {
        "firstname" : "Younis",
        "lastname" : "Yousaf",
    }
}

//console.log(nestObj) 
//OUTPUT:
/*
{
  name: 'Younis Khan',
  address: { region: 'KP', city: 'Mansehra' },
  fullname: { firstname: 'Younis', lastname: 'Yousaf' }
}
*/

//Now we will access the nested objects
//console.log(nestObj.fullname) //Output: { firstname: 'Younis', lastname: 'Yousaf' }
//console.log(nestObj.address) //Output: { region: 'KP', city: 'Mansehra' }
//Now we will access the values of the nested objects

//console.log(nestObj.fullname.firstname) //Output: Younis
//console.log(nestObj.address.region) //Output: KP

//Now we will merge the Objects
const myObj = {1: "a", 2: "b", 3: "c"};
const objectTwo = {4:"d", 5:"e", 6: "f"};

//const objThree = Object.assign(myObj,objectTwo); Method 1
//const objThree = Object.assign({}, myObj,objectTwo); Method 2
//console.log(objThree) //Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

//Also we have another way to do this 
const objThree = {...myObj,...objectTwo} //Method three and most used
console.log(objThree); //Output will be the same: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


//In some cases like when we get data from the database, this scenario will come's up
const obj = [
    {
        id : "1",
        email: "younis@outlook.com"
    },
    {
        id : "2",
        email: "abc@gmail.com"
    },
    {
        id: "3",
        email : "user12@gmail.com"
    },
];
console.log(obj[1].email); //this will access the first element in the array which is object and further email will be accessed

console.log(newObj) //{ email: 'yykhan@google.com', location: 'Mansehra', id: 'user88' }
//Now we can get values and key's of the object
console.log(Object.keys(newObj)); //this will give the output of the keys of the targeted object and will return it in the form of array: [ 'email', 'location', 'id' ]
//Similarly for the values of the targeted object
console.log(Object.values(newObj)); //Similar to the keys scenario: [ 'yykhan@google.com', 'Mansehra', 'user88' ]
//There is one another method called enteries
console.log(Object.entries(newObj))//This will print all the keys with it's value in the form of array and nested array: 
/*Output: 
[
    [ 'email', 'yykhan@google.com' ],
    [ 'location', 'Mansehra' ],
    [ 'id', 'user88' ]
]
  */
 //As we can see that sub-arrays are given in the output
 //First value in the sub-array will always be a key and the second value will be actual-value of that key.
 //To check that this object has this property or not
 console.log(Object.hasOwnProperty('isLoggedIn')); //False because this object doesn't have such property, so in this way you can check that object own's this property or not.