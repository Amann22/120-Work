var circlex = 0;

function setup(){
  createCanvas( 600,400);
}

function draw(){
  background('salmon');
  //red circles horizontal
  fill('red');
  ellipse(circlex,0,50,50);
  ellipse(circlex,400,50,50);
  ellipse(circlex,100,50,50);
  ellipse(circlex,200,50,50);
  ellipse(circlex,300,50,50);
  circlex = circlex + 1;
//mouse moving
  fill('yellow');
  ellipse(mouseX,mouseY, 40,40);
  
}
