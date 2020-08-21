const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var gameState,score=0;

function preload(){

}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  gameState = "onsling"

  block1 = new Block(300,200);
  block2 = new Block(350,200);
  block3 = new Block(400,200);
  block4 = new Block(450,200);
  block5 = new Block(500,200);
  block6 = new Block(550,200);
  block7 = new Block(600,200);
  block8 = new Block(650,200);
  block10 = new BlockTwo(350,150);
  block11 = new BlockTwo(400,150);
  block12 = new BlockTwo(450,150);
  block13 = new BlockTwo(500,150);
  block14 = new BlockTwo(550,150);
  block15 = new BlockTwo(600,150);
  block16 = new BlockThree(400,100);
  block17 = new BlockThree(450,100);
  block18 = new BlockThree(500,100);
  block19 = new BlockThree(550,100);
  block20 = new BlockFour(450,50);
  block21 = new BlockFour(500,50);
  ball = new Ball(60,150);
  platform = new Platform(500,300);
  chain = new Chain({x:140,y:150},ball.body);
}

function draw() {
  background(0,0,0);  
  textSize(35);
  fill("white");
  text("score="+ score,300,50);

  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block10.display();
  block10.score();
  block11.display();
  block12.score();
  block12.display();
  block12.score();
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  block16.display();
  block16.score();
  block17.display();
  block17.score();
  block18.display();
  block18.score();
  block19.display();
  block19.score();
  block20.display();
  block20.score();
  block21.display();
  block21.score();
  ball.display();
  platform.display();
  chain.display();
  Engine.update(engine);
  console.log(mouseX);
  console.log(mouseY);
  drawSprites();
}
function mouseDragged() {
  if(gameState==="onsling"){
    Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  }
}
function mouseReleased() {
  chain.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode===32){
    chain.attach(ball.body);
  }
}