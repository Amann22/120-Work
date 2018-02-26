
let rand = random();

function setup(){
  createCanvas(600,400);
  background('salmon');
}

function draw(){
fill('random(256)');
  let circle_size = random( 10, width-10 );
      ellipse( width/2, height/2, circle_size );

}
