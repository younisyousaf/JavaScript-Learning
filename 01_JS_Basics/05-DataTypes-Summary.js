//There are two types of datatypes

//  1. Primitive
        //  String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 50;
let myName = "Younis Yousaf";
const isLoggedIn = false;
const outSideTemp = null
let id;
const myId = Symbol('2343')
const myId2 = Symbol('2343')

console.log(myId == myId2) //Here it will give output of false because
//Symbol datatype makes it unique (either you pass the same value)

const bigNumber = 8554384558458945948395843958n;
console.log(typeof bigNumber) //BigInt
//  2. Non-Primitive (Reference Type)
        //  Array, Objects, Functions
//These types are introduced on the basis of:
    //  i. How to store the data
    //  ii. How to access the data

let muslimsHeros = ["Hazrat AbuBakar Siddique (R.A)", "Hazrat Umer-bin-Khatab (R.A)", "Hazrat Ali (R.A)", "Hazrat Usman-e-Ghani (R.A"];

let myObj = {
    name: "Younis Yousaf",
    email: "abc123@gmail.com",
    id: "23902"
}

let myFunction = function(){
    console.log("Hello World!");
}

console.table(myObj)
console.table(muslimsHeros)

//For More Details Visit: https://262.ecma-international.org/5.1/#sec-11.4.3

//**************    STACK and HEAP (Memory) **************//
// STACK is Used along the Primitive Data Types (Number, String, boolean, null, undefined, Symbol, BigInt)
// HEAP is Used along the Non-primitive Data Types (Array, Object, Function)


//STACK
let Name = "Younis";
let myNewName = Name;
myNewName = "Younis Yousaf";

//Here the value will be different because in STACK a copy of data is assigned, so the output will be different because "myNewName" is updated.
console.log(Name);
console.log(myNewName);

//HEAP
let userOne = {
    email: "user123@gmail.com",
    userId : "56895.IT"
}

let userTwo = userOne;
userTwo.email = "user456@gmail.com";

//Here the output will be the same "user456@gmail.com" because we are targeting the same object (Reference of the object one) so it will change the email of "userOne" also.
console.log(userOne.email)
console.log(userTwo.email)
