function setup() {
	createCanvas(600, 600);
  background('salmon');
}

function draw() {
	for (let y = 30; y <= height; y += 12) {
		for (let x = 12; x <= width; x += 12) {
			fill('mint');
      noStroke();
			ellipse(x + y, y, 16 - y/10.0, 16 - y/10.0);
		}
	}
}
