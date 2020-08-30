class TREX {
    constructor(){

    }

    

    jump(){
        if(keyDown("space") && trex.y >= 159) {
            jumpSound.play();
            trex.velocityY = -14;
        }
        
        trex.velocityY = trex.velocityY + 0.8
    }

    dead(){
        if(obstaclesGroup.isTouching(trex)&&gameState==PLAY){
            dieSound.play();  
            gameState = END;
              
          }
    }

}