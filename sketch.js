var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var dropZone
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine=Engine.create();
	world=engine.world;
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6


	dropZone = Bodies.rectangle(width/2, 640, 150, 10,{isStatic:true} );



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

  
}


function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER)
  rect(dropZone.position.x, dropZone.position.y, 150, 10)
  imageMode(CENTER)
  image(packageIMG, packageBody.position.x, packageBody.position.y, 30,30)
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   Matter.Body.setStatic(packageBody,false);
    
  }
}



