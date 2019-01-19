

var a = document.getElementById("canvas1");
var atx = a.getContext("2d");
var b = document.getElementById("canvas2");
var btx = b.getContext("2d");
var c = document.getElementById("canvas3");
var ctx = c.getContext("2d");
var d = document.getElementById("canvas4");
var dtx = d.getContext("2d");
var e = document.getElementById("canvas5");
var etx = e.getContext("2d");

atx.fillStyle = "black";
atx.fillRect(00,00,150,150);
atx.fillStyle = "black";
atx.fillRect(150,150,150,150);

btx.fillStyle = "black";
for(i=0; i<=140; i+=20) {
	btx.fillRect(i,i,300-2*i,300-2*i);
	i+=20;
	btx.clearRect(i,i,300-2*i,300-2*i);
}

ctx.moveTo(0,10);
ctx.lineTo(110,50);
ctx.moveTo(90,50);
ctx.lineTo(210,10);
ctx.moveTo(190,10);
ctx.lineTo(300,50);
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.stroke();

ctx.fillStyle = "rgb(200, 50, 10)";
ctx.fillRect(75,125,150,100);
ctx.strokeStyle = "green";
ctx.strokeRect(50,100,200,150);
ctx.clearRect(125,150,50,50);


