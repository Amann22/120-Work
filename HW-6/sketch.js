
function setup(){
  createCanvas(600,600);
  background('salmon');
  frameRate(10);
}

function draw(){
let colr = floor( random(256) );
fill(colr);
  let circle_size = random( 10, width-10 );
      ellipse( width/2, height/2, circle_size );

}
