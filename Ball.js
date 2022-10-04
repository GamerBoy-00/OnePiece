class Ball{
constructor(x,y){
    var options={
        restitution: 0.8,
        friction: 1, //determinar a força de atrito entre dois corpos
        density: 1, //paso do corpo
        isStatic: true

    };

this.r = 50
this.trajectory = []
this.body = Bodies.circle(x,y,this.r,options);
this.image = loadImage("../assets/cannonball.png");
World.add(world,this.body);
}



display(){

var angle = this.body.angle;
var pos = this.body.position;
if(this.body.velocity.x > 0 && this.body.position.x > 225){
position=[this.body.position.x,this.body.position.y];
this.trajectory.push(position);
}
for(var i=0; i<this.trajectory.length;i++){
    image(this.image,this.trajectory[i][0],this.trajectory[i][1],10,10);
}
push();
translate(pos.x,pos.y);
imageMode(CENTER);
image(this.image,0,0,this.r,this.r);
pop();


}
shoot(){
    var velocity = p5.Vector.fromAngle(cannon.angle);
    velocity.mult(20);
Body.setStatic(this.body,false)    
Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})



}

}