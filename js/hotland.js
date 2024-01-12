function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};




function topFunction() {
document.body.scrollTop = 0; 
document.documentElement.scrollTop = 0; 
}