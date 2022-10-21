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
			if (hypertan(sum + layer.bias[i]) < 0) {
				//if (sum + layer.bias[i] > 0) {
				//if (sum > layer.bias[i]) {
				layer.outputs[i] = 1;
			} else {
				layer.outputs[i] = 0;
			}
		}
		return layer.outputs;
	}
}

function hypertan(x) {
	if (x < -20.0) {
		return -1.0;
	} else if (x > 20.0) {
		return 1.0;
	} else {
		return Math.tanh(x);
	}
}

function logsign(x) {
	if (x < -20.0) {
		return 0.0;
	} else if (x > 20.0) {
		return 1.0;
	} else {
		return 1.0 / (1.0 + Math.exp(-x));
	}
}

function softmax(v) {
	let sum = 0.0;
	let n = v.length;
	for (let i = 0; i < n; i++) {
		sum += Math.exp(v[i]);
	}
	result = [];
	for (let i = 0; i < n; i++) {
		result[i] = Math.exp(v[i]) / sum;
	}
	return result;
}
