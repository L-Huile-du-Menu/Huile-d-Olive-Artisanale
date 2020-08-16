var mover;

function turnRight1() {

	document.getElementById("left1").classList.add("avantoff");
	document.getElementById("left1").classList.remove("avanton");
	document.getElementById("right1").classList.add("apresoff");
	document.getElementById("right1").classList.remove("apreson");
	document.getElementById("right3").classList.add("apresoff");
	document.getElementById("right3").classList.remove("apreson");
	document.getElementById("left3").classList.add("avantoff");
	document.getElementById("left3").classList.remove("avanton");
	document.getElementById("left2").classList.add("avanton");
	document.getElementById("left2").classList.remove("avantoff");
	document.getElementById("right2").classList.add("apreson");
	document.getElementById("right2").classList.remove("apresoff");

	document.getElementById("point1").style.background = "none";
	document.getElementById("point2").style.background = "#c1c1c1";
	document.getElementById("point3").style.background = "none";

	mover = 2;

    if (mover = 2) {
    	document.getElementById("img1").classList.add("imgoff");
    	document.getElementById("img1").classList.remove("igmon");
    	document.getElementById("img2").classList.add("imgon");
    	document.getElementById("img2").classList.remove("imgoff");
    	document.getElementById("img3").classList.add("imgoff");
    	document.getElementById("img3").classList.remove("igmon");
	}
}

function turnRight2() {

	document.getElementById("right1").classList.add("apresoff");
	document.getElementById("right1").classList.remove("apreson");
	document.getElementById("left2").classList.add("avantoff");
	document.getElementById("left2").classList.remove("avanton");
	document.getElementById("right2").classList.add("apresoff");
	document.getElementById("right2").classList.remove("apreson");
	document.getElementById("left3").classList.add("avantoff");
	document.getElementById("left3").classList.remove("avanton");
	document.getElementById("right3").classList.add("apreson");
	document.getElementById("right3").classList.remove("apresoff");
	document.getElementById("left1").classList.add("avanton");
	document.getElementById("left1").classList.remove("avantoff");

	document.getElementById("point1").style.background = "none";
	document.getElementById("point2").style.background = "none";
	document.getElementById("point3").style.background = "#c1c1c1";

	mover = 3;

    if (mover = 3) {
    	document.getElementById("img1").classList.add("imgoff");
    	document.getElementById("img1").classList.remove("igmon");
    	document.getElementById("img2").classList.add("imgoff");
		document.getElementById("img2").classList.remove("igmon");
    	document.getElementById("img3").classList.add("imgon");
    	document.getElementById("img3").classList.remove("imgoff");
	}
}

function turnLeft1() {

	document.getElementById("left1").classList.add("avantoff");
	document.getElementById("left1").classList.remove("avanton");
	document.getElementById("right1").classList.add("apresoff");
	document.getElementById("right1").classList.remove("apreson");
	document.getElementById("right3").classList.add("apresoff");
	document.getElementById("right3").classList.remove("apreson");
	document.getElementById("left3").classList.add("avantoff");
	document.getElementById("left3").classList.remove("avanton");
	document.getElementById("left2").classList.add("avanton");
	document.getElementById("left2").classList.remove("avantoff");
	document.getElementById("right2").classList.add("apreson");
	document.getElementById("right2").classList.remove("apresoff");

	document.getElementById("point1").style.background = "none";
	document.getElementById("point2").style.background = "#c1c1c1";
	document.getElementById("point3").style.background = "none";
	
	mover = 2;

    if (mover = 2) {
    	document.getElementById("img1").classList.add("imgoff");
    	document.getElementById("img1").classList.remove("igmon");
    	document.getElementById("img2").classList.add("imgon");
    	document.getElementById("img2").classList.remove("imgoff");
    	document.getElementById("img3").classList.add("imgoff");
    	document.getElementById("img3").classList.remove("igmon");
	}
}

function turnLeft2() {

	document.getElementById("left1").classList.add("avantoff");
	document.getElementById("left1").classList.remove("avanton");
	document.getElementById("right2").classList.add("apresoff");
	document.getElementById("right2").classList.remove("apreson");
	document.getElementById("left2").classList.add("avantoff");
	document.getElementById("left2").classList.remove("avanton");
	document.getElementById("right3").classList.add("apresoff");
	document.getElementById("right3").classList.remove("apreson");
	document.getElementById("right1").classList.add("apreson");
	document.getElementById("right1").classList.remove("apresoff");
	document.getElementById("left3").classList.add("avanton");
	document.getElementById("left3").classList.remove("avantoff");

	document.getElementById("point1").style.background = "#c1c1c1";
	document.getElementById("point2").style.background = "none";
	document.getElementById("point3").style.background = "none";
	
	mover = 1;

    if (mover = 1) {
    	document.getElementById("img1").classList.add("imgon");
    	document.getElementById("img1").classList.remove("imgoff");
    	document.getElementById("img2").classList.add("imgoff");
    	document.getElementById("img2").classList.remove("igmon");
    	document.getElementById("img3").classList.add("imgoff");
    	document.getElementById("img3").classList.remove("igmon");
	}
}

function openModal() {
	document.getElementById("modal").classList.add("modalon");
	document.getElementById("modal").classList.remove("modaloff");
	document.getElementById("flou").classList.add("flouon");
	document.getElementById("flou").classList.remove("flouoff");
}

function closeModal() {
	document.getElementById("modal").classList.add("modaloff");
	document.getElementById("modal").classList.remove("modalon");
	document.getElementById("flou").classList.add("flouoff");
	document.getElementById("flou").classList.remove("flouon");
}

function openModal2() {
	document.getElementById("modal").classList.add("modaloff");
	document.getElementById("modal").classList.remove("modalon");
	document.getElementById("modal2").classList.add("modalon");
	document.getElementById("modal2").classList.remove("modaloff");
	document.getElementById("flou").classList.add("flouon");
	document.getElementById("flou").classList.remove("flouoff");
}

function closeModal2() {
	document.getElementById("modal2").classList.add("modaloff");
	document.getElementById("modal2").classList.remove("modalon");
	document.getElementById("flou").classList.add("flouoff");
	document.getElementById("flou").classList.remove("flouon");
}
