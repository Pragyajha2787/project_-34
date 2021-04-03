class Ball {
    constructor(x,y,r){
        var options ={
            frictionAir : 1,
            density : 1
        };
        this.x = x;
        this.y = y;
        this.r = r;
        this.image  =loadImage("images/superhero.png");
        this.body =Bodies.circle(this.x,this.y,(this.r)/2,options)

        World.add(world,this.body)
    }
    display(){
        var angle = this.body.angle;
        var position = this.body.position;
        push();
        translate(position.x,position.y);
        rotate(angle);
        image(this.image,0,-30,this.r+200,this.r)
        // ellipse(0,0,this.width,this.height);
        pop();


    }
    


}