class Snow{
    constructor(x,y){
        var options={
            'restitution':0.9,
             'friction':0.9,

        }
        this.radius=45;
        this.image=loadImage("snow5.webp");
        this.body=Bodies.circle(x,y,40,40,20,options);
        World.add(world,this.body);
 }
 display(){
     var pos=this.body.position;
     imageMode(CENTER);
     image(this.image,pos.x,pos.y,this.radius)
 }
}