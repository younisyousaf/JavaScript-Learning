//Some Basic Comparions in JS

// console.log(2==2)
// console.log(2>=2)
// console.log(2<=2)
// console.log(2!=2)
// console.log(3<4)
// console.log(2>4)

console.log("2" > 1 )
//Here it will print 'true' because JavaScript automatically convert the string 
//to the number and the result will be indeed true (2 > 1) = true
console.log("02" > 3) //Same Conversion from string to number and result will be (02 > 3) = false

/*      
*******OUTPUT***********
PS G:\JS\JavaScript-Learning\01_JS_Basics> node 04-Comparison.js
true
false
*/

//Null comparison
console.log(null > 0) //false
console.log(null == 0) //false
console.log(null <= 0) //true

//For Undefined 
console.log(undefined > 0)
console.log(undefined >= 0)
console.log(undefined <= 0)
console.log(undefined == 0)
//The reason is that the Equality check "==" and Comparsions "<, >, <=, >=" works 
//differently, because the comparisons convert null to '0' automatically and that's
//why (1) null > 0 = false , (0 > 0) = false
//(3) null <= 0 = true, (0 < 0) || (0 = 0) , one condition will true so (0 = 0) is true
//So Try to avoid these Comparisons, because clean code priority should be high

// === strict Equality Check 
//Here the output will be false because this will check the value and datatype both
//So the value is same but the datatype is different (string) and (number). so the 
//output will be false
console.log("2" === 2) 