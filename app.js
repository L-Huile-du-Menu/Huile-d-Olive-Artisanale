var slide = 1;
var duree = 4000;

if(slide == 1){
	setTimeout(toSlide2, duree);
}

function toSlide1(){
	document.getElementById("slider_c_1").style.left = "0%";
	document.getElementById("slider_c_2").style.left = "100%";
	document.getElementById("circle1").style.backgroundColor = "#121212";
	document.getElementById("circle2").style.backgroundColor = "unset";
	setTimeout(toSlide2, duree);
}

function toSlide2(){
	document.getElementById("slider_c_1").style.left = "-100%";
	document.getElementById("slider_c_2").style.left = "0%";
	document.getElementById("circle1").style.backgroundColor = "unset";
	document.getElementById("circle2").style.backgroundColor = "#121212";
	setTimeout(toSlide1, duree);
}


function sagesse(){
	document.querySelector(".b1").style.backgroundColor = "#ffc65c";
	document.querySelector(".b2").style.backgroundColor = "#121212";
	document.querySelector(".b3").style.backgroundColor = "#121212";

	document.querySelector(".b1").style.color = "#121212";
	document.querySelector(".b2").style.color = "#ffc65c";
	document.querySelector(".b3").style.color = "#ffc65c";

	document.querySelector(".avantage2").style.color = "#484848";
	document.querySelector(".avantage3").style.color = "#484848";
	document.querySelector(".avantage4").style.color = "#484848";

	document.querySelector(".prix_forfait").innerHTML = "50€/an";
}

function force(){
	document.querySelector(".b1").style.backgroundColor = "#121212";
	document.querySelector(".b2").style.backgroundColor = "#ffc65c";
	document.querySelector(".b3").style.backgroundColor = "#121212";

	document.querySelector(".b1").style.color = "#ffc65c";
	document.querySelector(".b2").style.color = "#121212";
	document.querySelector(".b3").style.color = "#ffc65c";

	document.querySelector(".avantage2").style.color = "#c1c1c1";
	document.querySelector(".avantage3").style.color = "#c1c1c1";
	document.querySelector(".avantage4").style.color = "#484848";

	document.querySelector(".prix_forfait").innerHTML = "80€/an";
}

function victoire(){
	document.querySelector(".b1").style.backgroundColor = "#121212";
	document.querySelector(".b2").style.backgroundColor = "#121212";
	document.querySelector(".b3").style.backgroundColor = "#ffc65c";

	document.querySelector(".b1").style.color = "#ffc65c";
	document.querySelector(".b2").style.color = "#ffc65c";
	document.querySelector(".b3").style.color = "#121212";

	document.querySelector(".avantage2").style.color = "#c1c1c1";
	document.querySelector(".avantage3").style.color = "#c1c1c1";
	document.querySelector(".avantage4").style.color = "#c1c1c1";

	document.querySelector(".prix_forfait").innerHTML = "120€/an";
}
