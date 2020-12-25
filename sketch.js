//variable declaration -> var name;
var object1 , object2;

function setup() {
  createCanvas(800,400);
  
  trex = createSprite(250, 200,80, 80);
  obstacles = createSprite(300, 200, 50, 50 );
}

function draw() {
  background(255,255,255);
    obstacles.x = mouseX;
    obstacles.y = mouseY;

    if (isTouching(trex, obstacles)){
      trex.shapeColor = "Pink"
      obstacles.shapeColor = "Yellow"
   
    }
    else { 
      trex.shapeColor = "Black"
      obstacles.shapeColor = "Green"
    }

    //console.log(object2.x)
  
  drawSprites();
  
}
