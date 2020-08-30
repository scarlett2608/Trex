class GROUND {
    constructor(){

    }

    /*display(){
        ground = createSprite(200,180,400,20);
        ground.addImage("ground",groundImage);
        ground.x = ground.width /2;
        ground.velocityX = -(6 + 3*score/100);
    }*/

    infinite(){
        if (ground.x - trex.x <= -54){
            ground.x = ground.x + 1132;
          }
    }
}