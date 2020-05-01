var Car,speed,weight,Wall;

function setup() {
  createCanvas(1600,400);
  Car = createSprite(400, 200, 50, 50);
  speed =random(400,1500);
  weight =random(55,95);
  Car.shapeColor = "white";
  Car.velocityX = 7;

  Wall = createSprite(1500,200,60,300);
  Wall.shapeColor = "white";
}

function draw() {
  background(0);  
 if(Wall.x - Car.x < Car.width/2 + Wall.width/2){
  var deformation = 0.5*weight*speed*speed/22500;
  console.log(deformation);
  
  if(deformation<100){
    Car.shapeColor = "green";

  }if(deformation>=100 && deformation<=180){
    shapeColor = "yellow";
  }

  if(deformation>180){
    console.log("hello");
    Car.shapeColor = "red";
    
  }
  Car.velocityX = 0;
 
 }
  
  
  drawSprites();
}