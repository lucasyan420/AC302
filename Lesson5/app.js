var ctx = document.getElementById("Canvas1").getContext("2d");

//Supposed to be constant to keep track of circle
const WIDTH = 800;
const HEIGHT = 500;
//Storing variable
//Location of circle
var x, y;
//How fast the circle moves;
var mx, my;

//Define everything here;
function init(){
	x = 150;
	y = 150;
	mx = 5;
	my = 5;
	return setInterval(draw, 20);
}

//Clears the canvas
function clear(){
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

//Move, draw circle
function circle(x, y){
	ctx.beginPath();
	ctx.arc(x, y, 50, 0, 6.28);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = "red";
	ctx.fill();
}
//Putting everything together
function draw(){
	clear();
	circle(x, y);
	//check if cicrcle is inside canvas

	if(x+mx<0 || x+mx>WIDTH){
		if(mx>0){
			mx=Math.floor(Math.random()*7) + 1;
			console.log("in positive");
		}
		else if(mx<0){
			mx=Math.floor(Math.random()*7)*-1 -1;
			console.log("in negative");
		}
		mx=-mx;
	}
	if(y+my<0 || y+my>HEIGHT){
		if(my>0){
			my=Math.floor(Math.random()*7) + 1;
		}
		else if(my<0){
			my=Math.floor(Math.random()*7)*-1 - 1;
		}
		my=-my;
	}




	


	
	//update x and y location with mx, my
	
	x+=mx;
	y+=my;


}

//code starts
init();