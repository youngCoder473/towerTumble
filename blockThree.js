class BlockThree{
    constructor(x,y){
    var options={
        isStatic:false
    }
        this.body=Bodies.rectangle(x,y,50,30,options);
        World.add(world,this.body);
    }
    display(){
        push();
        var posBody=this.body.position;
        fill("yellow");
        rect(posBody.x,posBody.y,50,30);
        pop();
    }
}