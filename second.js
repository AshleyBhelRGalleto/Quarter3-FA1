var firstN = prompt("Enter your first name:");
var lastN = prompt("Enter your last name:");
var birthY = prompt("Enter your birth year:");

var currentY = 2025;
var age = currentY - birthY;

document.getElementById("outp").innerHTML = 
	"Hello " + firstN + " " + lastN + "!" +
	" How does it feel to be " + age + " years old?";