class BlockTwo{
    constructor(x,y){
    var options={
        isStatic:false
    }
        this.body=Bodies.rectangle(x,y,50,30,options);
        World.add(world,this.body);
        this.visibility=250;
    }
    display(){
        push();
        this.pos=this.body.position;
        if(this.pos.y>=350){
        World.remove(world,this.body);
        tint(255,this.visibility);
        this.visibility=this.visibility-5
        pop();
        }
        else{
        push();
        var posBody=this.body.position;
        fill("green");
        rect(posBody.x,posBody.y,50,30);
        pop();
        }
    }
    score(){
        if(this.visibility<0&&this.visibility>=-100){
            score++
            console.log("hi");
        }
    }
}
