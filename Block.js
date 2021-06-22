class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Brick2.png");
      World.add(world, this.body);
      this.Visibility = 255;
    }
    display(){
      if(this.body.speed<3){
        console.log(this.body.speed);
      var pos= this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,40,40);
      
      }else{
        World.remove(world,this.body)
        push();
        this.Visibility = this.Visibility-5
        tint(255,this.Visibility);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
      }

    }
}