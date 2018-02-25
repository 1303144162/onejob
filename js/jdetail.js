// JavaScript Document
//document.getElementById("put").innerHTML="<script type='text///javascript' src='js///mh.js'><//	/script>";
var bg=document.getElementsByClassName("tier");
//document.body.style.backgroundColor="rgba(250,120,60,0.5)";

for(var i=0;i<bg.length;i++){
	bg.item(i).style.backgroundColor="rgba("+Math.ceil(Math.random()*255)+","+Math.ceil(Math.random()*255)+","+Math.ceil(Math.random()*255)+","+Math.random()+")";
	
	}
function free(){
	
	for(var i=0;i<bg.length;i++){
	bg.item(i).style.backgroundColor="rgba("+Math.ceil(Math.random()*255)+","+Math.ceil(Math.random()*255)+","+Math.ceil(Math.random()*255)+","+Math.random()+")";
	
	}
	}
	function listm(obj){
		document.getElementById("y").style.display="none";
		document.getElementById("h").style.display="none";
		document.getElementById("c").style.display="none";
		document.getElementById(obj).style.display="block";
	}
	function musicplay(obj,p1){
		
		document.getElementById("music").src="music/detail/"+obj+".mp3";
	
		document.getElementById("musicname").innerText=p1.innerHTML;
		}
		
		var num=1;
function ctbgl(){
	num--;
	if(num<1){num=2;}
document.getElementsByClassName("img").item(0).style.backgroundImage="url(img/buyimg"+num+".jpg)";

	}
	function ctbgr(){
		num++;
		if(num>=3){num=1;}
document.getElementsByClassName("img").item(0).style.backgroundImage="url(img/buyimg"+num+".jpg)";


	}
	

window.onload=(function(){
dely();
	});
function dely(){document.getElementsByClassName("img").item(0).style.backgroundImage="url(img/buyimg"+ 	Math.ceil(Math.random()*2)+".jpg)";	}
window.setInterval("dely()",4800);





function hiddent(){
	document.getElementsByClassName("login").item(0).style.left="-20%";
	document.getElementsByClassName("login").item(0).style.width="0px";
	}
function login(){
	

	document.getElementsByClassName("login").item(0).style.left="20%";
	setTimeout("dely('1')",1000);
	
	}
	function dely(obj){
		if(obj==1){
document.getElementsByClassName("login").item(0).style.width="600px";}
}
