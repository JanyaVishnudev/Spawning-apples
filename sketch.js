var garden,rabbit,apple,orangeL,redL;
var gardenImg,appleImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();

   spawnApples()

}

function spawnApples() {
  if(frameCount % 60 ===0){
  apple = createSprite(random(50, 350),40, 10, 10);
  apple.velocityY = 3;
  apple.addImage(appleImg)
  apple.scale=0.07;
  apple.lifetime = 150;
  apple.y = Math.round(random(10,80))
  }
  
  
  }
