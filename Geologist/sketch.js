const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    
    box2 = new Box(920,320,200,200);
    
    pig1 = new Box(920,250)
    
    iron = new Iron(800,200,100,10);  
    
    pig1 = new Pig(800, 300);
    log1 = new Log(810,260,5,5 );
    log2 = new Log(810,260,5,5 );
    log3 = new Log(810,260,5,5 );
    log4 = new Log(810,260,5,5 );
    log5 = new Log(810,260,5,5 );
    log6 = new Log(810,260,5,5 );
    log7 = new Log(810,260,5,5 );
    log8 = new Log(810,260,5,5 );
    log9 = new Log(810,260,5,5 );
    log10 = new Log(810,260,5,5 );
    log11 = new Log(810,260,5,5 );
    log12 = new Log(810,260,5,5 );
    log13 = new Log(810,260,5,5 );
    log14 = new Log(810,260,5,5 );
    log15 = new Log(810,260,5,5 );
    log16 = new Log(810,260,5,5 );
    log17 = new Log(810,260,5,5 );
    log18 = new Log(810,260,5,5 );
    log19 = new Log(810,260,5,5 );
    log20 = new Log(810,260,5,5 );
      

    
    
   

    

    bird = new Bird(100,100);

}

function draw(){
    background("lightblue");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
   
 

    box2.display();
    ground.display();
    
    iron.display();

    pig1.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display();
    log8.display();
    log9.display();
    log10.display();
    log11.display();
    log12.display();
    log13.display();
    log14.display();
    log15.display();
    log16.display();
    log17.display();
    log18.display();
    log19.display();
    log20.display();
    
    bird.display();
}