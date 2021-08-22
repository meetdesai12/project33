const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var snow1;
var ice=[];
function preload(){
  snow1=loadImage("snow1.jpg");
}



function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world
 // createSprite(400, 200, 50, 50);
 if(frameCount%280===0){
   for(var i=0;i<100;i++){
     ice.push(new Snow(random(0,1350),random(0,50)))
   }
 }
}

function draw() {
  background(snow1); 
  Engine.update(engine); 
  for(var i=0;i<100;i++){
    ice[i].display();
  }
  drawSprites();
}