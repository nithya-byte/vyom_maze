var ball, database,position;
var engine,world;
var maze;
var initval=0;
function setup(){
    
   
    engine=Matter.Engine.create();
    world=engine.world;
   maze= new Box(100,100,100,100);

ball = new Box(100,100,10,10);

chain1= new Chain(maze.bodies,ball.bodies);
}

function draw(){
    background("white");

  maze.display(); 
   
   ball.display();

 
}
function keyPressed()
{
   
    
    if(keyCode==32)
    {
    var x=ball.bodies.position.x+1;
    Matter.Body.setPosition(ball.bodies,{x:x,y:ball.bodies.position.y});
    console.log(ball.bodies.position.x);
    if(ball.bodies.position.x>100)
    {
       Matter.Body.setAngle(maze.bodies,45);
    }
    
    }
    else if(keyCode==27)
    {
        var x=ball.bodies.position.x-1;
        Matter.Body.setPosition(ball.bodies,{x:x,y:ball.bodies.position.y});
        
        if(ball.bodies.position.x<80)
        {
           Matter.Body.setAngle(maze.bodies,-45);
        }
    }
}


