
function setup(){
  createCanvas(600,600);
  background('salmon');
  frameRate(10);
}

let circleX=10;
let circleY=10;

function draw(){
let colr = floor( random(256) );
let colrx= floor( random(256) );
let colry= floor( random(256) );
fill(colr,colrx,colry);
  let circle_size = random( 10, width-10 );
      ellipse( width/2, height/2, circle_size );
//horizontal lines
    fill('violet');
    noStroke();
    ellipse( circleX, 150, 30 );

    circleX = circleX + 5;
    circleX = circleX % width;

    fill('violet');
    noStroke();
    ellipse( circleY, 200, 30 );

    circleY = circleY + 5;
    circleY = circleY % width;



}
