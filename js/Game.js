class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    textSize(30);
    text("Game Start",120,100);
    Player.getplayerInfo();
    if(allPlayers!==undefined){
      var position=130;
      for(var plr in allPlayers){
        textSize(15);
        if(plr==="player"+player.index){
          fill("blue")
        }else{
          fill("black");
        }
        text(allPlayers[plr].name+":"+allPlayers[plr].distance,200,position);
        position+=20;
      }
    }
    if(keyDown(UP_ARROW)&&player.index!==null){
      player.distance+=50;
      player.update();
    }
  }
}
