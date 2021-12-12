var path,spiderMan, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  spiderManImg = loadImage("purepng.com-spidermanspider-manspidermansuperherocomic-bookmarvel-comicscharacterstan-lee-1701528655635nmloz.png");
}

function setup(){
  
  createCanvas(400,windowHeight);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
spiderMan = createSprite(180,340,30,30);
spiderMan.scale=0.08;
spiderMan.addImage("JakeRunning",spiderManImg);
  

leftBoundary=createSprite(0,0,100,800);

// leftBoundary.invisible = false;
// leftBoundary.visible = true;
leftBoundary.invisible = true;
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  spiderMan.x = World.mouseX;
  
  edges= createEdgeSprites();
  spiderMan.collide(edges[3]);
  spiderMan.collide(leftBoundary);
  spiderMan.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > height ){
    path.y = height/2;
  }

  /*if(path.y > 400 ){
   
  path.y = height/2;
  }*/

//   // /*if(path.y > 400 ){
// // path.y = height/2;}*/

/*if(path.y > 400 ){path.y = height/2;}*/
  
  drawSprites();
}
