var circlex = 0;

function setup(){
  createCanvas( 600,400);
}

function draw(){
  background('salmon');
  fill('red');
  ellipse(circlex,0,50,50);
  ellipse(circlex,400,50,50);

circlex = circlex + 1;
}
