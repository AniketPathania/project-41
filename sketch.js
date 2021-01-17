const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;

var engine, world;
var drops = [];
var rand;

var maxDrops=100;

var thunderCreatedFrame=0;

function preload(){
    thunder1 = loadImage("images/1.png");
    thunder2 = loadImage("images/2.png");
    thunder3 = loadImage("images/3.png");
    thunder4 = loadImage("images/4.png");
    walking = loadAnimation("images/walking_8.png","images/walking_7.png",
    "images/walking_6.png","images/walking_5.png","images/walking_4.png","images/walking_3.png",
    "images/walking_2.png","images/walking_1.png");
    bg = loadImage("images/bg.jpg");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(600,600);
    umbrella = new Umbrella(300,400);

    man =createSprite(300,470);
    man.addAnimation("running",walking)
    man.scale = 0.38;
    
    //creating drops
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(50,600), random(50,500)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
  background(bg); 

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(50,370), random(40,90), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
          
            break;
            case 2: thunder.addImage(thunder2);

            break; 
            case 3: thunder.addImage(thunder3);

            break;
            case 4: thunder.addImage(thunder4);

            break;
            default: break;
        }
        thunder.scale = random(0.2,1)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].updateY()
        
    }

    drawSprites();
}   
