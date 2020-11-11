const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var g1,b1,b2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    
    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    g1=new Ground(200,390,400,10);
    
b1=new Box(200,100,50,20);
b2=new Box(100,300,50,20);

}


function draw(){
    background(0);
    Engine.update(engine);
    

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);


    g1.display();
    b1.display();
    b2.display();

    
}