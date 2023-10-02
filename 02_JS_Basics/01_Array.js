//Array in JavaScript
const myArr = [1,3,5,7,9];
const myHeros = ["Hazrat Umar(R.A)", "Hazrat Ali(R.A)"];
const myArr2 = new Array(3,5,9,2,8)

// console.log(myArr[2]);
// console.log(myHeros[1]);
// console.log(myArr2[2]);

//Array Methods

//If you want to add a new Element in the targeted array, you will use the following method
myArr.push(12) //This value/item will be added into the array on last index
//If you want to delete an Element/value/itemf form the array, you will use the following method
myArr.pop()//In this method of array we will not provide any value as an argument, because it will simply remove the first element in array or element at the (0) index

//There is a another method for adding the element 
myArr.unshift(9); //This method will simply add the element at (0) index of the targeted array.
//Output will be like this:
//[ 9, 1, 3, 5, 7, 9 ]
myArr.shift() //This method will simply remove the first element from the array or the element which exists at (0) index
//Output will be like this:
// [1, 3, 5, 7, 9 ]

//There are some other methods like you can ask something (question air's):
//console.log(myArr2.includes(9)) //This method will return a boolean value either value will be exist either not
//If you want to check the index of any element
//console.log(myArr2.indexOf(3)); //This method will return the index of the element you want to check

// console.log(myArr2)

//There is one more important method
const newArr = new Array("Younis","Talha", "Zaid")
const arr2 = newArr.join(); //This method will fetch the elements of the newArr and it will convert the type also (Array to String)
// console.log(newArr);
// console.log(arr2);
// [ 'Younis', 'Talha', 'Zaid' ]
//Younis,Talha,Zaid
//As you can see that first output is of Array type and the second output is of type string
//console.log('A', myArr)
//slice, splice methods in Array
const mynewArr = myArr.slice(1,3);
//console.log( myArr);
//console.log('B',mynewArr)

const mynewArr2 = myArr.splice(1,3);
//console.log(myArr)
//console.log('C',mynewArr2)

//Output will be like this:
// A [ 1, 3, 5, 7, 9 ]


//Here we have the output for three Arrays
//A: This is the original array

//[ 1, 3, 5, 7, 9 ]
//B [ 3, 5 ]
//This is the second array in which we use the slice method, the slice method will get a range as a parameter like here we have values of the parameters (1,3). This means that it will slice the array or it will return a sub-sectio/copy of the original array within the given range here it will start from index[1] and ends on the index[3], but there is one more important thing that it will not include the value of last index.

//[ 1, 9 ]
//C [ 3, 5, 7 ]
//This is the third array in which we use the splice method, this method will also get a range of indexes as parameters,but in this method scenario will be different. This method will give output of sub-section of the original array but it will the remove elements from the original array and it push those values in the new array that we have created.

//So this is the basic difference between the slice and splice method

/*  *************** SOME OTHER ARRAY METHODS **************** */

// If you want to merge the two arrays, following methods will help you to do that 
const mulsimHeros = ["Hazrat AbuBakar Siddique(R.A)", "Hazrat Umar-e-Farooq(R.A)", "Hazrat Usman-e-Ghani(R.A)", "Hazrat Ali(R.A)"];
const mulsimHeros2 = ["Hazrat Khalid-bin-Waleed(R.A)", "Hazrat Umar-bin-Abdul-Aziz","Sultan Muhammad Fateh"]

//Let use the first method which is push() method
// mulsimHeros.push(mulsimHeros2);
// console.log(mulsimHeros);
//Output:
/* 
[
  'Hazrat AbuBakar Siddique(R.A)',  
  'Hazrat Umar-e-Farooq(R.A)',      
  'Hazrat Usman-e-Ghani(R.A)',      
  'Hazrat Ali(R.A)',
  [
    'Hazrat Khalid-bin-Waleed(R.A)',
    'Hazrat Umar-bin-Abdul-Aziz',
    'Sultan Muhammad Fateh'
  ]
]
 
*/
//As you can see the output, there is a little problem that, the second array that we 
//have inserted in first array will added as a single element, so if you want to access 
//the element from the second array, you will code like this:

// console.log(mulsimHeros[3][1]); //This is OK but this is not a good approach to merge the two arrays like this, so instead of using push() method we will a new method.
//concat method
// const firstName = "Younis"
// const lastName = "Yousaf"
// const fullName = firstName.concat(lastName);
// console.log(fullName);

//You will be confused here by this method that we use concat method for strings in order to concatenate them, but here also it is used for Array Merging, it will give a new array which is the combination of two or more arrays
const allHeros = mulsimHeros.concat(mulsimHeros2);
// console.log(allHeros);
/*[
  'Hazrat AbuBakar Siddique(R.A)',
  'Hazrat Umar-e-Farooq(R.A)',    
  'Hazrat Usman-e-Ghani(R.A)',    
  'Hazrat Ali(R.A)',
  'Hazrat Khalid-bin-Waleed(R.A)',
  'Hazrat Umar-bin-Abdul-Aziz',   
  'Sultan Muhammad Fateh'
]*/
//As you can see the output this is totally a new array which is the result of first and second array

//Also there is an another famous method for this which is spread operator
//This method will also give the same output, but most of the developers use this approach
const all_Heros = [...mulsimHeros, ...mulsimHeros2];
// console.log(all_Heros);

const mergedArray = [1,4,5,[3,4], 7,[3,6,1,[4,9]]]
//If you want to make a one array of all these merged arrays
const newArray = mergedArray.flat(Infinity);
/*[
  1, 4, 5, 3, 4, 
  7, 3, 6, 1, 4, 
  9
]*/
//As a result you can see that this array is transformed completely into one array
// console.log(newArray)

//IsArray
//Sometimes when you fetch/get/import the data from some other webpages/websites you don't know the type of data so if you want to check for array, you will use the isArray method
console.log(Array.isArray("Younis"));//false

//If you want to convert to array you will use from() method
//Let 's convert a string to array
console.log(Array.from("Younis"))
console.log(Array.from({name: "Younis", email: "abc123@gmail.com"})) //This will return an empty array. Because we have to tell that we want array of keys or values. So, It will return an empty array
//There is another method, incase the user ask to convert the data to a string that is stored in different values then you will use of() method
const score1 = 100;
const score2 = 200;
const score3 = 300;
const scoreArray = Array.of(score1, score2, score3);
console.log(scoreArray); //[ 100, 200, 300 ] As you can see the output

