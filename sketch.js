let playerX = 200;
let playerY = 200;
let targetX = 50;
let targetY = 50;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('Pink');
  
  noStroke();
  
  if(playerX + 15 >= targetX && playerX - 15 <= targetX) {
    if(playerY + 15 >= targetX && playerX <+ targetX)
      Background('blue')
  }
  
  circle(playerX,playerY,25)
  circle(targetX, targetY, 5);

  
  if(keyIsDown(RIGHT_ARROW) == true) {
    playerX = playerX + 5;
  }
    if(keyIsDown(LEFT_ARROW)) {
    playerX = playerX - 5;  
    }
  
  if(keyIsDown(UP_ARROW) == true) {
    playerY = playerY - 5;
  }
    
    if(keyIsDown(DOWN_ARROW)) {
    playerY = playerY + 5
    } 
  console.log('hey alex')

}