var c= document.getElementById("canvas");
var ctx = c.getContext("2d");

var IronMan = new Image();
IronMan.src = "IronMan.jpg";

IronMan.onload = function (){
	ctx.drawImage(IronMan, 50, 50, 200, 200);
}

var Thor = new Image();
Thor.src = "Thor.jpg";

Thor.onload = function (){
	ctx.drawImage(Thor, 1000, 100, 200, 200);
}

var Captain = new Image();
Captain.src = "Captain.jpg";

Captain.onload = function (){
	ctx.drawImage(Captain, 550, 300, 200, 200);
}

