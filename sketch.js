//creating all the elements
var bow,bowy
var red,ballonred,redGroup
var pink,ballonpink,pinkGroup
var green,ballongreen,greenGroup
var blue,ballonblue,blueGroup
var background2,ground1
var arrows,createarrows
var selectballon
var sharparrows,arrowsGroup
var score=0
function preload(){
 //loading the images
  bowy=loadImage('bow0.png');  ballonred=loadImage('red_balloon0.png') ;         ballonpink=loadImage('pink_balloon0.png');        ballongreen=loadImage('green_balloon0.png') ; ballonblue=loadImage('blue_balloon0.png') ;  
ground1=loadImage('background0.png');                         createarrows=loadImage('arrow0.png');                   
}  

  

function setup() {
createCanvas(600, 600); 
background('white')
drawSprites();
  
background2=createSprite(300,300,600,600)
background2.velocityX=2
 
bow2=createSprite(500,200,5,5)  
} 



function draw(){
  drawSprites();
redGroup=new Group();
blueGroup=new Group();
greenGroup=new Group();
pinkGroup=new Group();
arrowsGroup=new Group();

  
  
 background2.addAnimation("back",ground1);  background2.scale='20'
  
bow2.addAnimation("image",bowy)
bow2.y=World.mouseY

  if(background2.x>400){
     background2.x=200
  } 
//creating arrows
function arrooows(){
if(keyDown('space')){
   arrows=createSprite(500,200,15,15)
   arrows.velocityX=-2
   arrows.y=bow2.y
   arrows.addAnimation("sharp",createarrows)
   arrows.scale=0.3
  arrows.lifetime=250
  arrowsGroup.add(arrows)
}
}

arrooows();
//creating red ballons

function redballon(){
  var red=createSprite(0,Math.round(random(20,600)),10,10);
  red.addAnimation("dark red",ballonred)
  red.velocityX=3
  red.lifetime=130
  red.scale=0.1
  redGroup.add(red)
}  

  

  //creating blueballon
  function blueballon(){
  var blue=createSprite(0,Math.round(random(20,590)),10,10);
  blue.addAnimation("dark blue",ballonblue)
  blue.velocityX=3
  blue.lifetime=130
  blue.scale=0.1
  blueGroup.add(blue)
  
}
  
  //creating greenballon
  function greenballon(){
  var green=createSprite(0,Math.round(random(20,490)),10,10);
  green.addAnimation("dark green",ballongreen)
  green.velocityX=3
  green.lifetime=130
  green.scale=0.1
  greenGroup.add(green)
  
}


 //creating pinkballons
  function pinkballon(){
  var pink=createSprite(0,Math.round(random(20,500)),10,10);
  pink.addAnimation("dark pink",ballonpink)
  pink.velocityX=3
  pink.lifetime=130
  pink.scale=1
  pinkGroup.add(pink)
}
 
  

    
 var selectballon=Math.round(random(1,4)) 
 console.log(selectballon)
  
 if(frameCount%80==0) {
 if(selectballon==1){
   redballon();
 }else if(selectballon==2){
   pinkballon();
 }else if(selectballon==3){
   blueballon();
 }else if(selectballon==4){
   greenballon();
 }
  

}
text('score  '+score,500,70)  
textSize(20);
  

  

if(arrowsGroup.isTouching(redGroup)){
 redGroup.destroyEach();
  arrowsGroup.destroyEach();
  score=score+5;
   
   }
if(arrowsGroup.isTouching(blueGroup)){
blueGroup.destroyEach();
  arrowsGroup.destroyEach();
  score=score+3
}  
 if(arrowsGroup.isTouching(pinkGroup)){
  pinkGroup.destroyEach();
  arrowsGroup.destroyEach();
  score=score+5;
 }
if(arrowsGroup.isTouching(greenGroup)){
 greenGroup.destroyEach();
  arrowsGroup.destroyEach();
  score=score+5;
} 
  


} 









