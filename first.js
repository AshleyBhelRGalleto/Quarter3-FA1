var nn = "Ashley";
var heightInInches = 60;
var weightInKg = 53;

var feet = (heightInInches - (heightInInches % 12)) / 12;
var inches = heightInInches % 12;

var weightInLbs = weightInKg * 2.20;

alert (

		"Name: " + nn + 
		"\nHeight: " + feet + "'" + inches + "'" +
		"\nWeight: " + weightInLbs + "lbs"
		
	);