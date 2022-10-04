class Cannon{

constructor(x,y,width,height,angle){
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.angle = angle

}



display(){
fill("#676e6a")
push();
translate(this.x,this.y);
rotate(this.angle);
rect(-10,-5,this.width,this.height);
pop()

arc(this.x-30,this.y+90,70,90,PI,TWO_PI);
noFill();

if (keyIsDown(RIGHT_ARROW) && this.angle < 0.50) {
this.angle+=0.02;

}
if (keyIsDown(LEFT_ARROW) && this.angle > -0.785) {
    this.angle-=0.02;
    
    }
}

















}