const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;
var log,log2,log3,log4
var ground;
var box,box2,box3,box4,box5
var bird;
var pig,pig2;
var bgImg;
var slingShot;
var platForm
var gameState = "onState"
var score = 0
function preload(){
    bgImg = loadImage("bg.png");
}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20)
    box = new Box(700,320,70,70)
    box2 = new Box(920,320,70,70)
    box3 = new Box(700,240,70,70)
    box4 = new Box(920,240,70,70)
    pig2 = new Pig(810,220)
    log = new Log(810,260,300,PI/2)
    log2 = new Log(810,180,300,PI/2)
    bird = new Bird(150,250)
    pig = new Pig(810,350)
    box5 = new Box(810,160,70,70)
    log3 = new Log(800,95,150,PI/4)
    log4 = new Log(830,90,150,PI/-4)
    slingShot = new SlingShot(bird.body,{
        x:200,
        y:50
    })
    platForm = new Ground(150,305,300,170)
}

function draw(){
    background(bgImg);
    textSize(25)
    text("Score:"+score,width-300,50)
    text(mouseX+","+mouseY,30,45)
    Engine.update(engine);
    ground.display()
    box.display()
    box5.display()
    log.display()
    bird.display()
    pig.display()
    box2.display()
    box3.display()
    box4.display()
    pig2.display()
    log2.display()
    log3.display()
    log4.display()
    slingShot.display()
   platForm.display()
}

function mouseDragged () {
    if(gameState !== "launched"){
        Matter.Body.setPosition(bird.body,{
            x:mouseX,
            y:mouseY
        })
    }
   
    console.log("hi")
}

function mouseReleased () {
    slingShot.fly ()
    gameState = "launched"
}

function keyPressed() {
if(keyCode === 32){
    bird.trajectory = []
    Matter.Body.setPosition(bird.body,{
        x:200,
       y:50
   })
    slingShot.attach(bird.body)
}
}