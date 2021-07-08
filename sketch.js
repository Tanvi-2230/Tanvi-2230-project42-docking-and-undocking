var bg, issImg, spaceCraft1Img, spaceCraft2Img, spaceCraft3Img, spaceCraft4Img;
var iss, spaceCraft;
var hasDocked = false;



function preload(){
 bg = loadImage("images/spacebg.jpg");
 issImg = loadImage("images/iss.png")
 spaceCraft1Img = loadImage("images/spacecraft1.png")
 spaceCraft2Img = loadImage("images/spacecraft2.png")
 spaceCraft3Img = loadImage("images/spacecraft3.png")
 spaceCraft4Img = loadImage("images/spacecraft4.png")
}




function setup() {
  createCanvas(1000,600);

  spaceCraft = createSprite(340,480);
  spaceCraft.addImage(spaceCraft1Img);
  spaceCraft.scale = 0.3;

  iss = createSprite(500, 250, 50, 50);
  iss.addImage(issImg);

  
  

  
}

function draw() {
  background(bg); 
  text("x:"+mouseX, 50, 30);
  text("y:"+mouseY, 50, 40);
  if(!hasDocked){
    spaceCraft.x = Math.round(random(spaceCraft.x-1.5, spaceCraft.x+1.5));
    if(keyDown(LEFT_ARROW)) {
      spaceCraft.x = spaceCraft.x-5;
      spaceCraft.addImage(spaceCraft4Img);
      spaceCraft.scale = 0.27;
    }else if(keyDown(RIGHT_ARROW)){
      spaceCraft.x = spaceCraft.x+5;
      spaceCraft.addImage(spaceCraft3Img)
      spaceCraft.scale = 0.27;
    }else if(keyDown(UP_ARROW)){
      spaceCraft.y = spaceCraft.y -5;
      spaceCraft.addImage(spaceCraft2Img)
      spaceCraft.scale = 0.27;
    }else if(keyDown(DOWN_ARROW)){
      spaceCraft.y = spaceCraft.y +5;
      spaceCraft.addImage(spaceCraft2Img)
      spaceCraft.scale = 0.27;
    }else{
      spaceCraft.addImage(spaceCraft1Img);
      spaceCraft.scale = 0.3;
    }
  }
  
  if(spaceCraft.x>430 && spaceCraft.x<445 && spaceCraft.y>340 && spaceCraft.y<350){
    hasDocked = true;
    spaceCraft.addImage(spaceCraft1Img);
    spaceCraft.scale = 0.3;
    textSize(30);
    fill("white");
    text("DOCKING SUCCESSFUL ^-^", width/2-190, height/2+200);
  }




  drawSprites();
}