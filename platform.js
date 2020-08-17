class Platform{
    constructor(x,y){
        var options={
        isStatic:true
        }
        this.body=Bodies.rectangle(x,y,450,15,options);
        World.add(world,this.body);
    }
    display(){
        push();
        var posBody=this.body.position;
        fill("white");
        rectMode(CENTER);
        rect(posBody.x,posBody.y,400,15);
    }
}