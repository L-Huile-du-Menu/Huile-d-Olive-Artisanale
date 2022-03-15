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

var splide = new Splide( '.splide' );
splide.mount();