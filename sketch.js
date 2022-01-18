var ship,oceano 
function preload(){
barcoImg=loadImage("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
oceanoImg=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  oceano=createSprite(200,200);
  ship=createSprite(200,200,20,20);
  oceano.addImage(oceanoImg);
  ship.addImage(barcoImg);
  ship.scale=0.5
  
}

function draw() {
  background("blue");
 
  drawSprites();
}