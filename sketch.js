var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,back,backImg;
var people,peopleImg;
var zombie,zombieImg;
var zombie2,zombie2Img;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	backImg = loadImage("city.jpg");
	

}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	
	back = createSprite(400,300,800,600);
	back.addImage(backImg);
	back.scale = 1.2;

	

	packageSprite=createSprite(width/2, 50, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 170, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	groundSprite.visible = false;

	people = createSprite(400,550);
	people.addImage(peopleImg);
	people.scale = 0.4;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 170 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 550, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  if(keyDown(DOWN_ARROW)) {
	Matter.Body.setStatic(packageBody,false);
	}

console.log(packageSprite);
 
  Engine.update(engine);
  drawSprites();
}