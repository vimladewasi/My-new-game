var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10; 
var wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20;
var wall21, wall22; 

var family1, family2, family3, family4, kid;
var family1_img, family2_img, family3_img, family4_img, kid_img;

var task1, task2,task3, task4, task1_img, task2_img, task3_img, task4_img;

var wall23, wall24;

var Score = 0;

var highlight1,highlight2,highlight3,highlight4;

var market, office, park ,hospital;

function preload(){
  kid_img = loadImage("Image/kid.png");
  family1_img =loadImage("Image/father.png");
  family2_img = loadImage("Image/mother.png");
  family3_img =loadImage("Image/grandfather.png");
  family4_img = loadImage("Image/grandmother.png");
  task1_img = loadImage("Image/office.png");
  task2_img = loadImage("Image/market.png");
  task3_img = loadImage("Image/park.png");
  task4_img =loadImage("Image/hospital1.png");
  
}

function setup(){ 
  createCanvas(600,600);
  //creating the maze
   wall1 = createSprite(20,70,70,20);
   wall1.shapeColor = "brown";
   wall2 = createSprite(100,40,20,80);
   wall2.shapeColor = "brown";
   wall3 = createSprite(80,140,100,20);
   wall3.shapeColor = "brown";
   wall4 = createSprite(50,260,20,80);
   wall4.shapeColor = "brown";
   wall5 = createSprite(130,220,90,20);
   wall5.shapeColor = "brown";
   wall6 = createSprite(10,260,100,20);
   wall6.shapeColor = "brown";
   wall7 = createSprite(160,120,20,85);
   wall7.shapeColor = "brown";
   wall8 = createSprite(150,20,100,20);
   wall8.shapeColor = "brown";
   wall9 = createSprite(250,60,20,90);
   wall9.shapeColor = "brown";
   wall10 = createSprite(270,140,90,20);
   wall10.shapeColor = "brown";
   wall11 = createSprite(330,44,100,20);
   wall11.shapeColor = "brown";
   wall12 = createSprite(340,110,20,80);
   wall12.shapeColor = "brown";
   wall13 = createSprite(220,250,20,100);
   wall13.shapeColor = "brown";
   wall14 = createSprite(330,210,136,20);
   wall14.shapeColor = "brown";
   wall15 = createSprite(100,300,20,100);
   wall15.shapeColor = "brown";
   wall16 = createSprite(180,310,100,20);
   wall16.shapeColor = "brown";
   wall17 = createSprite(30,352,20,100);
   wall17.shapeColor = "brown";
   wall18 = createSprite(175,352,20,90);
   wall18.shapeColor = "brown";
   wall19 = createSprite(280,290,20,90);
   wall19.shapeColor = "brown";
   wall20 = createSprite(350,270,120,20);
   wall20.shapeColor = "brown";
   wall21 = createSprite(250,394,90,20);
   wall21.shapeColor = "brown";
   wall22 = createSprite(350,370,20,110);
   wall22.shapeColor = "brown";

  
   kid = createSprite(50,430,20,20);
   kid.addImage("kid",kid_img);
   kid.scale =0.5;

   family1 = createSprite(80,420,20,20);
   family1.addImage("father",family1_img);
   family1.scale =0.5;
   
   family2 = createSprite(120,420,20,20);
   family2.addImage("mother",family2_img);
   family2.scale = 0.5;
   
   family3 = createSprite(160,420,20,20);
   family3.addImage("grandfather",family3_img);
   family3.scale =0.5;

   family4 = createSprite(190,420,20,20);
   family4.addImage("grandmother",family4_img);
   family4.scale = 0.5;

   task1 = createSprite(215,110,20,20);
   task1.addImage("office",task1_img);
   task1.scale =0.05;

   task2 = createSprite(20,225,20,20);
   task2.addImage("market",task2_img);
   task2.scale =0.04;

   task3 = createSprite(380,100,20,20);
   task3.addImage("park",task3_img);
   task3.scale =0.2;

   task4 = createSprite(20,40,20,20);
   task4.addImage("hospital",task4_img);
   task4.scale =0.05;

   highlight1 = createSprite(210,70,15,15);
   highlight2 = createSprite(20,195,15,15);
   highlight3 = createSprite(380,70,15,15);
   highlight4 = createSprite(20,10,15,15);

   wall23 =createSprite(410,230,10,500);
   wall23.shapeColor ="yellow";

   wall24 = createSprite(200,480,430,10);
   wall24.shapeColor ="yellow";

}

function draw(){
  background("pink");


  if(keyDown("UP_ARROW")) 
  {
   kid.velocityX=0;
   kid.velocityY=-3;
  }
  
  if (keyDown(DOWN_ARROW))
  {    
   kid.velocityX=0;
   kid.velocityY=3;
  }
  
  if (keyDown(LEFT_ARROW)) 
  {  
   kid.velocityX=-3;
   kid.velocityY=0;
  }
  
  if (keyDown(RIGHT_ARROW))
  { 
   kid.velocityX=3;
   kid.velocityY=0;
  }

  edges = createEdgeSprites();
  
  family1.collide(edges);
  family2.collide(edges);
  family3.collide(edges);
  family4.collide(edges);
  kid.collide(edges);

  kid.bounceOff(wall1);
  kid.bounceOff(wall2);
  kid.bounceOff(wall3);
  kid.bounceOff(wall4);
  kid.bounceOff(wall5);
  kid.bounceOff(wall6);
  kid.bounceOff(wall7);
  kid.bounceOff(wall8);
  kid.bounceOff(wall9);
  kid.bounceOff(wall10);
  kid.bounceOff(wall11);
  kid.bounceOff(wall12);
  kid.bounceOff(wall13);
  kid.bounceOff(wall14);
  kid.bounceOff(wall15);
  kid.bounceOff(wall16);
  kid.bounceOff(wall17);
  kid.bounceOff(wall18);
  kid.bounceOff(wall19);
  kid.bounceOff(wall20);
  kid.bounceOff(wall21);
  kid.bounceOff(wall22);
    
     
  family1.collide(wall1);
  family1.collide(wall2);
  family1.collide(wall3);
  family1.collide(wall4);
  family1.collide(wall5);
  family1.collide(wall6);
  family1.collide(wall7);
  family1.collide(wall8);
  family1.collide(wall9);
  family1.collide(wall10);
  family1.collide(wall11);
  family1.collide(wall12);
  family1.collide(wall13);
  family1.collide(wall14);
  family1.collide(wall15);
  family1.collide(wall16);
  family1.collide(wall17);
  family1.collide(wall18);
  family1.collide(wall19);
  family1.collide(wall20);
  family1.collide(wall21);
  family1.collide(wall22);

  family2.collide(wall1);
  family2.collide(wall2);
  family2.collide(wall3);
  family2.collide(wall4);
  family2.collide(wall5);
  family2.collide(wall6);
  family2.collide(wall7);
  family2.collide(wall8);
  family2.collide(wall9);
  family2.collide(wall10);
  family2.collide(wall11);
  family2.collide(wall12);
  family2.collide(wall13);
  family2.collide(wall14);
  family2.collide(wall15);
  family2.collide(wall16);
  family2.collide(wall17);
  family2.collide(wall18);
  family2.collide(wall19);
  family2.collide(wall20);
  family2.collide(wall21);
  family2.collide(wall22);
  
  family3.collide(wall1);
  family3.collide(wall2);
  family3.collide(wall3);
  family3.collide(wall4);
  family3.collide(wall5);
  family3.collide(wall6);
  family3.collide(wall7);
  family3.collide(wall8);
  family3.collide(wall9);
  family3.collide(wall10);
  family3.collide(wall11);
  family3.collide(wall12);
  family3.collide(wall13);
  family3.collide(wall14);
  family3.collide(wall15);
  family3.collide(wall16);
  family3.collide(wall17);
  family3.collide(wall18);
  family3.collide(wall19);
  family3.collide(wall20);
  family3.collide(wall21);
  family3.collide(wall22);

  family4.collide(wall1);
  family4.collide(wall2);
  family4.collide(wall3);
  family4.collide(wall4);
  family4.collide(wall5);
  family4.collide(wall6);
  family4.collide(wall7);
  family4.collide(wall8);
  family4.collide(wall9);
  family4.collide(wall10); 
  family4.collide(wall11);
  family4.collide(wall12);
  family4.collide(wall13);
  family4.collide(wall14);
  family4.collide(wall15);
  family4.collide(wall16);
  family4.collide(wall17);
  family4.collide(wall18);
  family4.collide(wall19);
  family4.collide(wall20);
  family4.collide(wall21);
  family4.collide(wall22);

  //kid.bounce(family1);
 // kid.bounce(family2);
  //kid.bounce(family3);
  //kid.bounce(family4);

  
  family1.collide(family2);
  family1.collide(family3);
  family1.collide(family4);
  family2.collide(family3);
  family2.collide(family4);
  family3.collide(family4);


  
 // highlighting the task
  rand = Math.round(random(1,4));

  if(frameCount%70==0){
    if(rand===1){
      highlight1.shapeColor ="blue";
      highlight2.shapeColor ="grey";
      highlight3.shapeColor ="grey";
      highlight4.shapeColor ="grey";
    }
    else if(rand===2){
      highlight2.shapeColor ="blue";
      highlight1.shapeColor ="grey";
      highlight3.shapeColor ="grey";
      highlight4.shapeColor ="grey";
    }
    else if(rand===3){
      highlight3.shapeColor ="blue";
      highlight1.shapeColor ="grey";
      highlight2.shapeColor ="grey";
      highlight4.shapeColor ="grey";
    }
    else if(rand===4){
      highlight4.shapeColor ="blue";
      highlight1.shapeColor ="grey";
      highlight2.shapeColor ="grey";
      highlight3.shapeColor ="grey";
    }
  }
    
  //pick up the family memeber
  if(kid.isTouching(family1)){
    family1.x = kid.x;
    family1.y = kid.y +15;
  }

  if(kid.isTouching(family2)){
    family2.x = kid.x;
    family2.y = kid.y +15;
  }

  if(kid.isTouching(family3)){
    family3.x = kid.x;
    family3.y = kid.y +15;
  }

  if(kid.isTouching(family4)){
    family4.x = kid.x;
    family4.y = kid.y +15;
  }

   // logic for Score
  if(family1.collide(task1)&& kid.collide(task1)&& highlight1.shapeColor == "blue"){
    Score = Score+5;
    family1.x =80;
    family1.y =420;
  }
  else if(family2.collide(task1)&& kid.collide(task1)){
    Score = Score-5;
    family2.x =120;
    family2.y =420;
  }
  else if(family3.collide(task1)&& kid.collide(task1)){
    Score = Score-5;
    family3.x =160;
    family3.y =420;
  }
  else if(family4.collide(task1)&& kid.collide(task1)){
    Score = Score-5;
    family4.x =190;
    family4.y =420;
  }
  else if(family2.collide(task2)&& kid.collide(task2)&& highlight2.shapeColor=="blue")
  {
    Score = Score+5;
    family2.x =120;
    family2.y =420;
  }
  else if(family1.collide(task2)&& kid.collide(task2)){
    Score = Score-5;
    family1.x =80;
    family1.y =420;
  }
  else if(family3.collide(task2)&& kid.collide(task2)){
    Score = Score-5;
    family3.x =160;
    family3.y =420;
  }
  else if(family4.collide(task2)&& kid.collide(task2)){
    Score = Score-5;
    family4.x =190;
    family4.y =420;
  }
  else if(family3.collide(task3)&& kid.collide(task3)&& highlight3.shapeColor=="blue"){
    Score = Score+5;
    family3.x =160;
    family3.y =420;
  }
  else if(family1.collide(task3)&& kid.collide(task3)){
    Score = Score-5;
    family1.x =80;
    family1.y =420;
  }
  else if(family2.collide(task3)&& kid.collide(task3)){
    Score = Score-5;
    family2.x =120;
    family2.y =420;
  }
  else if(family4.collide(task3)&& kid.collide(task3)){
    Score = Score-5;
    family4.x =190;
    family4.y =420;
  }
  else if(family4.collide(task4)&& kid.collide(task4)&& highlight4.shapeColor=="blue"){
    Score = Score+5;
    family4.x =190;
    family4.y =420;
  }
  else if(family1.collide(task4)&& kid.collide(task4)){
    Score = Score-5;
    family1.x =80;
    family1.y =420;
  }
  else if(family2.collide(task4)&& kid.collide(task4)){
    Score = Score-5;
    family2.x =120;
    family2.y =420;
  }
  else if(family3.collide(task4)&& kid.collide(task4)){
    Score = Score-5;
    family3.x =160;
    family3.y =420;
  }

  form();
   
  drawSprites();
  
  fill("darkgreen")
  textSize(40);
  text(Score,550,52);
  text("Score:",420,50);
  
}

function form(){
 
  market = createSprite(557,175,20,30);
  market.addImage("market",task2_img);
  market.scale =0.05;

  office = createSprite(557,240,20,30);
  office.addImage("office",task1_img) ;
  office.scale =0.05;

  park = createSprite(557,300,20,30);
  park.addImage("park",task3_img);
  park.scale = 0.2;

  hospital = createSprite(557,370,20,30);
  hospital.addImage("hospital",task4_img);
  hospital.scale =0.06;

  var title = createElement('h2')
  title.html("Save Time For Family");
  title.position(100, 500);

  var instruction = createDiv('Game Instructions');
  instruction.style('font-size','23px');
  instruction.style('color','#ff0000');
  instruction.position(427,100)

  var gameinfo1 = createDiv('Mother ===>');
   gameinfo1.style('font-size','20px');
   gameinfo1.style('color','red');
   gameinfo1.position(430, 165)

  var gameinfo2 = createDiv('Father ===>');
   gameinfo2.style('font-size','20px');
   gameinfo2.style('color','red');
   gameinfo2.position(430, 230)

  var gameinfo3 = createDiv('Dada ===>');
  gameinfo3.style('font-size','20px');
  gameinfo3.style('color','red');
  gameinfo3.position(430, 295)
  
  var gameinfo4 = createDiv('Dadi ===>');
  gameinfo4.style('font-size','20px');
  gameinfo4.style('color','red');
  gameinfo4.position(430, 360)
}