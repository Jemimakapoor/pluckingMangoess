class Launcher{
    constructor(bodyA, point2){
        var options = {
            bodyA: bodyA,
            pointB: point2,
            stiffness: 0.04,
            length: 10
        }
        this.launcher = Constraint.create(options);
        this.pointB = point2;
        World.add(world, this.launcher);

    }

    display(){
        if(this.launcher.bodyA){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

    }
    
    fly(){
        this.launcher.bodyA=null
    }
    
    attach(body){
    this.launcher.bodyA=body
    }
}



