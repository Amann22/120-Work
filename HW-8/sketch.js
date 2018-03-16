function setup() {
	createCanvas(600, 600);
  background('salmon');
}

function draw() {
	for (let y = 30; y <= height; y += 10) {
		for (let x = 12; x <= width; x += 10) {
			fill('teal');
      noStroke();
			ellipse(x + y, y, 16 - y/10.0, 16 - y/10.0);
		}
	}
}
