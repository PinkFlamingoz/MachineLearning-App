let toggleSettingsValue = false;
let toggleSettings = function () {
	let getSideNav = document.getElementById('side-nav');
	let getSideNavContent = document.getElementById('side-nav-content');
	let getSideNavTitle = document.querySelectorAll('.side-nav-content label');
	let getSliderCon = document.querySelectorAll('.sliderContainer');

	if (!toggleSettingsValue) {
		getSideNav.style.width = '333px';
		getSideNavContent.style.visibility = 'visible';
		for (let i = 0; i < getSideNavTitle.length; i++) {
			getSideNavTitle[i].style.opacity = '1';
		}
		for (let i = 0; i < getSliderCon.length; i++) {
			getSliderCon[i].style.opacity = '1';
		}

		toggleSettingsValue = true;
	} else {
		getSideNav.style.width = '50px';
		getSideNavContent.style.visibility = 'hidden';
		for (let i = 0; i < getSideNavTitle.length; i++) {
			getSideNavTitle[i].style.opacity = '0';
		}
		for (let i = 0; i < getSliderCon.length; i++) {
			getSliderCon[i].style.opacity = '0';
		}
		toggleSettingsValue = false;
	}
};

let sLaneVal = document.getElementById('sLane');
let sLane = document.getElementById('SLane');
sliderChange(sLane, sLaneVal);
sLane.oninput = function () {
	sliderChange(sLane, sLaneVal);
};

let widthVal = document.getElementById('width');
let width = document.getElementById('Width');
sliderChange(width, widthVal);
width.oninput = function () {
	sliderChange(width, widthVal);
};

let heightVal = document.getElementById('height');
let height = document.getElementById('Height');
sliderChange(height, heightVal);
height.oninput = function () {
	sliderChange(height, heightVal);
};

let maxSpeedVal = document.getElementById('maxSpeed');
let maxSpeed = document.getElementById('MaxSpeed');
sliderChange(maxSpeed, maxSpeedVal);
maxSpeed.oninput = function () {
	sliderChange(maxSpeed, maxSpeedVal);
};

let accelerationVal = document.getElementById('acceleration');
let acceleration = document.getElementById('Acceleration');
sliderChange(acceleration, accelerationVal);
acceleration.oninput = function () {
	sliderChange(acceleration, accelerationVal);
};

let frictionVal = document.getElementById('friction');
let friction = document.getElementById('Friction');
sliderChange(friction, frictionVal);
friction.oninput = function () {
	sliderChange(friction, frictionVal);
};

let aSensorVal = document.getElementById('aSensor');
let aSensor = document.getElementById('ASensor');
sliderChange(aSensor, aSensorVal);
aSensor.oninput = function () {
	sliderChange(aSensor, aSensorVal);
};

let sLengthVal = document.getElementById('sLength');
let sLength = document.getElementById('SLength');
sliderChange(sLength, sLengthVal);
sLength.oninput = function () {
	sliderChange(sLength, sLengthVal);
};

let sSpreadVal = document.getElementById('sSpread');
let sSpread = document.getElementById('SSpread');
sliderChange(sSpread, sSpreadVal);
sSpread.oninput = function () {
	sliderChange(sSpread, sSpreadVal);
};

let lanesVal = document.getElementById('lanes');
let lanes = document.getElementById('Lanes');
sliderChange(lanes, lanesVal);
lanes.oninput = function () {
	sliderChange(lanes, lanesVal);
};

let a = document.getElementById('a');
let A = document.getElementById('A');
sliderChange(A, a);
A.oninput = function () {
	sliderChange(A, a);
};

let b = document.getElementById('b');
let B = document.getElementById('B');
sliderChange(B, b);
B.oninput = function () {
	sliderChange(B, b);
};

let c = document.getElementById('c');
let C = document.getElementById('C');
sliderChange(C, c);
C.oninput = function () {
	sliderChange(C, c);
};

let d = document.getElementById('d');
let D = document.getElementById('D');
sliderChange(D, d);
D.oninput = function () {
	sliderChange(D, d);
};

let e = document.getElementById('e');
let E = document.getElementById('E');
sliderChange(E, e);
E.oninput = function () {
	sliderChange(E, e);
};

let f = document.getElementById('f');
let F = document.getElementById('F');
sliderChange(F, f);
F.oninput = function () {
	sliderChange(F, f);
};

let g = document.getElementById('g');
let G = document.getElementById('G');
sliderChange(G, g);
G.oninput = function () {
	sliderChange(G, g);
};

let h = document.getElementById('h');
let H = document.getElementById('H');
sliderChange(H, h);
H.oninput = function () {
	sliderChange(H, h);
};

let twidthVal = document.getElementById('twidth');
let Twidth = document.getElementById('TWidth');
sliderChange(Twidth, twidthVal);
Twidth.oninput = function () {
	sliderChange(Twidth, twidthVal);
};

let theightVal = document.getElementById('theight');
let Theight = document.getElementById('THeight');
sliderChange(Theight, theightVal);
Theight.oninput = function () {
	sliderChange(Theight, theightVal);
};

let tmaxSpeedVal = document.getElementById('tmaxSpeed');
let TmaxSpeed = document.getElementById('TMaxSpeed');
sliderChange(TmaxSpeed, tmaxSpeedVal);
TmaxSpeed.oninput = function () {
	sliderChange(TmaxSpeed, tmaxSpeedVal);
};

let taccelerationVal = document.getElementById('tacceleration');
let Tacceleration = document.getElementById('TAcceleration');
sliderChange(Tacceleration, taccelerationVal);
Tacceleration.oninput = function () {
	sliderChange(Tacceleration, taccelerationVal);
};

let tfrictionVal = document.getElementById('tfriction');
let Tfriction = document.getElementById('TFriction');
sliderChange(Tfriction, tfrictionVal);
Tfriction.oninput = function () {
	sliderChange(Tfriction, tfrictionVal);
};

let ta = document.getElementById('ta');
let TA = document.getElementById('TA');
sliderChange(TA, ta);
TA.oninput = function () {
	sliderChange(TA, ta);
};

let tb = document.getElementById('tb');
let TB = document.getElementById('TB');
sliderChange(TB, tb);
TB.oninput = function () {
	sliderChange(TB, tb);
};

let tc = document.getElementById('tc');
let TC = document.getElementById('TC');
sliderChange(TC, tc);
TC.oninput = function () {
	sliderChange(TC, tc);
};

let td = document.getElementById('td');
let TD = document.getElementById('TD');
sliderChange(TD, td);
TD.oninput = function () {
	sliderChange(TD, td);
};

let te = document.getElementById('te');
let TE = document.getElementById('TE');
sliderChange(TE, te);
TE.oninput = function () {
	sliderChange(TE, te);
};

let tf = document.getElementById('tf');
let TF = document.getElementById('TF');
sliderChange(TF, tf);
TF.oninput = function () {
	sliderChange(TF, tf);
};

let tg = document.getElementById('tg');
let TG = document.getElementById('TG');
sliderChange(TG, tg);
TG.oninput = function () {
	sliderChange(TG, tg);
};

let th = document.getElementById('th');
let TH = document.getElementById('TH');
sliderChange(TH, th);
TH.oninput = function () {
	sliderChange(TH, th);
};

let Snode = document.getElementById('2nodes');
let SNode = document.getElementById('2Nodes');
sliderChange(SNode, Snode);
SNode.oninput = function () {
	sliderChange(SNode, Snode);
};

let Tnode = document.getElementById('3nodes');
let TNode = document.getElementById('3Nodes');
sliderChange(TNode, Tnode);
TNode.oninput = function () {
	sliderChange(TNode, Tnode);
};

let nforCars = document.getElementById('nforCars');
let NforCars = document.getElementById('NforCars');
sliderChange(NforCars, nforCars);
NforCars.oninput = function () {
	sliderChange(NforCars, nforCars);
};

let nforTraffic = document.getElementById('nforTraffic');
let NforTraffic = document.getElementById('NforTraffic');
sliderChange(NforTraffic, nforTraffic);
NforTraffic.oninput = function () {
	sliderChange(NforTraffic, nforTraffic);
};

let mutate = document.getElementById('mutate');
let Mutate = document.getElementById('Mutate');
sliderChange(Mutate, mutate);
Mutate.oninput = function () {
	sliderChange(Mutate, mutate);
};

function sliderChange(htmlElement, htmlElementVal) {
	htmlElementVal.innerHTML = htmlElement.value;
	let x =
		((htmlElement.value - htmlElement.min) /
			(htmlElement.max - htmlElement.min)) *
		100;
	var color =
		'linear-gradient(90deg,rgb(117, 252, 117)' +
		x +
		'%,rgb(214, 214, 214)' +
		x +
		'%)';
	htmlElement.style.background = color;
}
