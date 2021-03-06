class Box3{
    constructor(x,y,width,height){
        var options={
            'restitution':0.04,
            'isStatic':false,
            'friction':3
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
       
        World.add(world,this.body);
    }

    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("grey");
        rect(pos.x, pos.y, this.width, this.height);
    }
}