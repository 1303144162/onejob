// JavaScript Document
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