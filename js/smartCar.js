class SmartCar {
	constructor(
		X,
		Y,
		width,
		height,
		maxSpeed = 3,
		acceleration = 0.2,
		friction = 0.05,
		TYPE,
		color,
		getASensor = document.getElementById('ASensor').valueAsNumber,
		getSLength = document.getElementById('SLength').valueAsNumber,
		getSSpread = document.getElementById('SSpread').valueAsNumber,
		sensor = new Sensor(this, getASensor, getSLength, getSSpread),
		SNode = document.getElementById('2Nodes').valueAsNumber,
		TNode = document.getElementById('3Nodes').valueAsNumber
	) {
		this.X = X;
		this.Y = Y;
		this.width = width;
		this.height = height;
		this.controls = new Controls(TYPE);
		this.speed = 0;
		this.maxSpeed = maxSpeed;
		this.maxReverse = this.maxSpeed / 2;
		this.acceleration = acceleration;
		this.friction = friction;
		this.TYPE = TYPE;
		this.color = color;
		if (TYPE == 'Smart') {
			this.sensor = sensor;
			this.Inteligencia = new NeuralNetwork([
				this.sensor.rayCount,
				SNode,
				TNode,
				4,
			]);
		} else if (TYPE == 'YouDrive') {
			this.sensor = sensor;
			this.Inteligencia = new NeuralNetwork([
				this.sensor.rayCount,
				SNode,
				TNode,
				4,
			]);
		}
		this.angle = 0;
		this.isHit = false;
	}

	update(borders, A, B, C, D, E, F, G, H, traffic) {
		if (!this.isHit) {
			this.#drive();
			this.shape = this.#createShape(A, B, C, D, E, F, G, H);
			this.isHit = this.#detectHit(borders, traffic);
		}
		if (this.sensor) {
			this.sensor.update(borders, traffic);
			const offsets = this.sensor.hits.map((s) =>
				s == null ? 0 : 1 - s.offset
			);
			const outputs = NeuralNetwork.feedForward(offsets, this.Inteligencia);
			if (this.TYPE == 'Smart') {
				//console.log(outputs);
				this.controls.right = outputs[0];
				this.controls.left = outputs[1];
				this.controls.up = outputs[2];
				this.controls.down = outputs[3];
			}
		}
	}

	draw(brush, activateSensor = false) {
		if (this.isHit) {
			brush.fillStyle = 'black';
		} else {
			brush.fillStyle = this.color;
		}
		brush.beginPath();
		brush.moveTo(this.shape[0].x, this.shape[0].y);
		for (let i = 1; i < this.shape.length; i++) {
			brush.lineTo(this.shape[i].x, this.shape[i].y);
		}
		brush.fill();
		if (this.sensor && activateSensor) {
			this.sensor.draw(brush);
		}
	}

	#detectHit(borders, traffic) {
		for (let i = 0; i < borders.length; i++) {
			if (shapesIntersect(this.shape, borders[i])) {
				return true;
			}
		}
		for (let i = 0; i < traffic.length; i++) {
			if (shapesIntersect(this.shape, traffic[i].shape)) {
				return true;
			}
		}
		return false;
	}

	#createShape(A, B, C, D, E, F, G, H) {
		const points = [];
		const radius = Math.hypot(this.width, this.height) / 2;
		const angleA = Math.atan2(this.width, this.height);

		points.push({
			x: this.X - Math.sin(this.angle - angleA) * radius * A,
			y: this.Y - Math.cos(this.angle - angleA) * radius * B,
		});
		points.push({
			x: this.X - Math.sin(this.angle + angleA) * radius * C,
			y: this.Y - Math.cos(this.angle + angleA) * radius * D,
		});
		points.push({
			x: this.X - Math.sin(Math.PI + this.angle - angleA) * radius * E,
			y: this.Y - Math.cos(Math.PI + this.angle - angleA) * radius * F,
		});
		points.push({
			x: this.X - Math.sin(Math.PI + this.angle + angleA) * radius * G,
			y: this.Y - Math.cos(Math.PI + this.angle + angleA) * radius * H,
		});
		return points;
	}

	#drive() {
		if (this.controls.up) {
			this.speed += this.acceleration;
		}
		if (this.controls.down) {
			this.speed -= this.acceleration;
		}
		if (this.speed > this.maxSpeed) {
			this.speed = this.maxSpeed;
		}
		if (this.speed < -this.maxReverse) {
			this.speed = -this.maxReverse;
		}
		if (Math.abs(this.speed) < this.friction) {
			this.speed = 0;
		}
		if (this.speed > 0) {
			this.speed -= this.friction;
		}
		if (this.speed < 0) {
			this.speed += this.friction;
		}
		if (this.speed != 0) {
			const flip = this.speed > 0 ? 1 : -1;
			if (this.controls.right) {
				this.angle -= 0.03 * flip;
			}
			if (this.controls.left) {
				this.angle += 0.03 * flip;
			}
		}
		this.X -= Math.sin(this.angle) * this.speed;
		this.Y -= Math.cos(this.angle) * this.speed;
	}
}

function shapesIntersect(shape1, shape2) {
	for (let i = 0; i < shape1.length; i++) {
		for (let j = 0; j < shape2.length; j++) {
			const hit = getIntersection(
				shape1[i],
				shape1[(i + 1) % shape1.length],
				shape2[j],
				shape2[(j + 1) % shape2.length]
			);
			if (hit) {
				return true;
			}
		}
	}
	return false;
}
