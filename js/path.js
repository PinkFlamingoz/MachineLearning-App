class Path {
	constructor(X, Y, heigth, width, laneCount = 3) {
		this.X = X;
		this.Y = Y;
		this.width = width;
		this.heigth = heigth;
		this.laneCount = laneCount;
		this.left = X - width / 2;
		this.right = X + width / 2;
		const infinity = 100000;
		this.top = -infinity;
		this.bottom = infinity;
		const topLeft = { x: this.left, y: this.top };
		const topRight = { x: this.right, y: this.top };
		const bottomLeft = { x: this.left, y: this.bottom };
		const bottomRight = { x: this.right, y: this.bottom };
		this.borders = [
			[topLeft, bottomLeft],
			[topRight, bottomRight],
		];
		//for (let Y = -1000; Y <= 0; Y++) {
		//	const x = Math.sin(Y * 0.01) * 50;
		//	this.borders[0].push({ x: x + this.left, y: Y });
		//	this.borders[1].push({ x: x + this.right, y: Y });
		//}
		//this.borders[0].push(bottomLeft);
		//this.borders[1].push(bottomRight);
	}

	draw(brush) {
		brush.lineWidth = 7;
		brush.strokeStyle = 'white';
		for (let i = 1; i <= this.laneCount - 1; i++) {
			const x = lerp(this.left, this.right, i / this.laneCount);
			brush.setLineDash([30, 30]);
			brush.beginPath();
			brush.moveTo(x, this.top);
			brush.lineTo(x, this.bottom);
			brush.stroke();
		}
		brush.setLineDash([]);
		this.borders.forEach((border) => {
			brush.beginPath();
			brush.moveTo(border[0].x, border[0].y);
			for (let i = 1; i < border.length; i++) {
				brush.lineTo(border[i].x, border[i].y);
			}
			brush.stroke();
		});
	}

	getLaneCenter(laneIndex) {
		const laneWidth = this.width / this.laneCount;
		return this.left + laneWidth / 2 + Math.min(laneIndex, this.laneCount - 1) * laneWidth;
	}
}
function lerp(A, B, C) {
	return A + (B - A) * C;
}
