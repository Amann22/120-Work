var obj;

function setup() {
    createCanvas(600, 600);
    obj = new Obj();
}

function draw() {
    background(70);
    obj.render();
    obj.turn(0.1);

}

function keyPresses(){
  if (keycode == RIGHT_ARROW) {
    obj.turn(0.1);
  } else if (keycode == LEFT_ARROW) {
     obj.turn(-0.1);
   }
}

function Obj() {
  this.pos = createVector(width/2, height/2);
  this.o = 10;
  this.heading = 0 ;
  this.render = function() {
    translate(this.pos.x, this.pos.y);
    fill(255);
    noStroke();
    triangle(-this.o, this.o, this.o, this.o, 0, -this.o);
};
  this.turn = function(angle){
    this.heading += angle;
  };
}
