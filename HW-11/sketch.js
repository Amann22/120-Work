let clouds = [];

function setup() {
    createCanvas(windowWidth, 400);
    let b = new Cloud(width/2, height/2, 10);
    clouds.push(b);
}

function mouseDragged() {
    let r = random(10, 50);
    let b = new Cloud(mouseX, mouseY, r);
    clouds.push(b);
}

function draw() {
    background(0);
    for (let i = 0; i < clouds.length; i++) {
        clouds[i].move();
        clouds[i].show();
    }
}

class Cloud {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        fill("Random");
        ellipse(this.x, this.y, this.r * 2);
    }
}
