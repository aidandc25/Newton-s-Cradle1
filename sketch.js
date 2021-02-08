
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

var ground1;

var roof1;

var rope1,rope2,rope3,rope4,rope5;

var constraint

Matter.Constraint

const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1= new bob(680,450,60);
	bobObject2= new bob(740,450,60);
	bobObject3= new bob(800,450,60);
	bobObject4= new bob(860,450,60);
	bobObject5= new bob(920,450,60);

	roof1= new roof(800,150,300,20)

	rope1=new rope(bobObject1.body,roof1.body,-120, 0)
	rope2=new rope(bobObject2.body,roof1.body,-60, 0)
	rope3=new rope(bobObject3.body,roof1.body,0, 0)
	rope4=new rope(bobObject4.body,roof1.body,60, 0)
	rope5=new rope(bobObject5.body,roof1.body,120, 0)

	
	ground1=new ground(width/2,670,width,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	ground1.display();

	roof1.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

  drawSprites();
 
}


function keyPressed(){

	if (keyCode === UP_ARROW) {
		
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
	
	}


}

