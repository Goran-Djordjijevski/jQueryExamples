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

// $("#result").html(result);

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

// DOM Manipulation with .wrap() method
// $("div").wrap("<div class='.container'></div>");
// $("div").append("<h3>add a new parent div container</h3>");

// Add or remove class
$("#btn1").on("click", function() {
    $("h1").addClass("colorClass");
});

$("#btn2").on("click", function() {
    $("h1").removeClass("colorClass");
});

$("#btn3").on("click", function() {
    $("h1").addClass("colorClass italicClass");
});

$("#btn4").on("click", function() {
    $("h1").removeClass("colorClass italicClass");
});

$("#btn5").on("click", function() {
    $("h1").addClass("colorClass italicClass boldClass");
});

$("#btn6").on("click", function() {
    $("h1").removeClass("colorClass italicClass boldClass");
});

$("#btn7").on("click", function() {
    $("h1").toggleClass("colorClass italicClass boldClass");
});

$("input[type='text']").each(function() {
    $(this).focus(function() {
        $(this).toggleClass("textBoxStyle");
    });
});

// jQuery change event
// $("#ddlCity").change(function() {
//     var selectedValue = $(this).val();
//     $("#divResult").html(selectedValue);
// });

// $("input").change(function() {
//     var result = "";
//     if (result == "") {
//         result = $(this).val();
//     }
//     else {
//         result += ", " + $(this).val();
//     }

//     $("#divResult").html(result);
// });

$("img[src='img/help.png']").mouseover(function() {
    $("#" + getDivId(this)).fadeIn(500);
}).mouseout(function() {
    $("#" + getDivId(this)).fadeOut(500);
});

function getDivId(helpIcon) {
    var helpIconId = $(helpIcon).attr("id");
    return helpIconId.replace("img", "div");
}