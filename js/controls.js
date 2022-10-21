class Controls {
	constructor(TYPE) {
		oneWay = document.getElementById('oneWay');
		twoWay = document.getElementById('twoWay');
		wrongWay = document.getElementById('wrongWay');
		this.right = false;
		this.left = false;
		this.up = false;
		this.down = false;

		switch (TYPE) {
			case 'YouDrive':
				this.#keyPress();
				break;
			case 'Traffic':
				if (oneWay.checked) {
					this.up = true;
					break;
				} else if (wrongWay.checked) {
					this.down = true;
					break;
				}
			case 'upTraffic':
				this.up = true;
				break;
			case 'downTraffic':
				this.down = true;
		}
	}
	#keyPress() {
		document.onkeydown = (event) => {
			switch (event.key) {
				case 'ArrowRight':
					this.right = true;
					break;
				case 'ArrowLeft':
					this.left = true;
					break;
				case 'ArrowUp':
					this.up = true;
					break;
				case 'ArrowDown':
					this.down = true;
					break;
			}
		};

		document.onkeyup = (event) => {
			switch (event.key) {
				case 'ArrowRight':
					this.right = false;
					break;
				case 'ArrowLeft':
					this.left = false;
					break;
				case 'ArrowUp':
					this.up = false;
					break;
				case 'ArrowDown':
					this.down = false;
					break;
			}
		};
	}
}
