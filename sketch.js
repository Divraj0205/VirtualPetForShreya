//Create variables here
var dog, normDog,happyDog, database,foodS, foodStock;

function preload()
{
  //load images here
  normDog=loadImage("dogImg.png");
  happyDog=loadImage("dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,250,30,30);
  dog.addImage(normDog);
  dog.scale=0.3;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(49,139,87);
  drawSprites();
  //add styles here
  fill("white");
  textSize(20);
  stroke("black");
  strokeWeight(4);
  text("Food Stock: "+foodS, 170,100);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({Food:x})
}




