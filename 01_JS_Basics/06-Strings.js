let firstName = "Younis";
let secondName = "Yousaf";

let fullName = `My Full Name is : ${firstName} ${secondName}`;
console.log(fullName);

//String Methods

let websiteName = new String("SoftCode"); //Another method of declaring a string by creating a constructor (Object).

//Access a Specific Index of a String
console.log(websiteName[0]);
console.log(websiteName[7]);

//Access the Proto
console.log(websiteName.__proto__)
//To Check the length of the string
console.log(websiteName.length)
//To change the case of the string there are some methods 
console.log(websiteName.toLowerCase()) //it will convert it to lower case letter's (abc etc).
console.log(websiteName.toLocaleLowerCase()) //It works same as toLowerCase
console.log(websiteName.toUpperCase()) //It will convert it to capital letter's
console.log(websiteName.toLocaleUpperCase()) //It works same as toUpperCase

