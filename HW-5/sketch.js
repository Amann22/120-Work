var circlex = 0;

function setup(){
  createCanvas( 600,400);
  background('salmon');
}

function draw(){
//mouse moving color

push();
  stroke(10);
  fill('yellow');
  ellipse(mouseX,mouseY, 40,40);
  fill('orange');
  ellipse(mouseX,mouseY+100,40,40);
  fill('red');
  ellipse(mouseX,mouseY+200,40,40);
  fill('maroon');
  ellipse(mouseX,mouseY+300,40,40);
  fill('violet');
  ellipse(mouseX,mouseY+400,40,40);
pop();

//traveling color
noStroke();
fill('violet');
ellipse(circlex,0,50,50);
fill('yellow');
ellipse(circlex,400,50,50);
fill('maroon');
ellipse(circlex,100,50,50);
fill('red');
ellipse(circlex,200,50,50);
fill('orange');
ellipse(circlex,300,50,50);
circlex = circlex + .5;

translate(width/2,height/2);
textSize(32);
fill('yellow');
text('MAKE ART',60,200);


}




//BOuncing ball

var array= [50,10,1];
var img;
let ball = {};
ball.width = array[0];
ball.x = array[1];
ball.y = array[1];
ball.delta_x = array[2];
ball.delta_y = array[2];
ball.scale_x = array[2];
ball.scale_y = array[2];
function preload(){
  img = loadImage('images/flame.jpg')
}
function setup() {
    createCanvas(windowWidth, 400);
    frameRate(50);
}

function draw() {
  background(img);
  display();
  move();
  bounce();
    frameRate(50);
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
  fill( 'yellow' );
  ellipse(ball.x, ball.y, ball.width, ball.width);
  noStroke();
  fill( 'red' );
  ellipse(ball.x, ball.y, ball.width, ball.width);
}
