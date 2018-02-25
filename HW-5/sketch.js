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
  ellipse(mouseX,mouseY+100,40,40);
  ellipse(mouseX,mouseY+200,40,40);
  ellipse(mouseX,mouseY+300,40,40);
  ellipse(mouseX,mouseY+400,40,40);

  translate(width/2,height/2);
  fill('satin');
  ellipse(0,0,50);

}
