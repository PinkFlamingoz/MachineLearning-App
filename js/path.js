class Path {
	constructor(X, Y, heigth, width, laneCount = 3) {
		this.X = X;
		this.Y = Y;
		this.width = width;
		this.heigth = heigth;
		this.laneCount = laneCount;
		this.left = X - width / 2;
		this.right = X + width / 2;
		this.middleLeft = Y - heigth / 2;
		this.middleRight = Y + heigth / 2;
		const infinity = 10000000;
		this.top = -infinity;
		this.bottom = infinity;
		const topLeft = { x: this.left, y: this.top };
		const topRight = { x: this.right, y: this.top };
		const bottomLeft = { x: this.left, y: this.bottom };
		const bottomRight = { x: this.right, y: this.bottom };
		const topMiddleLeft = { x: this.middleLeft, y: this.top };
		const topMiddleRight = { x: this.middleRight, y: this.top };
		const botMiddleLeft = { x: this.middleLeft, y: this.bottom };
		const botMiddleRight = { x: this.middleRight, y: this.bottom };
		this.borders = [
			[topLeft, bottomLeft],
			[topRight, bottomRight],
		];
		this.borders2 = [
			[topMiddleLeft, botMiddleLeft],
			[topMiddleRight, botMiddleRight],
		];
		this.borders3 = [
			[topLeft, botMiddleLeft],
			[topRight, botMiddleRight],
		];
		this.borders4 = [
			[topMiddleLeft, bottomLeft],
			[topMiddleRight, bottomRight],
		];
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
			brush.lineTo(border[1].x, border[1].y);
			brush.stroke();
		});
	}

	getLaneCenter(laneIndex) {
		const laneWidth = this.width / this.laneCount;
		return (
			this.left +
			laneWidth / 2 +
			Math.min(laneIndex, this.laneCount - 1) * laneWidth
		);
	}
}
function lerp(A, B, C) {
	return A + (B - A) * C;
}
