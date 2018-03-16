function setup() {
	createCanvas(600, 600);
  background('salmon');
}

function draw() {
	for (let y = 30; y <= height; y += 16) {
		for (let x = 12; x <= width; x += 16) {
			fill('teal');
      noStroke();
			ellipse(x + y, y, 16 - y/10.0, 16 - y/10.0);
		}
	}
  for (let y = 10; y <= height; y += 19) {
		for (let x = -30; x <= width; x += 19) {
			noFill();
      stroke(5);
			ellipse(x + y, y, 16 - y/10.0, 16 - y/10.0);
		}
	}


}
