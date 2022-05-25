class Base {
   constructor(x,y,width,height,angle){
       this.x = x
       this.y = y
       this. width = width
       this. height = height
       this.angle = angle
       this.image = loadImage("base.png")

      var options = {
         restitution:0.8,
         friction:1,
         density:1
      }
      this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
      World.add(world,this.body)
   }
   display(){
      var position = this.body.position
      var angle = this.body.angle
      push()
      translate(position.x,position.y)
      rotate(angle)
      imageMode(CENTER)
      image(this.image,0,0,this.width,this.height)
      pop()
   }
}