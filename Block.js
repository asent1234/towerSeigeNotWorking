class Block{
    constructor(x, y, width, height, angle, color) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic': false
        }
        this.body = Bodies.rectangle(x/2, y/2, width, height, options);
        this.width = width;
        this.height = height;
        this.color = color;
        this.image = loadImage("sprites/wood2.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER)
        fill(this.color)
        rect(this.body.position.x, this.body.position.y, this.width, this.height)
        imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}