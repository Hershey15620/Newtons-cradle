

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var bob1, roof, rope1;
var bobDiameter=40,startBobPositionX=width/2,startBobPositionY=height/4+500;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bob5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);


	roof= new Roof(400,50,600,50);

	rope1= new Rope(bob1.body,roof.body,-bobDiameter*2, 0);
	rope2=new Rope(bob2.body,roof.body,-bobDiameter*1, 0)
	rope3=new Rope(bob3.body,roof.body,0, 0)
	rope4=new Rope(bob4.body,roof.body,bobDiameter*1, 0)
	rope5=new Rope(bob5.body,roof.body,bobDiameter*2, 0)

	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	roof.display();

	rope1.display();


  
  drawSprites();
 
}



