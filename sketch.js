const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var position = [];
var engine;
var world;
var musica
var tower,backgroundImg,background,cannon,angle,ball;
var balls = [];
function preload() {
  backgroundImg = loadImage("./assets/background.gif");
 

}


function setup() {
  canvas = createCanvas(1200,600);
  //var valores = [1,2,3];
  //console.log(valores[0])
  engine = Engine.create();
  world = engine.world;
  angle = -PI/4;
  tower = new Tower(150,350,160,310);
  cannon = new Cannon(180,110,100,50,angle);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  //Use a palavra-chave new para criar um objeto torre. (Desafio 4)
 
}


function draw() 
{
  
  background(189);
  
  image(backgroundImg, 0, 0, width, height);
  tower.display();

  cannon.display();
 // ball.display();
  Engine.update(engine);
//exibir a torre (Desafio 4)
 
for(var i=0; i<balls.length;i++){

  showball(balls[i],i);
}

}

function keyReleased(){

if (keyCode == DOWN_ARROW) {
  //ball.shoot();
  balls[balls.length - 1].shoot();
}

}

function keyPressed(){

  if (keyCode == DOWN_ARROW) {
    ball = new Ball(cannon.x,cannon.y);
    balls.push(ball);


  }

}

function showball(B,index){

B.display();

if (B.body.position.x > width || B.body.y > height) {
  World.remove(world,B.body);
  balls.splice(index,1);
}

}



