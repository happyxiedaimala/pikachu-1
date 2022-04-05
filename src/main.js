//获取脸
let face = document.querySelector(".face");
//获取鼻子
let nose = document.querySelector(".nose");
//获取嘴巴
let mouth = document.querySelector(".oralDown");
//获取眼睛
let eyes = document.querySelectorAll(".eye");
face.onmouseover = () => {
	face.style.width = "446px";
	face.style.marginLeft = "-223px";
	nose.style.animation = "rock 200ms infinite linear";
	mouth.style.bottom = "0px";
	for (let i = 0; i < eyes.length; i++) {
		eyes[i].style.width = 70 + "px";
		eyes[i].style.height = 70 + "px";
	}
	pikachu.play();
};
face.onmouseout = () => {
	face.style.width = 420 + "px";
	face.style.marginLeft = -210 + "px";
	nose.style.animation = "";
	mouth.style.bottom = "5px";
	for (let i = 0; i < eyes.length; i++) {
		eyes[i].style.width = 64 + "px";
		eyes[i].style.height = 64 + "px";
	}
	pikachu.pause();
};
