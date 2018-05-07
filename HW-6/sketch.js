//fireballs
var fire = [];
//images
var dragon;
var backg;
var gold;
var orbs = [];
//dragon
var player;


function preload(){
  dragon = loadImage('images/dragon.jpg');
  backg = loadImage('images/flame.jpg');
  gold = loadImage('images/gold.jpg');

}
function setup() {
    createCanvas(700, 500);
    player = new Player();
    for(var i = 0; i < 8; i++){
    orbs.push(new Orb());
  }
}

function draw() {
    background(backg);

    image(gold,330,230,50,50);

//dragon appear
    player.render();
    player.turn();
//fireballs
for( var j = 0; j<orbs.length; j++){
  orbs[j].render();
  orbs[j].update();
}
    for (var i = 0; i < fire.length;i++){
      fire[i].update();
      fire[i].render();
      for( var j = 0; j<orbs.length; j++){
      if (fire[i].hits(orbs[j])){
        orbs[j].die();
        }
      }}


      for( var j = 0; j<orbs.length; j++){
        orbs[j].render();
        orbs[j].update();
      }
      textSize(30);
      strokeWeight(3);
      stroke('rgb(139,0,0)');
      fill('rgb(255,100,0)')
      text('Shoot the Orbs!',50,50);
      textSize(20);
      text('Spacebar to shoot and arrows to protect your treasure',50,80);
      text('Hit the orbs or refresh page to restart!',350,470)
}
//this allow the dragon to stop spinning
function keyReleased(){
  player.setRotation(0);
}
//spacebar for fireball, left and right to deffend the treasure
function keyPressed() {
  push();
  if (key==' '){
    fire.push(new Fire(player.pos,player.heading))
    }
    if (keyCode == RIGHT_ARROW) {
    player.setRotation(0.1);
    } else if (keyCode == LEFT_ARROW) {
     player.setRotation(-0.1);
     pop();
   }
  }
   //dragon creation
function Player() {
  this.pos = createVector(width/2, height/2);
  this.r = 20;
  this.heading = 0;
  this.rotation = 0;

  this.render = function() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.heading);
    noFill();
    stroke(255);
    image(dragon, this.r, this.r, 50,50);
    pop();
};
  this.setRotation = function(a){
    this.rotation = a;
  };

  this.turn = function(){
    this.heading += this.rotation;
  };
}
