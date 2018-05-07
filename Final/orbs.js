
function Orb(){
  this.pos = createVector(random(width),random(height))
  this.vel = p5.Vector.random2D();
  this.r = 40;
  this.update = function(){
  this.pos.add(this.vel);
}
this.die = function(){
  this.pos.add(255,255);
}
this.render = function(){
  push();
  stroke('rgb(0,191,255)');
  noFill();
  translate(this.pos.x, this.pos.y);
  ellipse(0,0,this.r *2)
  pop();
}

}
