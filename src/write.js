let string = `
/*这是一段画皮卡丘的代码，首先我们来清除浏览器的默认样式*/
* {
	box-sizing: border-box;
	margin: 0px;
	padding: 0px;
}
*:before,
*:after {
	box-sizing: border-box;
}
/*首先我们要准备皮卡丘的皮肤*/
.skin {
	position: relative;
	height: 100vh;
	background-color: RGB(255, 230, 0);
}
/*然后画皮卡丘的眼睛*/
.eyes {
	position: absolute;
	width: 300px;
	top: 60px;
	left: 50%;
	margin-left: -150px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.eye {
	border: 3px solid black;
	width: 64px;
	height: 64px;
	border-radius: 50%;
	background-color: RGB(46, 46, 46);
	transition: 1s;
}
/*给眼睛加一点小眼神 ~ */
.eye:before {
	border: 3px solid black;
	content: "";
	display: block;
	width: 28px;
	height: 28px;
	border-radius: 50%;
	background-color: white;
	position: relative;
	right: -10px;
}
/*接下来，我们来画皮卡丘的鼻子*/
.nose {
	border: 14px solid black;
	position: absolute;
	left: 50%;
	margin-left: -14px;
	top: 118px;
	border-color: black transparent transparent transparent;
	border-radius: 50%;
	z-index: 2;
}
@keyframes rock {
	0% {
		transform: rotate(0deg);
	}
	33% {
		transform: rotate(10deg);
	}
	66% {
		transform: rotate(-10deg);
	}
	100% {
		transform: rotate(0deg);
	}
}
/*接下来，我们来画皮卡丘的嘴巴*/
.mouth {
	width: 200px;
	height: 200px;
	position: absolute;
	left: 50%;
	margin-left: -100px;
	top: 150px;
}
/*首先来画上嘴唇*/
.lips {
	border: 3px solid black;
	position: absolute;
	width: 90px;
	height: 30px;
	left: 50%;
	background-color: RGB(255, 230, 0);
	z-index: 1;
	top: -15px;
}
.lips.left {
	border-bottom-left-radius: 61px 28px;
	transform: rotate(-17deg);
	margin-left: -90px;
	border-color: transparent transparent black black;
}
.lips.right {
	border-bottom-right-radius: 61px 28px;
	transform: rotate(17deg);
	margin-left: 1px;
	border-color: transparent black black transparent;
}
/*然后画画下嘴唇*/
.lowerLip {
	position: absolute;
	width: 100%;
	height: 166px;
	overflow: hidden;
}
.oralDown {
	border: 3px solid black;
	width: 160px;
	height: 1000px;
	position: absolute;
	left: 50%;
	margin-left: -80px;
	bottom: 5px;
	border-radius: 80px/320px;
	background-color: RGB(155, 0, 10);
	overflow: hidden;
	transition: 1s;
}
.oralDown:hover {
	transition: 1s;
}
.oralUp {
	background-color: RGB(255, 72, 95);
	width: 240px;
	height: 300px;
	position: absolute;
	left: 50%;
	margin-left: -120px;
	bottom: -170px;
	border-radius: 50%;
}
/*最后我们画两个红彤彤的脸颊！*/
.face {
	position: absolute;
	width: 420px;
	left: 50%;
	margin-left: -210px;
	top: 200px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	transition: 1s;
}
.cheek {
	border: 3px solid black;
	width: 80px;
	height: 80px;
	background-color: red;
	border-radius: 50%;
}

.cheek.left > img {
	transform: rotateY(-180deg);
	transform-origin: 25% 0;
}
/*呼，终于画好了，这只皮卡丘就送给你吧 ~
* 用鼠标摸摸它可爱的小脸
* 它会开心地和你说话哦！
*/
`;
let speed = 50;
let n = 0;
write = () => {
	n++;
	if (n > string.length) {
		imgLeft.src = "./images/lightning.gif";
		imgRight.src = "./images/lightning.gif";
		window.clearInterval(time);
	} else {
		content.innerText = string.substring(0, n);
		style.innerHTML = string.substring(0, n);
		content.scrollTop = 99999;
	}
};
let time = setInterval(write, speed);
const play = () => {
	return setInterval(write, speed);
};
const pause = () => {
	window.clearInterval(time);
};

btnPlay.onclick = () => {
	pause();
	time = play();
};
btnPause.onclick = () => {
	pause();
};
playSlow.onclick = () => {
	pause();
	speed = 200;
	time = play();
};
playNormal.onclick = () => {
	pause();
	speed = 50;
	time = play();
};
playFast.onclick = () => {
	pause();
	speed = 0;
	time = play();
};
