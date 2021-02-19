// JavaScript Document
var ul = document.createElement("UL");
document.body.appendChild(ul);
for (i=0; i<=19; i++) {
    var li = document.createElement("LI");
    var image = document.createElement("IMG");
    console.log("i is", i)
    image.setAttribute("src", `photos/test (`+(i+1)+`).jpg`);
    image.setAttribute("style", "height:auto;");
	image.setAttribute("alt", "photos");
	image.setAttribute("class", "art");
    li.appendChild(image);
    ul.appendChild(li);
}