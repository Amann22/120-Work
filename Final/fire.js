

function Fire(spos,angle){
  this.pos = createVector(spos.x,spos.y);
  this.vel = p5.Vector.fromAngle(angle);
  this.vel.mult(10);

  this.update = function(){
    this.pos.add(this.vel);
  }
  this.render = function(){
    push();
    stroke('red');
    strokeWeight(10);
    point(this.pos.x,this.pos.y)
    pop();
  }
  this.hits = function(orb){
    var d = dist(this.pos.x,this.pos.y,orb.pos.x,orb.pos.y)
    if (d <orb.r){
      return true;
    }else{
      return false;
    }
  }


}
