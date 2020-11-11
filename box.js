class Box{
    constructor(x,y,width,height){

        var box1 ={
            restitution: 1
        }
    
        this.body = Bodies.rectangle(x,y,width,height,box1);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    




    }

    display(){
     
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);

    }
}
