console.log("test")

// Define the button
var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("nav--popUp");
var closeMenu = document.getElementById("nav--popUp-close");
var burger = document.getElementById("burger-bar");

// When the menu button is clicked
menuButton.addEventListener("click", function() {
	menu.style.opacity = "100";
	menu.style.pointerEvents = "all";
	burger.style.opacity = "0";
});

// When the X button is clicked
closeMenu.addEventListener("click", function() {
	menu.style.opacity = "0";
	menu.style.pointerEvents = "none";
	burger.style.opacity = "100";
});

//
// var elem = document.querySelector('.heroImg__section');
// var flkty = new Flickity( elem, {
//   // options
//   cellAlign: 'left',
//   contain: true
// });