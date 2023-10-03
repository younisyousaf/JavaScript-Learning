//Object De-Structuring

const course = {
    "courseName" : "JavaScript",
    "coursePrice" : "999",
    "courseInstructor" : "Hitesh Choudary"
}

//course.courseInstructor //You can use this method but most people do not prefer this

const {courseInstructor: instructor} = course //Object De-Structuring
console.log(courseInstructor) //This is popular way to access the objects

//JSON-API Intro 
//JSON (JavaScript Object Notation)
// {
//     "name" : "younis",
//     "companyName" : "CodeMatics",
//     "location" : "Abbottabad",
// }