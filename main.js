// button function
let clicks = 0;

// updates the value for the number of times the button was clicked
function buttonClicked() {
	

	console.log("button was clicked!");

	clicks ++;
	let buttonClickTracker = "Number of times button clicked: " + clicks;

	// select the element 
	// locate an element in the html document via its ID
	let buttonDiv = document.getElementById("button-div");

	buttonDiv.innerHTML = buttonClickTracker;
}