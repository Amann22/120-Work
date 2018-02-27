
function setup(){
  createCanvas(600,600);
  background('salmon');
  frameRate(10);
}

let circleX=10;
let circleY=590;
let r = 0;
let g = 0;
let b = 0;

function draw(){
  //color changing circles
let colr = floor( random(256) );
let colrx= floor( random(256) );
let colry= floor( random(256) );

fill(colr,colrx,colry);
  let circle_size = random( 10, width-10 );
      ellipse( width/2, height/2, circle_size );
//horizontal lines 1
    fill('violet');
    noStroke();
    ellipse( circleX, 200, 30 );

    circleX = circleX + 3;
    circleX = circleX % width;
//line2
    fill('violet');
    noStroke();
    ellipse( circleY, 250, 30 );

    circleY = circleY - 3;
    circleY = circleY % width;
//line3
  r = map(mouseX,0,600,0,255);
  g = map(mouseX,0,600,255,0);
  b = map(mouseY,0,600,0,255);
    fill(r,g,b);
    noStroke();
    ellipse( circleX, 300, 30 );

//line4
    fill('violet');
    noStroke();
    ellipse( circleY, 350, 30 );
//line5
    fill('violet');
    noStroke();
    ellipse( circleX, 400, 30 );

}
