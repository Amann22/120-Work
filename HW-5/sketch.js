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

}
