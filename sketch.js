var engine,world;
var ground,ball;

function setup() {
  createCanvas(800,500);

  engine = Matter.Engine.create();
  world = engine.world;

 var property = {isStatic : true}

  ground = Matter.Bodies.rectangle(200,420,1200,20,property);
  Matter.World.add(world,ground);

  var option = {restitution : 1.0}

  ball = Matter.Bodies.circle(200,100,20,option);
  Matter.World.add(world,ball);

}

function draw() {
  background(255,255,255);  

  Matter.Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1200,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);

}