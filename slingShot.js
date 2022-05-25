class SlingShot {
    constructor(bodyA,pointB){
        this.bodyA = bodyA
        this.pointB = pointB

        var options = {
       bodyA:bodyA,
       pointB:pointB,
       stiffness:0.04,
       length:10
    }
    this.sling = Constraint.create(options)
    this.slingImg1 = loadImage("sling1.png")
    this.slingImg2 = loadImage("sling2.png")
    this.slingImg3 = loadImage("sling3.png")
    World.add(world,this.sling)
    }
    display(){
    image(this.slingImg1,200,20)
    image(this.slingImg2,170,20)
    
    if(this.sling.bodyA){
        var pointA =this.sling.bodyA.position
    var pointB = this.pointB
    strokeWeight(3)
   
    if(pointA.x < 220){
        console.log("Inside")
        line(pointA.x-20,pointA.y,pointB.x-10,pointB.y)
        line(pointA.x-20,pointA.y,pointB.x+30,pointB.y)
        image(this.slingImg3,pointA.x-30,pointA.y-10,15,30)
    }
    else{
        console.log("outside")
        line(pointA.x+25,pointA.y,pointB.x-10,pointB.y)
        line(pointA.x+25,pointA.y,pointB.x+30,pointB.y)
        image(this.slingImg3,pointA.x+25,pointA.y-10,15,30)
    }
    }
    
        
    }

    fly(){
    this.sling.bodyA = null
    console.log("fly")

    }   

    attach(body){
        this.sling.bodyA = body
    }
}