class  Ground{
    constructor(){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(200,390,400,30,options);
        World.add(world,this.body);
    }
    display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y, 400, 30); 
    }
}