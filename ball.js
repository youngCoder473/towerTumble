class Ball{
    constructor(x,y){
        this.body=Bodies.circle(x,y,35);
        World.add(world,this.body);
    }
    display(){
        push();
        var pos= this.body.position;
        fill("orange");
        ellipse(pos.x,pos.y,35);
        pop();
    }
}