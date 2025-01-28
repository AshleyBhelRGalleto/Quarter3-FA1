var cons =confirm("Do you agree to share your personal information with this site?");

if (cons) {
	console.log("Name: " + nickname);
	console.log("Height: " + feet + "'" + inches + "'");
	console.log("Weight: " + weightinLbs + " lbs");
	} else {
		console.log("User does not wish to share his/her information.");