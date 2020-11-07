// var fixedRect;
// var movingRect;

var box1,box2;

function setup() {
  createCanvas(400,400);
  // fixedRect = createSprite(200, 200, 100, 50);
  // fixedRect.shapeColor = "green";
  // fixedRect.debug=true;
  // movingRect = createSprite(200,200,50,50);
  // movingRect.shapeColor = "green"
  // movingRect.debug=true;

  box1= createSprite(100,100,50,50);
  box1.shapeColor="green";
  box1.velocityX = 5;

  box2= createSprite(300,100,50,50);
  box2.shapeColor="green";
  box2.velocityX = -5;

}

function draw() {
  background(0);  
  
  bounceOff(box1,box2);
  
  // movingRect.y = mouseY;
  // movingRect.x = mouseX;

  // if(isTouching(movingRect,box2)){
  //   // movingRect.shapeColor= "blue";
  //   box2.y= 300;
  // }

  // else{
  //   // movingRect.shapeColor= "green";
  //   box2.y=100;
  // }
  

  drawSprites();
}

