var POFAPO;

var PLAY=0;
var END=1;
var gameState = PLAY;
var MINESGroup,Mine;

var score=0;

function preload(){
  
    pofapo=loadImage("download-removebg-preview.png");
  path=loadImage("tower.png");
  mine=loadImage("tu.png");
 sound=loadSound("mixkit-game-level-music-689 (1).wav")

  
}

function setup() {
  createCanvas(600, 600);
  sound.loop();
  Path=createSprite(300,300);
  Path.addImage(path);
  Path.velocityY=+3;
  Path.scale=2;
  
  POFAPO=createSprite(300,300);
  POFAPO.addImage(pofapo);
  POFAPO.scale=0.5
  POFAPO.setCollider("circle",0,0,40);
  POFAPO.debug = false;
  
  MINESGroup=createGroup();
  
  score=0;
  
}

function draw() {
  background(220);
  
  
  if(gameState === PLAY){
  
    
    
    spownMine();
    
    
  if(Path.y > 600){
     Path.y=300;
     }
      score = score + Math.round(frameCount/60);
  
   if(keyDown("space")&&POFAPO.y>100){
    POFAPO.velocityY=-3;
   }
    camera.x=width/2
    camera.y=POFAPO.y
    
  POFAPO.velocityY=POFAPO.velocityY+0.5;
  
   if(keyDown('left')){ 
     POFAPO.x= POFAPO.x-5
  }
  
  if(keyDown('right')){
     POFAPO.x= POFAPO.x+5
  }
  
     if(POFAPO.y>600){
       gameState=END;
    }
    
    if(MINESGroup.isTouching(POFAPO)){
      gameState=END;
    }
    
    
  
    drawSprites();
    textSize(30);
    fill("white")
  text("Score: "+ score, 440,camera.y);
  } 
  
  if( gameState === END){
    
    background(0);
    textSize(30);
    fill("white")
    text("GAMEOVER",200,camera.y);
    
   
  }
}


function spownMine(){
   if (frameCount % 120 === 0) {        
     Mine = createSprite(0,-20,40,10);
    Mine.x = Math.round(random(200,400));
   Mine.addImage(mine);
    Mine.scale = 0.4;
    Mine.velocityY = +3
    
     //assign lifetime to the variable
    Mine.lifetime = 200;
    
    //adjust the depth
    Mine.depth = POFAPO.depth;
    POFAPO.depth = POFAPO.depth + 1;
    
     MINESGroup.add(Mine);
     
    } 
}



