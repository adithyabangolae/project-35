//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Body = Matter.Body;
var foodS,foodStock,database,happyDog,dog,dogImg;

function preload()
{
  dogImg = loadImage("images/dog.png")
  happyDog = loadImage("images/happyDog.png")
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250,250,50,50)
  dog.addImage(dogImg)
  dog.scale = 0.2

  foodStock = database.ref('Food')
  foodStock.on("value",readStock)

  
}
s

function draw() {  
  background(46,139,87)

  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS)
    dog.addImage(happyDog)
  }

  drawSprites();
  

}


function readStock() {
  foodS=data.val();
}

function writeStock(x) {
  database.ref('/').update({
    Food:x
  })
}



