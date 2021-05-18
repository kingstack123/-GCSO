var car,wall,speed,weight;

function setup() {
createCanvas(800,400);
createSprite(400, 200, 50, 50);
speed = random(55,90);
weight = random(400,1500);
car = createSprite(50,200,50,50);
//car = color(0,128,0);
wall = createSprite(1500,200,60,60);
wall.shapeColor = rgb(80,80,80);
car.velocityX = speed;
//var deformation;
//deformation = 0.5*weight*speed*speed/22500 
}


function draw() { 
  background(255,255,255);
  //console.log("wall.x=" + wall.x + "; wall.width=" + wall.width + "; car.x=" + car.x + "; car.width=" + car.width + ";");
  if(wall.x - car.x < (car.width + wall.width) / 2)
  {
    //console.log("inside the if block");
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    //console.log("deformation=" + deformation);
    if(deformation>180)
    { 
      car.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }

    if(deformation<100)
    {
      car.shapeColor=color(0,250,0);
    }
  }
drawSprites();

}