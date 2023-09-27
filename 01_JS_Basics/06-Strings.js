let firstName = "Younis";
let secondName = "Yousaf";

let fullName = `My Full Name is : ${firstName} ${secondName}`;
//console.log(fullName);

//String Methods

let websiteName = new String("SoftCode"); //Another method of declaring a string by creating a constructor (Object).

//Access a Specific Index of a String
//console.log(websiteName[0]);
//console.log(websiteName[7]);

//Access the Proto
//console.log(websiteName.__proto__)
//To Check the length of the string
//console.log(websiteName.length)
//To change the case of the string there are some methods 
//console.log(websiteName.toLowerCase()) //it will convert it to lower case letter's (abc etc).
//console.log(websiteName.toLocaleLowerCase()) //It works same as toLowerCase
//console.log(websiteName.toUpperCase()) //It will convert it to capital letter's
//console.log(websiteName.toLocaleUpperCase()) //It works same as toUpperCase

//console.log(websiteName.charAt(2)) //It will display 'f' because at index[2] t is present.
//console.log(websiteName.indexOf('f')) //It will display the index of character we provided, so the index of 'f' is 2 as we have seen above.

let newString = websiteName.substring(0, 4);
//console.log(newString)
let anotherString = websiteName.slice(-8,4)//It will work same but here in this method we can give negative values also
//console.log(anotherString);

const myName = "   Younis Khan     "
console.log(myName)
console.log(myName.trim()) //This method will removes the whitespace from start and end.

//Let see some methods regarding URL
let url = "https://www.younis%20portfolio.com";
console.log(url.replace('%20' ,'-')); //It will replace the word/letter we want to
//To check whether url includes a specific word we want to check we use includes()
console.log(url.includes('website')); //This function will return the boolean value (true)/(false)

//Note: For More understanding and want to have full command on string methods
//Read MDN Documentation for strings, It will take around 15 to 25 minutes.
//Visit Here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String