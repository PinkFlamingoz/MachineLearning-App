class Layer {
	constructor(inputVal, outputVal) {
		this.inputs = new Array(inputVal); // senzori
		this.outputs = new Array(outputVal); // kontroli
		this.bias = new Array(outputVal); //vrednosta nad koja se aktivira
		this.weights = [];
		for (let i = 0; i < inputVal; i++) {
			this.weights[i] = new Array(outputVal); //konekcii so sekoj neuron
		}
		Layer.#randomize(this);
	}

	static #randomize(layer) {
		for (let i = 0; i < layer.inputs.length; i++) {
			for (let j = 0; j < layer.outputs.length; j++) {
				layer.weights[i][j] = Math.random() * 2 - 1;
			}
		}
		for (let i = 0; i < layer.bias.length; i++) {
			layer.bias[i] = Math.random() * 2 - 1;
		}
	}

	static feedForward(inputs, layer) {
		for (let i = 0; i < layer.inputs.length; i++) {
			layer.inputs[i] = inputs[i];
		}
		for (let i = 0; i < layer.outputs.length; i++) {
			let sum = 0;
			for (let j = 0; j < layer.inputs.length; j++) {
				sum += layer.inputs[j] * layer.weights[j][i];
			}
			if (sum > layer.bias[i]) {
				switch (valueStr) {
					case 'Identity':
						layer.outputs[i] = 1;
						break;
					case 'Inverse':
						layer.outputs[i] = inverse(sum + layer.bias[i]);
						break;
					case 'BinaryStep':
						layer.outputs[i] = binaryStep(sum + layer.bias[i]);
						break;
					case 'Bipolar':
						layer.outputs[i] = bipolar(sum + layer.bias[i]);
						break;
					case 'Tanh':
						layer.outputs[i] = tanh(sum + layer.bias[i]);
						break;
					case 'HardTanh':
						layer.outputs[i] = hardTanh(sum + layer.bias[i]);
						break;
					case 'ArcTan':
						layer.outputs[i] = arcTan(sum + layer.bias[i]);
						break;
					case 'SoftSign':
						layer.outputs[i] = softSign(sum + layer.bias[i]);
						break;
					case 'Erf':
						layer.outputs[i] = erf(sum + layer.bias[i]);
						break;
					case 'Sinc':
						layer.outputs[i] = sinc(sum + layer.bias[i]);
						break;
					case 'Sinusoid':
						layer.outputs[i] = sinusoid(sum + layer.bias[i]);
						break;
					case 'Sigmoid':
						layer.outputs[i] = sigmoid(sum + layer.bias[i]);
						break;
					case 'BipolarSigmoid':
						layer.outputs[i] = bipolarSigmoid(sum + layer.bias[i]);
						break;
					case 'Gaussian':
						layer.outputs[i] = gaussian(sum + layer.bias[i]);
						break;
					case 'ISRU':
						layer.outputs[i] = ISRU(sum + layer.bias[i], alphaISRU);
						break;
					case 'ReLU':
						layer.outputs[i] = ReLU(sum + layer.bias[i]);
						break;
					case 'GELU':
						layer.outputs[i] = GELU(sum + layer.bias[i]);
						break;
					case 'PReLU':
						layer.outputs[i] = PReLU(sum + layer.bias[i], alphaPReLU);
						break;
					case 'ELU':
						layer.outputs[i] = ELU(sum + layer.bias[i], alphaELU);
						break;
					case 'SELU':
						layer.outputs[i] = SELU(sum + layer.bias[i]);
						break;
					case 'SoftPlus':
						layer.outputs[i] = softPlus(sum + layer.bias[i]);
						break;
					case 'Mish':
						layer.outputs[i] = mish(sum + layer.bias[i]);
						break;
					case 'SQNL':
						layer.outputs[i] = SQNL(sum + layer.bias[i]);
						break;
					case 'BentIdentity':
						layer.outputs[i] = bentIdentity(sum + layer.bias[i]);
						break;
					case 'Swish1':
						layer.outputs[i] = swish1(sum + layer.bias[i]);
						break;
				}
			} else {
				layer.outputs[i] = 0;
			}
		}
		return layer.outputs;
	}
}

function identity(x) {
	return x;
}

function inverse(x) {
	return 1 - x;
}

function binaryStep(x) {
	return x < 0 ? -1 : 1;
}

function bipolar(x) {
	return x > 0 ? 1 : -1;
}

function tanh(x) {
	return Math.tanh(x);
}

function hardTanh(x) {
	return Math.max(-1, Math.min(1, x));
}

function arcTan(x) {
	return Math.atan(x);
}

function softSign(x) {
	return x / (1 + Math.abs(x));
}

function erf(x) {
	var a1 = 0.254829592;
	var a2 = -0.284496736;
	var a3 = 1.421413741;
	var a4 = -1.453152027;
	var a5 = 1.061405429;
	var p = 0.3275911;

	var sign = x < 0 ? -1 : 1;
	x = Math.abs(x);

	var t = 1.0 / (1.0 + p * x);
	var y = 1.0 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-(x ** 2));

	return sign * y;
}

function sinc(x) {
	return x == 0 ? 1 : Math.sin(x) / x;
}

function sinusoid(x) {
	return Math.sin(x);
}

function sigmoid(x) {
	return 1 / (1 + Math.exp(-x));
}

function bipolarSigmoid(x) {
	return 2 * sigmoid(x) - 1;
}

function gaussian(x) {
	return Math.exp(-(x ** 2));
}

function ISRU(x, a) {
	return x / Math.sqrt(1 + a * x ** 2);
}

function ReLU(x) {
	return Math.max(0.3, x);
}

function GELU(x) {
	return (x / 2) * (1 + erf(x / Math.SQRT2));
}

function PReLU(x, a) {
	return x < 0 ? a * x : x;
}

function ELU(x, a) {
	return x > 0 ? x : a * Math.expm1(x);
}

function SELU(x) {
	return 1.0507 * ELU(x, 1.67326);
}

function softPlus(x) {
	return Math.log(1 + Math.exp(x));
}

function mish(x) {
	return x * Math.tanh(softPlus(x));
}

function SQNL(x) {
	if (x > +2) {
		return +1;
	}
	if (x < -2) {
		return -1;
	}
	if (x < 0) {
		return x + x ** 2 / 4;
	}
	/* -2=<x<0: */ return x + x ** 2 / 4;
}

function bentIdentity(x) {
	return (Math.sqrt(x ** 2 + 1) - 1) / 2 + x;
}

function swish1(x) {
	return x * sigmoid(x);
}
