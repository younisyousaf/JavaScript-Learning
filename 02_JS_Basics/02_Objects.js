//Singleton
//Object.create //Constructor method

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
console.log(jsUser.name) //Not a appropriate way to access the value's of objects
console.log(jsUser["name"]) //Appropriate and accurate way to access the value's of objects
//Let's access the Symbol
console.log(jsUser[mySym])

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
console.log(jsUser);

//Let add some function's to the object
jsUser.greeting = function(){
    console.log("Hello World!");
}
console.log(jsUser.greeting());

//Let's access the name key
jsUser.greetingTwo = function(){
    console.log(`Hello JS User! ${jsUser.name}`);
}
console.log(jsUser.greetingTwo());