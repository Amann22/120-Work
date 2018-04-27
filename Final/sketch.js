var fiestas = [];

function setup() {
    createCanvas(600, 600);
    var b = new Fiesta(width/2, height/2, 10);
    fiestas.push(b);
    frameRate(9);
}

function mouseDragged() {
    var a = random(10, 50);
    var b = new Fiesta(mouseX, mouseY, a);
    fiestas.push(b);
}

function draw() {
    background(70);
    for (var i = 0; i < fiestas.length; i++) {
        fiestas[i].roam();
        fiestas[i].appear();
    }
}

class Fiesta {
    constructor(x, y, a) {
        this.x = x;
        this.y = y;
        this.a = a;
    }

    roam() {
        this.x = this.x + random(-9, 9);
        this.y = this.y + random(-9, 9);
    }

    appear() {
        stroke(255);
        strokeWeight(0);
        fill(random(255), random(255), random(255));
        ellipse(this.x, this.y, this.a );
    }
}
