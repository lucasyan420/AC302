var c=document.getElementById("canvas1");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.arc(250, 250, 50, 0, 2*Math.PI);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "cyan";
ctx.fill();

var c1=document.getElementById("canvas2");
var c1tx = c1.getContext("2d");

c1tx.beginPath();
c1tx.moveTo(100,50);
c1tx.lineTo(400,200);
c1tx.lineTo(100,350);
c1tx.closePath();
c1tx.stroke();
c1tx.fillStyle = "green";
c1tx.fill();

var c2=document.getElementById("canvas3");
var c2tx = c2.getContext("2d");

c2tx.beginPath();
c2tx.moveTo(200,50);
c2tx.lineTo(50,200);
c2tx.lineTo(200,400);
c2tx.lineTo(350,200);
c2tx.closePath();
c2tx.stroke();
c2tx.fillStyle = "red";
c2tx.fill();

var c3=document.getElementById("canvas4");
var c3tx = c3.getContext("2d");

c3tx.beginPath();
c3tx.moveTo(0,0);
c3tx.lineTo(0,500);
c3tx.lineTo(250,250);
c3tx.closePath();
c3tx.stroke();
c3tx.fillStyle = "blue";
c3tx.fill();

c3tx.beginPath();
c3tx.moveTo(500,0);
c3tx.lineTo(500,500);
c3tx.lineTo(250,250);
c3tx.closePath();
c3tx.stroke();
c3tx.fillStyle = "blue";
c3tx.fill();

var c4=document.getElementById("canvas5");
var c4tx = c4.getContext("2d");

c4tx.beginPath();
c4tx.moveTo(0,0);
c4tx.lineTo(0,250);
c4tx.lineTo(250,250);
c4tx.closePath();
c4tx.stroke();
c4tx.fillStyle = "brown";
c4tx.fill();

c4tx.beginPath();
c4tx.moveTo(250,0);
c4tx.lineTo(250,250);
c4tx.lineTo(500,0);
c4tx.closePath();
c4tx.stroke();
c4tx.fillStyle = "brown";
c4tx.fill();

c4tx.beginPath();
c4tx.moveTo(0,500);
c4tx.lineTo(250,500);
c4tx.lineTo(250,250);
c4tx.closePath();
c4tx.stroke();
c4tx.fillStyle = "brown";
c4tx.fill();

c4tx.beginPath();
c4tx.moveTo(500,500);
c4tx.lineTo(500,250);
c4tx.lineTo(250,250);
c4tx.closePath();
c4tx.stroke();
c4tx.fillStyle = "brown";
c4tx.fill();


var c5=document.getElementById("canvas6");
var c5tx = c5.getContext("2d");

c5tx.beginPath();
c5tx.moveTo(250,100);
c5tx.lineTo(350,400);
c5tx.arc(250, 400, 100, 0, 3.14);
c5tx.closePath();
c5tx.stroke();
c5tx.fillStyle = "cyan";
c5tx.fill();