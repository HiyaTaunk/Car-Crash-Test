var car, wall;
var speed, weight;

function setup() {

  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);

 car =  createSprite(400, 200, 50, 50);
 car.velocityX= speed;
 car.shapeColor="white";

 wall =  createSprite(1500,200,80,height/2);
 wall.shapeColor="black";
}

function draw() {
  background(0,255,255);  

  if(keyDown("Space")){
    speed=random(55,90);
    weight=random(400,1500);
    car.shapeColor="white";
    car.x=100;
    car.y=200;
    car.velocityX=speed;
  }

  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;

    var damage=0.5*weight*speed*speed/22500;

    if(damage<100){
      car.shapeColor= color(0,255,0);
    }
    else if(damage>100 &&  damage<180){
      car.shapeColor=color(230,230,0);
    }
    else if(damage>180){
      car.shapeColor=color(255,0,0);
    }

}
  drawSprites();

  textSize(25);
  fill("orange");
  text("Press Space To Start The Test✨",600,40);
  fill("green");
  text(" 🟢 Green color show the speed is okay" ,80 , 80 );
  fill("yellow");
  text(" 🟡 Yellow color show the speed is average",530,80);
  fill("red");
  text(" 🔴 Red color show the speed is dangerous",1010,80);

}