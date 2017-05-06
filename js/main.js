// Method chaining in jquery
$("li").css("color", "blue")
       .slideUp(1000)
       .slideDown(1000)
       .attr("title", "My Title");

// What is JSON
var employeesJSON = [{
    "firstName": "Goran",
    "lastName": "Djordjijevski",
    "gender": "Male",
    "years": 29
},
{
    "firstName": "Sara",
    "lastName": "Jovanovic",
    "gender": "Female",
    "years": 25 
}];

var result = "";
result += "First Name = " + employeesJSON[0].firstName + "<br>";
result += "Last Name = " + employeesJSON[0].lastName + "<br>";
result += "Gender = " + employeesJSON[0].gender + "<br>";
result += "Years = " + employeesJSON[0].years + "<br>";

result += "First Name = " + employeesJSON[1].firstName + "<br>";
result += "Last Name = " + employeesJSON[1].lastName + "<br>";
result += "Gender = " + employeesJSON[1].gender + "<br>";
result += "Years = " + employeesJSON[1].years + "<br>"

$("#result").html(result);

// DOM Manipulation methods
// var returnAttr = $("div").attr("title");
// console.log(returnAttr);

// $("div").each(function() {
//     console.log($(this).attr("title"));
// });

// DOM Manipulation methods with JSON object
var config = {
    "title": "New DIV Title",
    "style": "border: 1px solid red",
    "name": "MY DIV"
};

