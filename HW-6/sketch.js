
function setup(){
  createCanvas(600,600);
  background('salmon');
  frameRate(10);
}


function draw(){
let colr = floor( random(256) );
let colrx= floor( random(256) );
let colry= floor( random(256) );
fill(colr,colrx,colry);
  let circle_size = random( 10, width-10 );
      ellipse( width/2, height/2, circle_size );
      //backround
      let red = floor( random(256) );
          let green = floor( random(256) );
          let blue = floor( random(256) );
          background( red, green, blue );

}
