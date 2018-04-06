var array= [50,10,1];

let ball = {};
ball.width = array[0];
ball.x = array[1];
ball.y = array[1];
ball.delta_x = array[2];
ball.delta_y = array[2];
ball.scale_x = array[2];
ball.scale_y = array[2];

function setup() {
    createCanvas(windowWidth, 400);
    background( 0);
    frameRate(100);
}

function draw() {
  display();
  move();
  bounce();
  if( mouseIsPressed ) {
          ball.width++;
    }

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, array[1]);
    ball.scale_y = map(mouseY, 0, height, 0.5, array[1]);
  }

}

function move () {
  ball.x += ball.delta_x * ball.scale_x;
  ball.y += ball.delta_y * ball.scale_y;
}
function bounce() {
  if (ball.x >= width || ball.x <= 0) {
      ball.delta_x = -1 * ball.delta_x;
  }
  if (ball.y >= height || ball.y <= 0) {
      ball.delta_y = -1 * ball.delta_y;
}
}
function display() {
  fill( random(255), random(255), random(255) );
  ellipse(ball.x, ball.y, ball.width, ball.width);
  noStroke();
  fill( random(255), random(255), random(255) );
  ellipse(ball.x, ball.y, ball.width, ball.width);
}
