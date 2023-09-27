let myDate = new Date();

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString());
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toUTCString())

//let myCreatedDate = new Date(2023,5,14)
//let myCreatedDate = new Date(2023,5,14,5,3)
//let myCreatedDate = new Date("2023-01-14")//yy-mm-dd
let myCreatedDate = new Date("01-14-2023")//mm-dd-yy
//console.log(myCreatedDate.toLocaleString())

//TimeStamp in JS (Used in Quize's, Poles)
let myTimeStamp = Date.now();
//console.log(myTimeStamp)

console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000));