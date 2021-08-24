const Engine=Matter.Engine;
const World =Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ball;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options={
    isStatic : true
  }

  ball=Bodies.rectangle(200,200,50,50,ball_options)
  World.add(world,ball)

  
}

function draw() {
  background("black")
  Engine.update(engine)
  rectMode(CENTER)
  rect(ball.position.x,ball.position.y,50,50)
  
}