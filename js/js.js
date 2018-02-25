var num=4;
function ctbgl(){
	num--;
	if(num<2){num=8;}
document.getElementsByClassName("img").item(0).style.backgroundImage="url(img/"+num+".jpg)";

	}
	function ctbgr(){
		num++;
		if(num>=8){num=2;}
document.getElementsByClassName("img").item(0).style.backgroundImage="url(img/"+num+".jpg)";


	}
	

window.onload=(function(){
dely();
	});
function dely(){document.getElementsByClassName("img").item(0).style.backgroundImage="url(img/"+ 	Math.ceil(Math.random()*9)+".jpg)";	}
window.setInterval("dely()",4800);
var jsq=0;
function color(){
	document.body.style.backgroundColor="rgba("+Math.ceil(Math.random()*255)+","+Math.ceil(Math.random()*255)+","+Math.ceil(Math.random()*255)+","+Math.random()+")";
	document.getElementsByClassName("rightbox").item(0).style.backgroundColor="rgba("+Math.ceil(Math.random()*255)+","+Math.ceil(Math.random()*255)+","+Math.ceil(Math.random()*255)+","+Math.random()+")";
	
	jsq++;
	document.getElementsByClassName("rol").item(0).innerHTML="OPEN:"+-(jsq-3)+""
	if(jsq==3){
		window.location="detail.html";
		
		}
	}
	function music(obj){
		var name=obj;
		document.getElementById("music").src="music/"+name+".mp3";
	var m=document.getElementById("music");
	m.play();
		}
		function topop(){
				var topop=document.getElementById("topop").innerHTML;
				if(topop=="展开"){
			var topop=document.getElementById("topop").innerHTML="关闭";
			document.getElementById("pro").style.top="0px";
			document.getElementById("phon").style.top="0px";
						document.getElementById("phon").style.left="0";
			}
			else{
				document.getElementById("topop").innerHTML="展开";
				document.getElementById("pro").style.top="-140px";
				document.getElementById("phon").style.top="-140px";
				
				}
			}
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
document.getElementsByClassName("login").item(0).style.width="600px";
		}
		
		}