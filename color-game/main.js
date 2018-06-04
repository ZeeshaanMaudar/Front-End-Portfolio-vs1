var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}


function setUpModeButtons(){
	// mode buttons event Listeners
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			// if(this.textContent === "Easy"){
			// 	numSquares = 3;
			// } else{
			// 	numSquares = 6;
			// }
			modeButtons[1].classList.remove("selected");
			// This line of code above, is an alternative to the if statement. It does the exact same thing but is shorter.
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setUpSquares(){
	// square event listeners
	for(var i = 0; i < squares.length; i++){
	// add click listeners to squares
	squares[i].addEventListener("click", function(){
		// grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		// compare color to color picker
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(pickedColor);
				h1.style.backgroundColor = clickedColor;
			} else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});
	}

}

function reset(){
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to march picked Color
	colorDisplay.textContent = pickedColor;
	// change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors"
}

// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
		// if(colors[i]){
		// 	squares[i].style.backgroundColor = colors[i];
		// } else{
		// 	squares[i].style.display = "none";
		// }
// 	}
// 	h1.style.backgroundColor = "steelblue";
// });

// hardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
// 	}

// 	h1.style.backgroundColor = "steelblue";
// });

resetButton.addEventListener("click", function(){
	reset();
});

colorDisplay.textContent = pickedColor;

function changeColors(color){
	// loop through all squares
	for(var i = 0; i < squares.length; i++){
		// change each color to match picked color
		squares[i].style.backgroundColor = color;
	}
	
}

function pickColor(){
	// Math.random()  -  this gives you a random number between 0 and 1 but not including 1 - it is decimals
	// Math.random() * 6 + 1  = this will give a random number between 0 and 6, and the plus 1 will give you a number up to 6.9999 instead of just 5.9999
	// Math.floor(Math.random() * 6 + 1) = this will give the same as the line above, except it will cut out the decimals and give whole numbers between 0 and 6
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = []
	// repeat num times
	for(var i = 0; i < num; i++){
		// get random color and push into arr
		arr.push(randomColor());
	}
	// return that array
	return arr;
}

function randomColor(){
	// pick a "red" from  0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from  0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from  0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g + ", " + b + ")";
}