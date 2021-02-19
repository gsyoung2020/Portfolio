// JavaScript Document


 
var sea = document.getElementById("sea2see")

sea.addEventListener("click",function(){
	location.href='see2sea/index.html'
})

var photos = document.getElementById("my_photos")

photos.addEventListener("click",function(){
    location.href='photoflex/amazingpj.html'
})

var startButton = document.getElementById("start_button")

startButton.addEventListener("click", function myFunction(){
  var x = document.getElementById("about_me");
  if (x.style.display === "none") {
    x.style.display = "flex";
	startButton.style.backgroundColor = "#1D956F";
	startButton.style.borderStyle = "dotted"
	startButton.style.boxShadow = "inset 2px 2px 2px rgba(255, 255, 255, .4), inset -6px -2px 2px rgba(0, 0, 0, .4)" 
  } else {
    x.style.display = "none";
	startButton.style.backgroundColor = "#5DF080";
	startButton.style.borderStyle = "solid"
	startButton.style.boxShadow = "inset 2px 2px 2px rgba(255, 255, 255, .4), inset -2px -2px 2px rgba(0, 0, 0, .4)"   
  }
})
