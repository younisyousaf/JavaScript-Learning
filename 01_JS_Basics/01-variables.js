/* JavaScript is a High Level Language.
JavaScript is a Light Weight Language.
JavaScript is a Interpreted Programming Language.
OOP's (Object Oriented Programming) is also supported by the JavaScript.

    1. As the function the HTML is to render the Structure of the Web Page/Document, Creating
    new Web Pages and tells the browser how to display them. 
    2. The function/purpose of the CSS (Cascading Style Sheet) is to add the style, 
    look and feel the HTML tags. e.g., color, width, height, padding, margin, size etc.
    3. Similarly the purpose of JavaScript is to add the functionality to the Web Pages, and
    those web pages will behave dynamically (performs some specific functionality). We can say
    that the content will change as user interact with that website. There are Thousands of the fucntions that we can add to the websites, but the core purpose is adding functionality.

JavaScript is Case Sensitive e.g., ('c' and 'C' are not equal but they are different characters).

We Can write JavaScript Code:
    i. Internal JavaScript
        -> We write JavaScript code inside the HTMl Document, inside <body> tag, but we will start writing JavaScript code where our HTML code will end.
        by using <script> JS Code Goes here </script>
    ii. External JavaScript
        -> we have to make a seperate file with ".js" extension and we will write our code. Also, we have to link our js file with html file.
        */
        // JavaScript variables are containers for storing the data values.
        // Creating a variable in JavaScript is called "delcaring" a variable.
        //     e.g., 
        //         var a = 10;
        //         let accountId = 12892;
        //         const PI = 3.14;
        // All JavaScript variables must be identified with unique names, these 
        // unique names are called identifiers.
        
        // -> Prefer not to use var, because of issue in block scope and functional scope


const accountId = 122032;
let accountEmail = "helloworld@gmail.com";
var accountPassword = "12345";
accountCity = "Mansehra";
let accountState;

// accountId = 23;

console.log(accountId);

//Console Table Method
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])