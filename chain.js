class Chain{
    constructor(pointA,bodyB){
        var options={
            pointA:pointA,
            bodyB:bodyB,
            length:10,
            stiffness:0.03
        }
        this.constraint=Constraint.create(options);
        World.add(world,this.constraint);
        this.pointA=pointA;
    }
    display(){
        if(this.constraint.bodyB!=null){
        push();
        stroke("purple");
        strokeWeight(7);
        var posA=this.pointA
        console.log(posA);
        var posB=this.constraint.bodyB.position;
        line(posA.x,posA.y,posB.x,posB.y);
        pop();
        }
    }
    fly(){
      console.log("fly")
      this.constraint.bodyB=null
   }
   attach(body){
    this.constraint.bodyB=body
}
}