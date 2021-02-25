const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object,ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }
    var ball_options ={
restitution:3
    }

   object= Bodies.rectangle(200,390,200,20,object_options);
    World.add(world,object);

    ball= Bodies.rectangle(200,100,200,20,ball_options);
    World.add(world,ball);


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,width,50);
    ellipse(ball.position.x,ball.position.y,50,50);
}
