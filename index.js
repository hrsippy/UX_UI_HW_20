console.log ("I am Hannah");

var btn=document.getElementById("emailBtn")
var mdl=document.getElementById("thank-you")
var cls=document.getElementsByClassName ("close") [0]
btn.onclick= function () {
    mdl.style.display="block";
}
cls.onclick=function(){
    mdl.style.display="none";
}
