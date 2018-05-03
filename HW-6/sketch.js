


var player;
var img;
function preload(){
  img = loadImage('images/wiz.jpg')
}

function setup() {
    createCanvas(500, 500);
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
    image(img, this.r, this.r, 50,50);

};
  this.setRotation = function(a){
    this.rotation = a;
  };

  this.turn = function(){
    this.heading += this.rotation;
  };
}
