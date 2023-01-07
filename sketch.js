
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
  
}

function draw() 
{
  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("crimson");
    
  }
  
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("aqua");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("gold");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("lime");
  }


  
  drawSprites();
}

