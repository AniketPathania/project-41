class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("images/walking_1.png",);
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 51;
        World.add(world, this.umbrella)
    }

    display(){
     /*   var pos = this.umbrella.position;
        imageMode(CENTER);
        image(pos.x,pos.y+70,300,300);
        */
    }
}