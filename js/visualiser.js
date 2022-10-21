class Visualiser {
	static drawNetwork(netBrush, network) {
		const margin = 100;
		const left = margin;
		const top = margin - 20;
		const width = netBrush.canvas.width - margin * 2;
		const height = netBrush.canvas.height - margin * 2;
		const layerHight = height / network.layers.length;
		for (let i = network.layers.length - 1; i >= 0; i--) {
			const layerTop =
				top +
				lerp(
					height - layerHight,
					0,
					network.layers.length == 1 ? 0.5 : i / (network.layers.length - 1)
				);
			netBrush.setLineDash([10, 4]);
			Visualiser.drawLayer(
				netBrush,
				network.layers[i],
				left,
				layerTop,
				width,
				layerHight,
				i == network.layers.length - 1 ? ['🠊', '🠈', '🠉', '🠋'] : []
			);
		}
	}
	static drawLayer(netBrush, layer, left, top, width, height, seeControls) {
		const right = left + width;
		const bottom = top + height;

		const { inputs, outputs, weights, bias } = layer;
		const nodeRadius = 22;
		for (let i = 0; i < inputs.length; i++) {
			for (let j = 0; j < outputs.length; j++) {
				netBrush.beginPath();
				netBrush.moveTo(Visualiser.#getNodeVal(inputs, i, left, right), bottom);
				netBrush.lineTo(Visualiser.#getNodeVal(outputs, j, left, right), top);
				netBrush.lineWidth = 3;
				netBrush.strokeStyle = getRGBA(weights[i][j]);
				netBrush.stroke();
			}
		}
		for (let i = 0; i < inputs.length; i++) {
			const x = Visualiser.#getNodeVal(inputs, i, left, right);
			netBrush.beginPath();
			netBrush.arc(x, bottom, nodeRadius, 0, Math.PI * 2);
			netBrush.fillStyle = 'darkgray';
			netBrush.fill();
			netBrush.beginPath();
			netBrush.arc(x, bottom, nodeRadius * 0.7, 0, Math.PI * 2);
			netBrush.fillStyle = getRGBA(inputs[i]);
			netBrush.fill();
		}
		for (let i = 0; i < outputs.length; i++) {
			const x = Visualiser.#getNodeVal(outputs, i, left, right);
			netBrush.beginPath();
			netBrush.arc(x, top, nodeRadius, 0, Math.PI * 2);
			netBrush.fillStyle = 'darkgray';
			netBrush.fill();
			netBrush.beginPath();
			netBrush.arc(x, top, nodeRadius * 0.7, 0, Math.PI * 2);
			netBrush.fillStyle = getRGBA(outputs[i]);
			netBrush.fill();
			netBrush.beginPath();
			netBrush.lineWidth = 3;
			netBrush.arc(x, top, nodeRadius * 0.9, 0, Math.PI * 2);
			netBrush.setLineDash([20, 20]);
			netBrush.strokeStyle = getRGBA(bias[i]);
			netBrush.stroke();
			netBrush.setLineDash([]);
			if (seeControls[i]) {
				netBrush.beginPath();
				netBrush.textAlign = 'center';
				netBrush.textBaseline = 'middle';
				netBrush.fillStyle = 'green';
				netBrush.font = nodeRadius * 1.2 + 'px Arial';
				netBrush.fillText(seeControls[i], x, top + nodeRadius * 0.1);
				netBrush.lineWidth = 0.5;
				netBrush.strokeText(seeControls[i], x, top + nodeRadius * 0.1);
			}
		}
	}
	static #getNodeVal(nodes, index, left, right) {
		return lerp(
			left,
			right,
			nodes.length == 1 ? 0.5 : index / (nodes.length - 1)
		);
	}
}
function getRGBA(value) {
	const alpha = Math.abs(value);
	const R = value < 0 ? 0 : 255;
	const G = 0;
	const B = value > 0 ? 0 : 0;
	return 'rgba(' + R + ',' + G + ',' + B + ',' + alpha + ')';
}
