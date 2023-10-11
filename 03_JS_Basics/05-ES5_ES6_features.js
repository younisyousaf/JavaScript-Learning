
// var numbers = [45, 4, 9, 16, 25];
// var over18 = numbers.filter(myFunction);

// // document.getElementById("demo").innerHTML = over18;

// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(over18)
// var numbers1 = [45, 4, 9, 16, 25];
// var numbers2 = numbers1.map(myFunction);

// // document.getElementById("demo").innerHTML = numbers2;

// function myFunction(value, index, array) {
//   return value * 2;
// }

// console.log(numbers2)

// var numbers = [45, 4, 9, 16, 25];
// var sum = numbers.reduce(myFunction);

// // document.getElementById("demo").innerHTML = "The sum is " + sum;

function myFunction(total, value, index, array) {
  return total + value;
}
// console.log(sum);

var numbers = [23,4,45,494,34];
var allValuesOverZero = numbers.every(myfunction);

function myfunction(value){
    return value > 68
}
console.log(allValuesOverZero)

//When we recieve data from the server we will use JSON.parse() to convert the 
//text string to a object
var webData = JSON.parse('{"name":"John", "age":30, "city":"New York"}')
console.log(webData)
console.log(typeof webData)

// If we want to send the data to server we will first convert the object to a string
//When the object is converted into string completely then we will send the data

var object = {"name" : "younis khan", "email": "abc283@gmail.com", "location":"anonymous"};
// //Now we will covert it to the string/text form
var myJSON = JSON.stringify(object);

console.log(myJSON)
console.log(typeof myJSON)

const mydate = new Date();
console.log("ISO Format : " + mydate.toISOString());
console.log("JSON Format : ", mydate.toJSON());

//Set and Get Property
var person = {
    name: 'younis',
    location: 'abbottabad',
    language: 'pashto',
    get lang() {
        return this.language
    },
    set lang(value) {
        this.language = value;
    }
}
console.log(person.lang = "English");

//Bind() Method
const personOne = {
    "firstName" : "John",
    "secondName" : "Doe",
    "fullname" : function(){
        return this.firstName + " " + this.secondName;
    }
}

const secondPerson = {
    "firstName" : "Younis",
    "secondName" : "Yousaf",
}

let fullname = personOne.fullname.bind(secondPerson);
console.log("Full Name is : ",fullname());



//Spread Operator (...)
const m1 = ["Jan","Feb","Mar","April"];
const m2 = ["May","June","July","August"];
const m3 = ["Sep","Oct","Nov","Dec"];

const allMonths = [...m1,...m2,...m3];
// console.table(allMonths)
console.log(allMonths);


//For/of Loop Statements

const namesArray = ["Younis", "Talha", "Zaid","Hamza","Ishtiaq"];

for(let i of namesArray){
    console.log(i);
}

//Looping Over String
let myName = "Younis";
for(let index of myName){
    console.log(index)
}

//Maps in JS
const favFruits = new Map();
favFruits.set("fruit1","Apple");
favFruits.set("fruit2","PineApple");
favFruits.set("fruit3","Mango");

console.log(favFruits.get("fruit2"));
//To find the size of the map we will use size method
console.log("The Size of the Fav Fruits is : ", favFruits.size)

//Now we will delete a key and it's value from the above Map
//I want to delete the mango, we have to provide the key in order to delete it.
//let's do it
console.log(favFruits.delete("fruit3")); 
//Now We will confirm that the specific key is deleted or not
console.log(favFruits)
// Map(2) { 'fruit1' => 'Apple', 'fruit2' => 'PineApple' } 
//As you can see the element is removed successfully from the Map and it's size also decreased.

//CLEAR() Method
//Now In case you have to delete/remove all the elements from a Map, then we will use the 
//clear function
//Let's create a new Map in order to check it completely
const myMap = new Map(
 [
    ["name","younis"],
    ["position","frontend-developer"],
    ["location","mansehra"],
    ["company","Urraan"]
 ]
);
//Now we will display the elements of the map
console.log(myMap);
// Map(4) {
//     'name' => 'younis',
//     'position' => 'frontend-developer',
//     'location' => 'mansehra',
//     'company' => 'Urraan'
//   }
//As we can see that the elements are successfully displayed
//Now we will remove all the elements from the "myMap"
console.log(myMap.clear())
console.log(myMap) //Map(0) {}, As you can see that the map is empty now

//has() Method
//In case you want to check that the key exists or not in the map
const favSports = new Map([
    ["sports","cricket"],
    ["sports2","football"],
    ["sports3","Table Tennis"],
]);
//Now we will check a specific key in the favSports Map
console.log(favSports.has("sports2")); //true The result will be true because key exists in that Map

//The Point to be noted:
//          The return type of the Map is Object
console.log(favSports instanceof Map); //true, because it works same like object in key-value pairs
console.log(myMap.constructor === Map); // true

//Entries Method
//This method will work like the forEach Loop
//Now we will display the all entries of favroite sports Map
console.log(favSports.entries())
// [Map Entries] {
//     [ 'sports', 'cricket' ],
//     [ 'sports2', 'football' ],
//     [ 'sports3', 'Table Tennis' ]
//   }
//As you can see the output, all entries are displayed

//Key Method in Map
//If you want to display the keys of the specified Map, you will use the keys method
//Now we will display the keys of the favSports Map
console.log(favSports.keys()) 
//[Map Iterator] { 'sports', 'sports2', 'sports3' }, this is output with all keys

//Similarly Map has pre-defined method for the values also
console.log("Values of FavSports : ",favSports.values())
// Values of FavSports :  [Map Iterator] { 'cricket', 'football', 'Table Tennis' }


//Set in JS
// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// A Set can hold any value of any data type.

const letters = new Set(["a",1,"b",2,"Younis Khan",33.3])
//We can also add the values
letters.add("JavaScript")

//We can add variables also
let newVariable = "ReactJS"
letters.add(newVariable)
console.log(letters);
//Output
// Set(8) { 'a', 1, 'b', 2, 'Younis Khan', 33.3, 'JavaScript', 'ReactJS' }
//Similarly like Object and Map, we can print all the values of the respective set
//Let's print the values of the letter set 
console.log(letters.values())
// [Set Iterator] {
//     'a',
//     1,
//     'b',
//     2,
//     'Younis Khan',
//     33.3,
//     'JavaScript',
//     'ReactJS'
//   }
//As we can see the above output that all the values of the Set "letters" are printed
//A Set has no keys, If we write the keys() method for the set, this will output the following output
console.log(letters.keys())

//Each value will occur once: means that when we add a new value it will not be added again
//Same value will not be added to the Set
// If you add equal elements, only the first will be saved:
letters.add("JavaScript") //Let's try this out
console.log(letters);
// Set(8) { 'a', 1, 'b', 2, 'Younis Khan', 33.3, 'JavaScript', 'ReactJS' }
//As you can see the JavaScript is written once only

//entries() method
console.log(letters.entries());
//If we call the enteries method, normally entries method return the output in the form of
//keys: values or key-value pair's but in this scenario it will return the value-value pair instead of key-value pair. The output is the followin for the above console
// [Set Entries] {
//     [ 'a', 'a' ],
//     [ 1, 1 ],
//     [ 'b', 'b' ],
//     [ 2, 2 ],
//     [ 'Younis Khan', 'Younis Khan' ],
//     [ 33.3, 33.3 ],
//     [ 'JavaScript', 'JavaScript' ],
//     [ 'ReactJS', 'ReactJS' ]
//   }

//Point to be Noted:
//The type of the Sets is Object.
//So, It will return the object
console.log("The type of Set Letters is : ",typeof(letters))
// The type of Set Letters is :  object
console.log(letters instanceof Set); //This will also return the true, because we can create the constructor for the Set.
