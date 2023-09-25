let score = undefined;

//console.log(typeof score) //Method 1 to check type
//console.log(typeof(score)) //Method 2 to check type

let newScore = Number(score)
console.log(typeof newScore)//Here It will return correct value
console.log(newScore) //Here It will give output of NaN (Not a Numbers)
//for undefined it will convert it to object (NaN)
//for null it will convert it 0

//1 => true; 0 => false
//"" => false
//"abc" => true