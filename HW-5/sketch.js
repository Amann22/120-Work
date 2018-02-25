var circlex = 0;
var circleY = 0;

function setup(){
  createCanvas( 600,400);
}

function draw(){
  background('salmon');
  //red circles horizontal
  fill('red');
  ellipse(circlex,0,50,50);
  ellipse(circlex,400,50,50);
  circlex = circlex + 1;
  circleY = circleY + 1;
  //red circles vertical
  ellipse(0,cricleY,50,50);
  ellipse(600,circleY,50,50);
}
