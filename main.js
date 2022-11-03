let geniousCar = [];
function saveNetwork() {
	localStorage.setItem('BESTNETWORK', JSON.stringify(geniousCar.Inteligencia));
	alert('Brain Saved!' + '\n' + JSON.stringify(geniousCar.Inteligencia));
}

function deleteNetwork() {
	localStorage.removeItem('BESTNETWORK');
	alert('Brain Deleted!');
}

function saveSettings() {
	localStorage.setItem('1', JSON.stringify(getStartLane));
	localStorage.setItem('2', JSON.stringify(getWidth));
	localStorage.setItem('3', JSON.stringify(getHeight));
	localStorage.setItem('4', JSON.stringify(getMaxSpeed));
	localStorage.setItem('5', JSON.stringify(getAcceleration));
	localStorage.setItem('6', JSON.stringify(getFriction));
	localStorage.setItem('7', JSON.stringify(getASensor));
	localStorage.setItem('8', JSON.stringify(getSLength));
	localStorage.setItem('9', JSON.stringify(getSSpread));
	localStorage.setItem('10', JSON.stringify(Aset));
	localStorage.setItem('11', JSON.stringify(Bset));
	localStorage.setItem('12', JSON.stringify(Cset));
	localStorage.setItem('13', JSON.stringify(Dset));
	localStorage.setItem('14', JSON.stringify(Eset));
	localStorage.setItem('15', JSON.stringify(Fset));
	localStorage.setItem('16', JSON.stringify(Gset));
	localStorage.setItem('17', JSON.stringify(Hset));
	localStorage.setItem('18', JSON.stringify(getLanes));
	localStorage.setItem('19', JSON.stringify(oneWay.checked));
	localStorage.setItem('20', JSON.stringify(twoWay.checked));
	localStorage.setItem('21', JSON.stringify(wrongWay.checked));
	localStorage.setItem('22', JSON.stringify(you.checked));
	localStorage.setItem('23', JSON.stringify(AI.checked));
	localStorage.setItem('24', JSON.stringify(getWidthT));
	localStorage.setItem('25', JSON.stringify(getHeightT));
	localStorage.setItem('26', JSON.stringify(getMaxSpeedT));
	localStorage.setItem('27', JSON.stringify(getAccelerationT));
	localStorage.setItem('28', JSON.stringify(getFrictionT));
	localStorage.setItem('29', JSON.stringify(NforTrafficSet));
	localStorage.setItem('30', JSON.stringify(Random.checked));
	localStorage.setItem('31', JSON.stringify(Predetermine.checked));
	localStorage.setItem('32', JSON.stringify(AT));
	localStorage.setItem('33', JSON.stringify(BT));
	localStorage.setItem('34', JSON.stringify(CT));
	localStorage.setItem('35', JSON.stringify(DT));
	localStorage.setItem('36', JSON.stringify(ET));
	localStorage.setItem('37', JSON.stringify(FT));
	localStorage.setItem('38', JSON.stringify(GT));
	localStorage.setItem('39', JSON.stringify(HT));
	localStorage.setItem('40', JSON.stringify(SNodeSet));
	localStorage.setItem('41', JSON.stringify(TNodeSet));
	localStorage.setItem('42', JSON.stringify(NforCarsSet));
	localStorage.setItem('43', JSON.stringify(MutateSet));
	localStorage.setItem('44', JSON.stringify(Identity.checked));
	localStorage.setItem('45', JSON.stringify(Inverse.checked));
	localStorage.setItem('46', JSON.stringify(BinaryStep.checked));
	localStorage.setItem('47', JSON.stringify(Bipolar.checked));
	localStorage.setItem('48', JSON.stringify(Tanh.checked));
	localStorage.setItem('49', JSON.stringify(HardTanh.checked));
	localStorage.setItem('50', JSON.stringify(ArcTan.checked));
	localStorage.setItem('51', JSON.stringify(SoftSign.checked));
	localStorage.setItem('52', JSON.stringify(Erf.checked));
	localStorage.setItem('53', JSON.stringify(Sinc.checked));
	localStorage.setItem('54', JSON.stringify(Sinusoid.checked));
	localStorage.setItem('55', JSON.stringify(Sigmoid.checked));
	localStorage.setItem('56', JSON.stringify(BipolarSigmoid.checked));
	localStorage.setItem('57', JSON.stringify(Gaussian.checked));
	localStorage.setItem('58', JSON.stringify(ISRUaf.checked));
	localStorage.setItem('59', JSON.stringify(ReLUaf.checked));
	localStorage.setItem('60', JSON.stringify(GELUaf.checked));
	localStorage.setItem('61', JSON.stringify(PReLUaf.checked));
	localStorage.setItem('62', JSON.stringify(ELUaf.checked));
	localStorage.setItem('63', JSON.stringify(SELUaf.checked));
	localStorage.setItem('64', JSON.stringify(SoftPlus.checked));
	localStorage.setItem('65', JSON.stringify(Mish.checked));
	localStorage.setItem('66', JSON.stringify(SQNLaf.checked));
	localStorage.setItem('67', JSON.stringify(BentIdentity.checked));
	localStorage.setItem('68', JSON.stringify(Swish1.checked));
	localStorage.setItem('69', JSON.stringify(alphaISRU));
	localStorage.setItem('70', JSON.stringify(alphaPReLU));
	localStorage.setItem('71', JSON.stringify(alphaELU));
	localStorage.setItem('72', JSON.stringify(getTurnRate));
	localStorage.setItem('73', JSON.stringify(getTRTurnRate));
	alert('Settings Saved!');
}

function deleteSettings() {
	localStorage.removeItem('1');
	localStorage.removeItem('2');
	localStorage.removeItem('3');
	localStorage.removeItem('4');
	localStorage.removeItem('5');
	localStorage.removeItem('6');
	localStorage.removeItem('7');
	localStorage.removeItem('8');
	localStorage.removeItem('9');
	localStorage.removeItem('10');
	localStorage.removeItem('11');
	localStorage.removeItem('12');
	localStorage.removeItem('13');
	localStorage.removeItem('14');
	localStorage.removeItem('15');
	localStorage.removeItem('16');
	localStorage.removeItem('17');
	localStorage.removeItem('18');
	localStorage.removeItem('19');
	localStorage.removeItem('20');
	localStorage.removeItem('21');
	localStorage.removeItem('22');
	localStorage.removeItem('23');
	localStorage.removeItem('24');
	localStorage.removeItem('25');
	localStorage.removeItem('26');
	localStorage.removeItem('27');
	localStorage.removeItem('28');
	localStorage.removeItem('29');
	localStorage.removeItem('30');
	localStorage.removeItem('31');
	localStorage.removeItem('32');
	localStorage.removeItem('33');
	localStorage.removeItem('34');
	localStorage.removeItem('35');
	localStorage.removeItem('36');
	localStorage.removeItem('37');
	localStorage.removeItem('38');
	localStorage.removeItem('39');
	localStorage.removeItem('40');
	localStorage.removeItem('41');
	localStorage.removeItem('42');
	localStorage.removeItem('43');
	localStorage.removeItem('44');
	localStorage.removeItem('45');
	localStorage.removeItem('46');
	localStorage.removeItem('47');
	localStorage.removeItem('48');
	localStorage.removeItem('49');
	localStorage.removeItem('50');
	localStorage.removeItem('51');
	localStorage.removeItem('52');
	localStorage.removeItem('53');
	localStorage.removeItem('54');
	localStorage.removeItem('55');
	localStorage.removeItem('56');
	localStorage.removeItem('57');
	localStorage.removeItem('58');
	localStorage.removeItem('59');
	localStorage.removeItem('60');
	localStorage.removeItem('61');
	localStorage.removeItem('62');
	localStorage.removeItem('63');
	localStorage.removeItem('64');
	localStorage.removeItem('65');
	localStorage.removeItem('66');
	localStorage.removeItem('67');
	localStorage.removeItem('68');
	localStorage.removeItem('69');
	localStorage.removeItem('70');
	localStorage.removeItem('71');
	localStorage.removeItem('72');
	localStorage.removeItem('73');
	alert('Settings Deleted!');
}

function loadSettings() {
	document.getElementById('SLane').valueAsNumber = JSON.parse(localStorage.getItem('1'));
	sliderChange(sLane, sLaneVal);
	document.getElementById('Width').valueAsNumber = JSON.parse(localStorage.getItem('2'));
	sliderChange(width, widthVal);
	document.getElementById('Height').valueAsNumber = JSON.parse(localStorage.getItem('3'));
	sliderChange(height, heightVal);
	document.getElementById('MaxSpeed').valueAsNumber = JSON.parse(localStorage.getItem('4'));
	sliderChange(maxSpeed, maxSpeedVal);
	document.getElementById('Acceleration').valueAsNumber = JSON.parse(localStorage.getItem('5'));
	sliderChange(acceleration, accelerationVal);
	document.getElementById('Friction').valueAsNumber = JSON.parse(localStorage.getItem('6'));
	sliderChange(friction, frictionVal);
	document.getElementById('ASensor').valueAsNumber = JSON.parse(localStorage.getItem('7'));
	sliderChange(aSensor, aSensorVal);
	document.getElementById('SLength').valueAsNumber = JSON.parse(localStorage.getItem('8'));
	sliderChange(sLength, sLengthVal);
	document.getElementById('SSpread').valueAsNumber = JSON.parse(localStorage.getItem('9'));
	sliderChange(sSpread, sSpreadVal);
	document.getElementById('A').valueAsNumber = JSON.parse(localStorage.getItem('10'));
	sliderChange(A, a);
	document.getElementById('B').valueAsNumber = JSON.parse(localStorage.getItem('11'));
	sliderChange(B, b);
	document.getElementById('C').valueAsNumber = JSON.parse(localStorage.getItem('12'));
	sliderChange(C, c);
	document.getElementById('D').valueAsNumber = JSON.parse(localStorage.getItem('13'));
	sliderChange(D, d);
	document.getElementById('E').valueAsNumber = JSON.parse(localStorage.getItem('14'));
	sliderChange(E, e);
	document.getElementById('F').valueAsNumber = JSON.parse(localStorage.getItem('15'));
	sliderChange(F, f);
	document.getElementById('G').valueAsNumber = JSON.parse(localStorage.getItem('16'));
	sliderChange(G, g);
	document.getElementById('H').valueAsNumber = JSON.parse(localStorage.getItem('17'));
	sliderChange(H, h);
	document.getElementById('Lanes').valueAsNumber = JSON.parse(localStorage.getItem('18'));
	sliderChange(lanes, lanesVal);
	oneWay.checked = JSON.parse(localStorage.getItem('19'));
	twoWay.checked = JSON.parse(localStorage.getItem('20'));
	wrongWay.checked = JSON.parse(localStorage.getItem('21'));
	you.checked = JSON.parse(localStorage.getItem('22'));
	AI.checked = JSON.parse(localStorage.getItem('23'));
	document.getElementById('TWidth').valueAsNumber = JSON.parse(localStorage.getItem('24'));
	sliderChange(Twidth, twidthVal);
	document.getElementById('THeight').valueAsNumber = JSON.parse(localStorage.getItem('25'));
	sliderChange(Theight, theightVal);
	document.getElementById('TMaxSpeed').valueAsNumber = JSON.parse(localStorage.getItem('26'));
	sliderChange(TmaxSpeed, tmaxSpeedVal);
	document.getElementById('TAcceleration').valueAsNumber = JSON.parse(localStorage.getItem('27'));
	sliderChange(Tacceleration, taccelerationVal);
	document.getElementById('TFriction').valueAsNumber = JSON.parse(localStorage.getItem('28'));
	sliderChange(Tfriction, tfrictionVal);
	document.getElementById('NforTraffic').valueAsNumber = JSON.parse(localStorage.getItem('29'));
	sliderChange(NforTraffic, nforTraffic);
	Random.checked = JSON.parse(localStorage.getItem('30'));
	Predetermine.checked = JSON.parse(localStorage.getItem('31'));
	document.getElementById('TA').valueAsNumber = JSON.parse(localStorage.getItem('32'));
	sliderChange(TA, ta);
	document.getElementById('TB').valueAsNumber = JSON.parse(localStorage.getItem('33'));
	sliderChange(TB, tb);
	document.getElementById('TC').valueAsNumber = JSON.parse(localStorage.getItem('34'));
	sliderChange(TC, tc);
	document.getElementById('TD').valueAsNumber = JSON.parse(localStorage.getItem('35'));
	sliderChange(TD, td);
	document.getElementById('TE').valueAsNumber = JSON.parse(localStorage.getItem('36'));
	sliderChange(TE, te);
	document.getElementById('TF').valueAsNumber = JSON.parse(localStorage.getItem('37'));
	sliderChange(TF, tf);
	document.getElementById('TG').valueAsNumber = JSON.parse(localStorage.getItem('38'));
	sliderChange(TG, tg);
	document.getElementById('TH').valueAsNumber = JSON.parse(localStorage.getItem('39'));
	sliderChange(TH, th);
	document.getElementById('2Nodes').valueAsNumber = JSON.parse(localStorage.getItem('40'));
	sliderChange(SNode, Snode);
	document.getElementById('3Nodes').valueAsNumber = JSON.parse(localStorage.getItem('41'));
	sliderChange(TNode, Tnode);
	document.getElementById('NforCars').valueAsNumber = JSON.parse(localStorage.getItem('42'));
	sliderChange(NforCars, nforCars);
	document.getElementById('Mutate').valueAsNumber = JSON.parse(localStorage.getItem('43'));
	sliderChange(Mutate, mutate);
	Identity.checked = JSON.parse(localStorage.getItem('44'));
	Inverse.checked = JSON.parse(localStorage.getItem('45'));
	BinaryStep.checked = JSON.parse(localStorage.getItem('46'));
	Bipolar.checked = JSON.parse(localStorage.getItem('47'));
	Tanh.checked = JSON.parse(localStorage.getItem('48'));
	HardTanh.checked = JSON.parse(localStorage.getItem('49'));
	ArcTan.checked = JSON.parse(localStorage.getItem('50'));
	SoftSign.checked = JSON.parse(localStorage.getItem('51'));
	Erf.checked = JSON.parse(localStorage.getItem('52'));
	Sinc.checked = JSON.parse(localStorage.getItem('53'));
	Sinusoid.checked = JSON.parse(localStorage.getItem('54'));
	Sigmoid.checked = JSON.parse(localStorage.getItem('55'));
	BipolarSigmoid.checked = JSON.parse(localStorage.getItem('56'));
	Gaussian.checked = JSON.parse(localStorage.getItem('57'));
	ISRUaf.checked = JSON.parse(localStorage.getItem('58'));
	ReLUaf.checked = JSON.parse(localStorage.getItem('59'));
	GELUaf.checked = JSON.parse(localStorage.getItem('60'));
	PReLUaf.checked = JSON.parse(localStorage.getItem('61'));
	ELUaf.checked = JSON.parse(localStorage.getItem('62'));
	SELUaf.checked = JSON.parse(localStorage.getItem('63'));
	SoftPlus.checked = JSON.parse(localStorage.getItem('64'));
	Mish.checked = JSON.parse(localStorage.getItem('65'));
	SQNLaf.checked = JSON.parse(localStorage.getItem('66'));
	BentIdentity.checked = JSON.parse(localStorage.getItem('67'));
	Swish1.checked = JSON.parse(localStorage.getItem('68'));
	document.getElementById('alphaISRU').valueAsNumber = JSON.parse(localStorage.getItem('69'));
	document.getElementById('alphaPReLU').valueAsNumber = JSON.parse(localStorage.getItem('70'));
	document.getElementById('alphaELU').valueAsNumber = JSON.parse(localStorage.getItem('71'));
	document.getElementById('TurnRate').valueAsNumber = JSON.parse(localStorage.getItem('72'));
	sliderChange(TurnRate, turnRate);
	document.getElementById('TRTurnRate').valueAsNumber = JSON.parse(localStorage.getItem('73'));
	sliderChange(TRTurnRate, trturnRateVal);
	start();
}

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateColorCode() {
	var makingColorCode = '0123456789ABCDEF';
	var finalCode = '#';
	for (var counter = 0; counter < 6; counter++) {
		finalCode = finalCode + makingColorCode[Math.floor(Math.random() * 16)];
	}
	return finalCode;
}

function refresh() {
	window.location.reload();
}

let getStartLane;
let getWidth;
let getHeight;
let getMaxSpeed;
let getAcceleration;
let getFriction;
let getTurnRate;
let getASensor;
let getSLength;
let getSSpread;
let Aset;
let Bset;
let Cset;
let Dset;
let Eset;
let Fset;
let Gset;
let Hset;
let getLanes;
let oneWay;
let twoWay;
let wrongWay;
let you;
let AI;
let getWidthT;
let getHeightT;
let getMaxSpeedT;
let getAccelerationT;
let getFrictionT;
let getTRTurnRate;
let NforTrafficSet;
let Random;
let Predetermine;
let AT;
let BT;
let CT;
let DT;
let ET;
let FT;
let GT;
let HT;
let SNodeSet;
let TNodeSet;
let NforCarsSet;
let MutateSet;
let Identity;
let Inverse;
let BinaryStep;
let Bipolar;
let Tanh;
let HardTanh;
let ArcTan;
let SoftSign;
let Erf;
let Sinc;
let Sinusoid;
let Sigmoid;
let BipolarSigmoid;
let Gaussian;
let ISRUaf;
let ReLUaf;
let GELUaf;
let PReLUaf;
let ELUaf;
let SELUaf;
let SoftPlus;
let Mish;
let SQNLaf;
let BentIdentity;
let Swish1;
let alphaISRU;
let alphaPReLU;
let alphaELU;
let valueStr;

start();

function start() {
	Identity = document.getElementById('Identity');
	Inverse = document.getElementById('Inverse');
	BinaryStep = document.getElementById('BinaryStep');
	Bipolar = document.getElementById('Bipolar');
	Tanh = document.getElementById('Tanh');
	HardTanh = document.getElementById('HardTanh');
	ArcTan = document.getElementById('ArcTan');
	SoftSign = document.getElementById('SoftSign');
	Erf = document.getElementById('Erf');
	Sinc = document.getElementById('Sinc');
	Sinusoid = document.getElementById('Sinusoid');
	Sigmoid = document.getElementById('Sigmoid');
	BipolarSigmoid = document.getElementById('BipolarSigmoid');
	Gaussian = document.getElementById('Gaussian');
	ISRUaf = document.getElementById('ISRU');
	ReLUaf = document.getElementById('ReLU');
	GELUaf = document.getElementById('GELU');
	PReLUaf = document.getElementById('PReLU');
	ELUaf = document.getElementById('ELU');
	SELUaf = document.getElementById('SELU');
	SoftPlus = document.getElementById('SoftPlus');
	Mish = document.getElementById('Mish');
	SQNLaf = document.getElementById('SQNL');
	BentIdentity = document.getElementById('BentIdentity');
	Swish1 = document.getElementById('Swish1');
	alphaISRU = document.getElementById('alphaISRU').valueAsNumber;
	alphaPReLU = document.getElementById('alphaPReLU').valueAsNumber;
	alphaELU = document.getElementById('alphaELU').valueAsNumber;

	getStartLane = document.getElementById('SLane').valueAsNumber;
	getWidth = document.getElementById('Width').valueAsNumber;
	getHeight = document.getElementById('Height').valueAsNumber;
	getMaxSpeed = document.getElementById('MaxSpeed').valueAsNumber;
	getAcceleration = document.getElementById('Acceleration').valueAsNumber;
	getFriction = document.getElementById('Friction').valueAsNumber;
	getTurnRate = document.getElementById('TurnRate').valueAsNumber;
	getASensor = document.getElementById('ASensor').valueAsNumber;
	getSLength = document.getElementById('SLength').valueAsNumber;
	getSSpread = document.getElementById('SSpread').valueAsNumber;
	Aset = document.getElementById('A').valueAsNumber;
	Bset = document.getElementById('B').valueAsNumber;
	Cset = document.getElementById('C').valueAsNumber;
	Dset = document.getElementById('D').valueAsNumber;
	Eset = document.getElementById('E').valueAsNumber;
	Fset = document.getElementById('F').valueAsNumber;
	Gset = document.getElementById('G').valueAsNumber;
	Hset = document.getElementById('H').valueAsNumber;

	getWidthT = document.getElementById('TWidth').valueAsNumber;
	getHeightT = document.getElementById('THeight').valueAsNumber;
	getMaxSpeedT = document.getElementById('TMaxSpeed').valueAsNumber;
	getAccelerationT = document.getElementById('TAcceleration').valueAsNumber;
	getFrictionT = document.getElementById('TFriction').valueAsNumber;
	getTRTurnRate = document.getElementById('TRTurnRate');
	NforTrafficSet = document.getElementById('NforTraffic').valueAsNumber;
	Predetermine = document.getElementById('Set');
	Random = document.getElementById('Random');
	AT = document.getElementById('TA').valueAsNumber;
	BT = document.getElementById('TB').valueAsNumber;
	CT = document.getElementById('TC').valueAsNumber;
	DT = document.getElementById('TD').valueAsNumber;
	ET = document.getElementById('TE').valueAsNumber;
	FT = document.getElementById('TF').valueAsNumber;
	GT = document.getElementById('TG').valueAsNumber;
	HT = document.getElementById('TH').valueAsNumber;

	getLanes = document.getElementById('Lanes').valueAsNumber;
	you = document.getElementById('you');
	AI = document.getElementById('AI');

	SNodeSet = document.getElementById('2Nodes').valueAsNumber;
	TNodeSet = document.getElementById('3Nodes').valueAsNumber;
	NforCarsSet = document.getElementById('NforCars').valueAsNumber;
	MutateSet = document.getElementById('Mutate').valueAsNumber;

	twoWay = document.getElementById('twoWay');

	valueStr = '';
	if (Identity.checked) {
		valueStr = 'Identity';
	} else if (Inverse.checked) {
		valueStr = 'Inverse';
	} else if (BinaryStep.checked) {
		valueStr = 'BinaryStep';
	} else if (Bipolar.checked) {
		valueStr = 'Bipolar';
	} else if (Tanh.checked) {
		valueStr = 'Tanh';
	} else if (HardTanh.checked) {
		valueStr = 'HardTanh';
	} else if (ArcTan.checked) {
		valueStr = 'ArcTan';
	} else if (SoftSign.checked) {
		valueStr = 'SoftSign';
	} else if (Erf.checked) {
		valueStr = 'Erf';
	} else if (Sinc.checked) {
		valueStr = 'Sinc';
	} else if (Sinusoid.checked) {
		valueStr = 'Sinusoid';
	} else if (Sigmoid.checked) {
		valueStr = 'Sigmoid';
	} else if (BipolarSigmoid.checked) {
		valueStr = 'BipolarSigmoid';
	} else if (Gaussian.checked) {
		valueStr = 'Gaussian';
	} else if (ISRUaf.checked) {
		valueStr = 'ISRU';
	} else if (ReLUaf.checked) {
		valueStr = 'ReLU';
	} else if (GELUaf.checked) {
		valueStr = 'GELU';
	} else if (PReLUaf.checked) {
		valueStr = 'PReLU';
	} else if (ELUaf.checked) {
		valueStr = 'ELU';
	} else if (SELUaf.checked) {
		valueStr = 'SELU';
	} else if (SoftPlus.checked) {
		valueStr = 'SoftPlus';
	} else if (Mish.checked) {
		valueStr = 'Mish';
	} else if (SQNLaf.checked) {
		valueStr = 'SQNL';
	} else if (BentIdentity.checked) {
		valueStr = 'BentIdentity';
	} else if (Swish1.checked) {
		valueStr = 'Swish1';
	}

	if (you.checked) {
		this.type = 'YouDrive';
	} else if (AI.checked) {
		this.type = 'Smart';
	}

	let random = false;
	if (Random.checked) {
		random = true;
	} else {
		random = false;
	}

	let twoWayBool = false;
	let upWay = 'upTraffic';
	let downWay = 'downTraffic';
	if (twoWay.checked) {
		twoWayBool = true;
		if (!Random.checked) {
			alert('Random traffic must be selected!' + '\n' + 'Also have the starting lane at one of the lanes that goes forward!');
		}
	} else {
		twoWayBool = false;
	}

	const getCanvasEl = document.getElementById('Canvas');
	getCanvasEl.width = getLanes * 100;
	const brush = getCanvasEl.getContext('2d');
	const getNetworkEl = document.getElementById('Network');
	getNetworkEl.width = 800;
	const netBrush = getNetworkEl.getContext('2d');

	const path = new Path(getCanvasEl.width / 2, getCanvasEl.height / 2, getCanvasEl.height * 0.9, getCanvasEl.width * 0.9, getLanes);
	const nrTraffic = [
		new SmartCar(path.getLaneCenter(0), -100, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(1), -300, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(2), -500, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(3), -700, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(0), -900, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(1), -800, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(2), -1100, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(3), -1200, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(2), -1500, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(1), -1600, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(0), -1800, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(1), -2200, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(2), -2000, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(1), -2400, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(3), -2700, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(2), -2900, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(0), -3000, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(2), -3200, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(1), -3300, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(3), -3500, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(1), -100, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(2), -300, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(3), -500, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(0), -700, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(1), -900, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(2), -800, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(1), -1100, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(1), -1200, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(0), -1500, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(3), -1600, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(3), -1800, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(2), -2200, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(0), -2000, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(0), -2400, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(1), -2700, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(2), -2900, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(2), -3000, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(3), -3200, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(2), -3300, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
		new SmartCar(path.getLaneCenter(0), -3500, getWidthT, getHeightT, getMaxSpeedT, getAccelerationT, getFrictionT, 'Traffic', generateColorCode(), getTRTurnRate),
	];
	const cars = generateCars(NforCarsSet);
	let traffic = [];
	switch (twoWayBool) {
		case (twoWayBool = true):
			traffic = generateTraficUpDown(NforTrafficSet / 2);
			break;
		case (twoWayBool = false):
			traffic = generateTrafic(NforTrafficSet);
			break;
	}

	if (localStorage.getItem('BESTNETWORK')) {
		for (let i = 0; i < cars.length; i++) {
			cars[i].Inteligencia = JSON.parse(localStorage.getItem('BESTNETWORK'));
			if (i != 0) {
				NeuralNetwork.mutate(cars[i].Inteligencia, MutateSet);
			}
		}
	}

	animate();
	function animate(time) {
		getCanvasEl.height = window.innerHeight;
		getNetworkEl.height = window.innerHeight;
		netBrush.fillStyle = 'red';
		netBrush.textAlign = 'center';
		netBrush.font = '50px Ariel';
		netBrush.fillText('Positive', 170, 860);
		netBrush.fillStyle = 'black';
		netBrush.textAlign = 'center';
		netBrush.font = '50px Ariel';
		netBrush.fillText('Negative', 620, 860);
		geniousCar = cars.find((c) => c.Y == Math.min(...cars.map((c) => c.Y)));
		switch (random) {
			case (random = true):
				for (let i = 0; i < traffic.length; i++) {
					traffic[i].update(path.borders, AT, BT, CT, DT, ET, FT, GT, HT, []);
				}
				for (let i = 0; i < cars.length; i++) {
					cars[i].update(path.borders, Aset, Bset, Cset, Dset, Eset, Fset, Gset, Hset, traffic);
				}
				break;
			case (random = false):
				for (let i = 0; i < nrTraffic.length; i++) {
					nrTraffic[i].update(path.borders, AT, BT, CT, DT, ET, FT, GT, HT, []);
				}
				for (let i = 0; i < cars.length; i++) {
					cars[i].update(path.borders, Aset, Bset, Cset, Dset, Eset, Fset, Gset, Hset, nrTraffic);
				}
				break;
		}
		brush.translate(0, -geniousCar.Y + getCanvasEl.height * 0.8);
		path.draw(brush);
		switch (random) {
			case (random = true):
				for (let i = 0; i < traffic.length; i++) {
					traffic[i].draw(brush);
				}
				break;
			case (random = false):
				for (let i = 0; i < nrTraffic.length; i++) {
					nrTraffic[i].draw(brush);
				}
				break;
		}
		brush.globalAlpha = 0.2;
		for (let i = 0; i < cars.length; i++) {
			cars[i].draw(brush);
		}
		brush.globalAlpha = 1;
		geniousCar.draw(brush, true);
		netBrush.lineDashOffset = -time / 80;
		Visualiser.drawNetwork(netBrush, geniousCar.Inteligencia);
		requestAnimationFrame(animate);
	}

	function generateCars(NforCars) {
		const cars = [];
		for (let i = 0; i < NforCars; i++) {
			cars.push(new SmartCar(path.getLaneCenter(getStartLane), 100, getWidth, getHeight, getMaxSpeed, getAcceleration, getFriction, this.type, 'purple', getTurnRate));
		}
		return cars;
	}
	function generateTrafic(NforTraffic) {
		const traffic = [];
		for (let i = 0; i < NforTraffic; i++) {
			traffic.push(
				new SmartCar(
					path.getLaneCenter(getRandomInteger(0, getLanes)),
					getRandomInteger(-1000, 1000),
					getWidthT,
					getHeightT,
					getRandomInteger(1, 3),
					getAccelerationT,
					getFrictionT,
					'Traffic',
					generateColorCode(),
					getTRTurnRate
				)
			);
		}
		return traffic;
	}
	function generateTraficUpDown(NforTraffic) {
		const traffic = [];
		for (let i = 0; i < NforTraffic; i++) {
			traffic.push(
				new SmartCar(
					path.getLaneCenter(getRandomInteger(Math.round(getLanes / 2), getLanes)),
					getRandomInteger(-1000, 1000),
					getWidthT,
					getHeightT,
					getRandomInteger(1, 3),
					getAccelerationT,
					getFrictionT,
					upWay,
					generateColorCode(),
					getTRTurnRate
				)
			);
			traffic.push(
				new SmartCar(
					path.getLaneCenter(getRandomInteger(0, Math.round(getLanes / 2 - 1))),
					getRandomInteger(-1000, 1000),
					getWidthT,
					getHeightT,
					getRandomInteger(1, 3),
					getAccelerationT,
					getFrictionT,
					downWay,
					generateColorCode(),
					getTRTurnRate
				)
			);
		}
		return traffic;
	}
}
