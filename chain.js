class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.005
        }
        this.constraint=Constraint.create(options);
        World.add(world,this.constraint);
    }
    display(){
        if(this.constraint.bodyA!=null){
        push();
        stroke("purple");
        strokeWeight(7);
        var posA=this.constraint.bodyA.position;
        console.log(posA);
        var posB=this.constraint.bodyB.position;
        line(posA.x,posA.y,posB.x,posB.y);
        pop();
        }
    }
    fly(){
      console.log("fly")
      this.constraint.bodyA=null
   }
}