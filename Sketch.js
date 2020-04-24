var track;

var player;


var car1;
var car2;
var car3;


function setup() {
  canvas = createCanvas(displayWidth, displayHeight/2);
  player = createSprite(660, 450, 50, 50);
  player.addImage(player_image);
}

function draw() {
  background(255,255,255);  
  image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
  
  player.x = mouseX;

  if(frameCount % 50 === 0) {
    car1 = createSprite(random(370,500),10,10,40);
    car1.velocityY = + 30;
  }
  if(frameCount % 60 === 0) {
    car2 = createSprite(random(600,700),10,10,40);
    car2.velocityY = + 30;
  }
  if(frameCount % 70 === 0) {
    car3 = createSprite(random(800,900),10,10,40);
    car3.velocityY = + 30;
  }
  if(frameCount % 60 === 0) {
    car1 = createSprite(random(900,1100),10,10,40);
    car1.velocityY = + 30;
    
  }
  if(frameCount % 90 === 0) {
    car2 = createSprite(random(1100,1300),10,10,40);
    car2.velocityY = + 30;
  }
  if(frameCount % 120 === 0) {
    car3 = createSprite(random(1300,1500),10,10,40);
    car3.velocityY = + 30;
  }
 
  drawSprites();
}