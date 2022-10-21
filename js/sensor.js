class Sensor {
	constructor(smartCar, rayCount = 10, rayLength = 80, raySpread = 2) {
		this.smartCar = smartCar;
		this.rayCount = rayCount;
		this.rayLength = rayLength;
		this.raySpread = Math.PI / raySpread;
		this.angle = 0;
		this.rays = [];
		this.hits = [];
	}

	update(borders, traffic) {
		this.#activateSensor();
		this.hits = [];
		for (let i = 0; i < this.rays.length; i++) {
			this.hits.push(this.#getHits(this.rays[i], borders, traffic));
		}
	}

	draw(brush) {
		for (let i = 0; i < this.rayCount; i++) {
			let end = this.rays[i][1];
			if (this.hits[i]) {
				end = this.hits[i];
			}
			brush.beginPath();
			brush.lineWidth = 3;
			brush.strokeStyle = 'green';
			brush.moveTo(this.rays[i][0].x, this.rays[i][0].y);
			brush.lineTo(end.x, end.y);
			brush.stroke();
			brush.beginPath();
			brush.lineWidth = 3;
			brush.strokeStyle = 'red';
			brush.moveTo(this.rays[i][1].x, this.rays[i][1].y);
			brush.lineTo(end.x, end.y);
			brush.stroke();
		}
	}

	#getHits(rays, borders, traffic) {
		let collisions = [];
		for (let i = 0; i < borders.length; i++) {
			const collision = getIntersection(
				rays[0],
				rays[1],
				borders[i][0],
				borders[i][1]
			);
			if (collision) {
				collisions.push(collision);
			}
		}
		for (let i = 0; i < traffic.length; i++) {
			const shape = traffic[i].shape;
			for (let j = 0; j < shape.length; j++) {
				const collision = getIntersection(
					rays[0],
					rays[1],
					shape[j],
					shape[(j + 1) % shape.length]
				);
				if (collision) {
					collisions.push(collision);
				}
			}
		}
		if (collisions.length == 0) {
			return null;
		} else {
			const offsets = collisions.map((e) => e.offset);
			const minOffset = Math.min(...offsets);
			return collisions.find((e) => e.offset == minOffset);
		}
	}

	#activateSensor() {
		this.rays = [];
		for (let i = 0; i < this.rayCount; i++) {
			const rayAngle =
				lerp(
					this.raySpread / 2,
					-this.raySpread / 2,
					this.rayCount == 1 ? 0.5 : i / (this.rayCount - 1)
				) + this.smartCar.angle;
			const start = { x: this.smartCar.X, y: this.smartCar.Y };
			const end = {
				x: this.smartCar.X - Math.sin(rayAngle) * this.rayLength,
				y: this.smartCar.Y - Math.cos(rayAngle) * this.rayLength,
			};
			this.rays.push([start, end]);
		}
	}
}

function getIntersection(A, B, C, D) {
	const tTop = (D.x - C.x) * (A.y - C.y) - (D.y - C.y) * (A.x - C.x);
	const uTop = (C.y - A.y) * (A.x - B.x) - (C.x - A.x) * (A.y - B.y);
	const bottom = (D.y - C.y) * (B.x - A.x) - (D.x - C.x) * (B.y - A.y);

	if (bottom != 0) {
		const t = tTop / bottom;
		const u = uTop / bottom;
		if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
			return {
				x: lerp(A.x, B.x, t),
				y: lerp(A.y, B.y, t),
				offset: t,
			};
		}
	}

	return null;
}
