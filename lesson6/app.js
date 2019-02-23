// Declaring all variables
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// Width and height of canvas
var WIDTH = 1000;
var HEIGHT = 600;
// position and radius of player
var x = 300;
var y = 300;
var s = 80;
// Player speed in x-y directions
var mx = 0;
var my = 0;

// Positions, size and collision check of circle
var circleX;
var circleY;
var circleS;
var circleS = 50;
var circleCollision = false;

//Variable for the score
var score = 0;

//cherry variables
var cherryX;
var cherryY;
var cherryS;
var cherryS = 50;
var cherryCollision = false;

var ghostX;
var ghostY;
var ghostS;
var ghostS = 80;
var ghostCollision = false;

// Import images onto canvas
function drawPacman(){
	var Pacman = new Image();
	Pacman.src = "Pacman.png";
	ctx.drawImage(Pacman, x, y, 100, 100);
}

function drawCircle(){
	var Circle = new Image();
	Circle.src = "Circle.jpg";
	ctx.drawImage(Circle, circleX, circleY, 50, 50);
}

function drawCherry(){
	var Cherry = new Image();
	Cherry.src = "cherry.png";
	ctx.drawImage(Cherry, cherryX, cherryY, 25, 25);
}

function drawGhost(){
	var Ghost = new Image();
	Ghost.src = "ghost.png";
	ctx.drawImage(Ghost, ghostX, ghostY, 80, 80);
}

// Wiping canvas
function clear () {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

// Initialise our animation
function init() {
	// Put circle in random position
	circleX = Math.floor(Math.random() * (WIDTH - circleS));
	circleY = Math.floor(Math.random() * (HEIGHT - circleS));
	cherryX = Math.floor(Math.random() * (WIDTH - cherryS));
	cherryY = Math.floor(Math.random() * (HEIGHT - circleS));

	// Wait for user to press keyboard 
	window.onkeydown = keydownControl;

	// Redraws our canvas every 10ms
	return setInterval(draw, 10);
}

function keydownControl(e){
	if(e.keyCode==37) {
		mx = -4;
		my = 0;
	} 
	else if(e.keyCode == 39) {
		mx = 4;
		my = 0;
	}
	else if(e.keyCode == 38) {
		mx = 0;
		my = -4;
	}
	else if(e.keyCode == 40) {
		mx = 0;
		my = 4;
	}
}

function followPacman(){
	if(ghostX < x){
		ghostX += 1;
	}
	else if(ghostX > x){
		ghostX -= 1;
	}
	else if(ghostY < y){
		ghostY += 1;
	}
	else if(ghostY > Y){
		ghostY -= 1;
	}
}
}
}

// Repeated draw function
function draw() {
	clear();
	drawPacman();
	drawCircle();
	drawCherry();


	// Make player bounce off the walls and go in the opposite direction
	if (x + mx > WIDTH - s || x + mx < 0){
		mx = -mx;
	} else if (y + my > HEIGHT - s || y + my < 0) {
		my = -my;
	}

	// Moves our player
	x += mx;  
	y += my;

	// Check for collisions
	collisionCheck();
	collisionHandle();
	collisionCheck2();
	collisionHandle2();


}

//Function to check for collisions
function collisionCheck() {
	if( (x+s >= circleX) && (x <= circleX + circleS) &&
		(y+s >= circleY) && (y <= circleY + circleS)){
		circleCollision = true;
	} else {
		circleCollision = false;
	}
}

function collisionCheck2() {
	if( (x+s >= cherryX) && (x <= cherryX + cherryS) &&
		(y+s >= cherryY) && (y <= cherryY + cherryS)){
		cherryCollision = true;
	} else {
		cherryCollision = false;
	}
}

//Function to handle the collision
function collisionHandle(){
	if (circleCollision == true){
		score++;
		circleX = Math.floor(Math.random() * (WIDTH - circleS));
		circleY = Math.floor(Math.random() * (HEIGHT - circleS));
		document.getElementById("score").innerHTML = score;
	}
 }

function collisionHandle2(){
	if (cherryCollision == true){
		score+= 5;
		cherryX = Math.floor(Math.random() * (WIDTH - cherryS));
		cherryY = Math.floor(Math.random() * (HEIGHT - cherryS));
		document.getElementById("score").innerHTML = score;
	}
 }

//Function to handle the keypresses



init();