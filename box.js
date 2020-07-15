class Box
{
    constructor(x,y,width,height)
    {
        var option={
            restitution:1.0
        }
        this.bodies=Matter.Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        Matter.World.add(world,this.bodies);
        
       
        
    }
    display()
    {
        

        var pos=this.bodies.position;
        var angle= this.bodies.angle;
        push();
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(angle); 
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
        }

        
    
    

}