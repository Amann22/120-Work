var player;


function setup() {
    createCanvas(windowWidth, windowHeight);
    player = new Player();
}

function draw() {
    background('salmon');
    player.render();
    player.turn();


}
function keyReleased(){
  player.setRotation(0);
}
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    player.setRotation(0.1);
  } else if (keyCode == LEFT_ARROW) {
     player.setRotation(-0.1);
   }
   }
function Player() {
  this.pos = createVector(width/2, height/2);
  this.r = 20;
  this.heading = 0;
  this.rotation = 0;

  this.render = function() {
    translate(this.pos.x, this.pos.y);
    rotate(this.heading);
    noFill();
    stroke(255);
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r);

};
  this.setRotation = function(a){
    this.rotation = a;
  };

  this.turn = function(){
    this.heading += this.rotation;
  };
}
