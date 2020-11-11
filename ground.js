class Ground{
    constructor(x,y,width,height){

        var ground1 ={
            isStatic: true
        }
    
        this.body = Bodies.rectangle(x,y,width,height,ground1);
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
