class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Matter.Constraint.create(options);
       Matter. World.add(world, this.chain);
        
    }

    }