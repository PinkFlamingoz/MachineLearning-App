class NeuralNetwork {
	constructor(neuronVal) {
		this.layers = [];
		for (let i = 0; i < neuronVal.length - 1; i++) {
			this.layers.push(new Layer(neuronVal[i], neuronVal[i + 1]));
		}
	}

	static feedForward(inputs, network) {
		let outputs = Layer.feedForward(inputs, network.layers[0]);
		for (let i = 1; i < network.layers.length; i++) {
			outputs = Layer.feedForward(outputs, network.layers[i]);
		}
		return outputs;
	}

	static mutate(network, amount = 1) {
		network.layers.forEach((layer) => {
			for (let i = 0; i < layer.bias.length; i++) {
				layer.bias[i] = lerp(layer.bias[i], Math.random() * 2 - 1, amount);
			}
			for (let i = 0; i < layer.weights.length; i++) {
				for (let j = 0; j < layer.weights[i].length; j++) {
					layer.weights[i][j] = lerp(
						layer.weights[i][j],
						Math.random() * 2 - 1,
						amount
					);
				}
			}
		});
	}
}
