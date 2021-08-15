class bob{
    constructor(x,y,radius)
    {

        var options={

            restitution:1.4
        }

        this.x=x;
        this.y=y;
        this.radius=radius;

        this.body.Bodies.circle(this.x,this.y,20,options)
        World.add(world, this.body);

    }

   display()

{
    var bobpos=this.body.position;
    push()

    rectMode(CENTER)
    ellipse(0,0,this.radius,this.radius);
    
    pop()
}



























}