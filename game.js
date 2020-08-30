class GAME {
    constructor(){

    }

    playState(){
        if (gameState===PLAY){
            score = score + Math.round(getFrameRate()/60);
            trex.velocityX = 6 + 3*score/100;
            trex.collide(invisibleGround);
            cLOUD.display();
            oBSTACLE.display();
            
            if (score>0 && score%100 === 0){
              checkPointSound.play();
            }
        }

    }

    endState(){
        if (gameState === END) {
            gameOver.visible = true;
            restart.visible = true;
            gameOver.x = trex.x + 300;
            restart.x = trex.x + 300;
            
            //set velcity of each game object to 0
            ground.velocityX = 0;
            trex.velocityY = 0;
            trex.velocityX = 0;
            obstaclesGroup.setVelocityXEach(0);
            cloudsGroup.setVelocityXEach(0);
            
            //change the trex animation
            trex.changeAnimation("collided",trex_collided);
            
            //set lifetime of the game objects so that they are never destroyed
            obstaclesGroup.setLifetimeEach(-1);
            cloudsGroup.setLifetimeEach(-1);
            
            if(mousePressedOver(restart)) {
              reset();
            }
          }
    }
}