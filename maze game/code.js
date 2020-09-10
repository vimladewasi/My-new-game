var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// create maze and change its color
var maze1 = createSprite(0,0,20,800);
maze1.shapeColor = "lightblue";
var maze2 = createSprite(0,0,800,20);
maze2.shapeColor = "lightblue";
var maze3 = createSprite(400,400,20,800);
maze3.shapeColor = "lightblue";
var maze4 = createSprite(0,400,800,20);
maze4.shapeColor = "lightblue";

var maze5 = createSprite(200,46,300,10);
maze5.shapeColor = "black";
var maze6 = createSprite(196,345,300,10);
maze6.shapeColor = "black";
var maze7 = createSprite(48,172,10,260);
maze7.shapeColor = "black";
var maze8 =createSprite(350,195,10,309);
maze8.shapeColor = "black";

var maze9 = createSprite(89,198,10,210);
maze9.shapeColor = "lightblue";
var maze10 = createSprite(196,96,209,10);
maze10.shapeColor = "lightblue";
var maze11 = createSprite(299,174,10,160);
maze11.shapeColor = "lightblue";
var maze12 = createSprite(195,300,207,10);
maze12.shapeColor ="lightblue";

var maze13 = createSprite(147,169,10,50);
maze13.shapeColor = "black";
var maze14 = createSprite(195,144,100,10);
maze14.shapeColor = "black";
var maze15 = createSprite(246,190,10,100);
maze15.shapeColor = "black";
var maze16 = createSprite(199,240,100,10);
maze16.shapeColor = "black";

// create player
var Player = createSprite(195,189,25,25);
Player.shapeColor ="red";
// create target
var Target = createSprite(366,27,25,25);
Target.shapeColor ="green";

// variable to store different states of game
var gameState ="serve";

// variable to keep the score
//var Playerscore = 0;
//var Targetscore = 0;

function draw() {
  background("yellow");
  
  
 //if(gameState ==="serve"){
  // text("press arrow keys",174,112);
  //}
  
   //display score
 // text(Playerscore,170,20);
  //text(Targetscore,130,20);

// movement of the player 
  if(keyDown("up")){
    Player.velocityX =0;
    Player.velocityY =-2;
  } 
  
  if(keyDown("down")){
    Player.velocityX =0;
    Player.velocityY =2;
  } 
   
  if(keyDown("left")){
    Player.velocityX =-2;
    Player.velocityY =0;
  } 
   
  if(keyDown("right")){
    Player.velocityX = 2;
    Player.velocityY =0;
  } 
  
  createEdgeSprites();
  
  
  Player.bounceOff(maze5);
  Player.bounceOff(maze6);
  Player.bounceOff(maze7);
  Player.bounceOff(maze8);
  Player.bounceOff(maze9);
  Player.bounceOff(maze10);
  Player.bounceOff(maze11);
  Player.bounceOff(maze12);
  Player.bounceOff(maze13);
  Player.bounceOff(maze14);
  Player.bounceOff(maze15);
  Player.bounceOff(maze16);
  
  Target.bounce(Player);
  if(Player.x >400||Player.x <0||Player.y >400||Player.y <0){
   textSize(30);
    text("You Lose",150,78);
  }
  
   if(keyDown("ARROW")&&gameState ==="serve"){
   serve();
   gameState ="play";
   }
 if(Target.x >400 || Target.x <0 || Target.y >400 || Target.y <0){
  // text("you win",174,112);
  reset();
  gameState ="serve";
 } 
 
 if(Player.x >400 || Player.x <0 ||Player.y > 400 || Player.y <0){
  text("You Lose",145,75);
 gameState = "over";
 Player.x = 195;
 Player.y = 189;
// text("press R to reset the game",145,130);
 }
 
 if(Target.x >400 || Target.x <0 ||Target.y > 400 || Target.y <0){
  text("You Win",190,75);
 gameState = "over";
 Player.x = 195;
 Player.y = 189;
 text("press R to reset the game",145,130);
 }
 
   if (keyDown("r") && gameState === "over") {
    gameState = "serve";
   }
  drawSprites();
  
}
function serve(){
  text("press arrow keys",174,112);
  Player.velocityX = -2;
  gameState = "serve";
}
function reset(){
  Player.x =194;
  Player.y =187;
  Player.velocityX =-2;
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
