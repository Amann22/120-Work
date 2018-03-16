function setup() {
	createCanvas(600, 600);
  background(random('255')random('255'));
}

function draw() {
	for (let y = 30; y <= height; y += 15) {
		for (let x = 12; x <= width; x += 15) {
			fill(255);
			ellipse(x + y, y, 16 - y/10.0, 16 - y/10.0);
		}
	}
}
