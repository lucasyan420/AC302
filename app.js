// Declaring all variables
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// Width and height of canvas
var WIDTH = 600;
var HEIGHT = 600;
// position and radius of player
var x = 300;
var y = 300;
var s = 50;
// Player speed in x-y directions
var mx = 0;
var my = 0;

// Positions, size and collision check of circle
var circleX;
var circleS;
var circleS = 50;
var circleCollision = false;

//Variable for the score
var score = 0;

// Import images onto canvas
function drawPacman(){
	var Pacman = new Image();
	Pacman.src = "Pacman.png";
	ctx.drawImage(Pacman, x, y, 50, 50);
}


// Wiping canvas
function clear () {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

// Initialise our animation
function init() {
	// Put circle in random position
	

	// Wait for user to press keyboard 


	// Redraws our canvas every 10ms
	return setInterval(draw, 10);
}

// Repeated draw function
function draw() {
	clear();
	drawPacman();


	// Make player bounce off the walls and go in the opposite direction
	if (x + mx > WIDTH - s || x + mx < 0){
		mx = -mx;
	} else if (y + my > WIDTH - s || y + my < 0) {
		my = -my;
	}

	// Moves our player
	x += mx;  
	y += my;

	// Check for collisions
	

}

//Function to check for collisions


//Function to handle the collision


//Function to handle the keypresses



init();