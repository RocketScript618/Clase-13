var trex, trex_running, trex_collided, trex_down, trex2;
var ground, invisibleGround, groundImage;
var tero_fly;
var clouds;
var dinoImg;


function preload() {
  dinoImg = loadImage("test.png");
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");
  trex_down = loadAnimation("trex_down1.png","trex_down2.png");
  clouds = loadImage("cloud.png");
  groundImage = loadImage("ground2.png")
  tero_fly = loadAnimation("tero1.png","tero1.png","tero2.png","tero2.png");
}

function setup() {
createCanvas(600, 200);

//crear sprite de Trex
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.addAnimation("down",trex_down);
trex.scale = 0.5;
//crear sprite de suelo
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -4;

invisibleGround = createSprite(200,190,400,10);
invisibleGround.visible=false;


}

function draw() {
background("white");

//hacer que el Trex salte al presionar la barra espaciadora
if (keyDown("space")&&trex.y>=153) {
  trex.velocityY = -11;
}
if(keyDown("down")){
  trex.changeAnimation("down",trex_down);
  trex.scale = 0.35;
}
if(keyWentUp("down")){
  trex.changeAnimation("running",trex_running);
  trex.scale = 0.5;
}
trex.velocityY = trex.velocityY + 0.8

if (ground.x < 0) {
  ground.x = ground.width / 2;
}

trex.collide(invisibleGround);

var rand = Math.round(random(1,100));
console.log(rand);

dino_spawn();
tero_spawn();
cloud_spawn();
drawSprites();
}

function cloud_spawn(){
  if(frameCount % 60 == 0){
    var cloud = createSprite(500,70);
    fill("black");
    cloud.y = Math.round(random(25,85));
    cloud.velocityX = -3;
    cloud.addImage(clouds);
    cloud.scale =0.1;
  }
}

function tero_spawn(){
  if(frameCount % 75 == 0){
    var tero = createSprite(550,125);
    tero.addAnimation("flying", tero_fly);
    tero.y = Math.round(random(125,150));
    tero.velocityX = -4;
    tero.scale = 0.9;
  }
}

function dino_spawn(){
  if(frameCount % 90 == 0){
    var dino = createSprite(550,175);
    dino.addImage(dinoImg);
    dino.velocityX = -4;
    dino.scale = 0.5
  }
}