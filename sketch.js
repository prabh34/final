var skull,skullImg,m1,m1Img,m2,m2Img,m4,m4Img,ball,ballImg,m3,m3Img;
var wall1,wall2,wall3,wall4;
var ob1,ob2,ob3,ob4,ob5,ob6,ob7,ob8,ob9,ob10,ob11,ob12,ob13,ob14,ob15,ob16,ob17,ob18,ob19,ob20,ob21,ob22,ob23;
var rotation=-30;



function preload() {
  skullImg=loadImage("skull.png");
  m1Img=loadImage("m1.png");
  m3Img=loadImage("m3.png");
  m4Img=loadImage("m4.png");
  ballImg=loadImage("ball.png");
  m2Img=loadImage("m2.png");


}
function setup() {

createCanvas(1000,500);
rectMode(CENTER);
wall1=createSprite(500,20,800,16);
wall2=createSprite(500,480,800,16);
wall3=createSprite(100,250,16,475);
wall4=createSprite(900,250,16,475);
ob1=createSprite(710,430,13,100);
ob2=createSprite(480,430,13,100);
ob3=createSprite(240,430,13,100);
ob4=createSprite(595,365,150,13);
ob5=createSprite(355,365,150,13);
ob6=createSprite(760,70,13,90);
ob7=createSprite(820,180,95,10);
ob8=createSprite(800,395,60,10);
ob9=createSprite(700,255,11,80);
ob10=createSprite(845,315,90,11);
ob11=createSprite(140,360,95,11);
ob12=createSprite(230,90,200,12);
ob13=createSprite(140,157,90,12);
ob14=createSprite(360,320,10,76);
fill("yellow")
ob15=createSprite(527,90,9,74);
fill("yellow")
ob16=createSprite(400,215,11,44);

ob17=createSprite(414,215,11,47);
ob17.rotation=rotation;
ob18=createSprite(427,215,11,44);
//ob19=createSprite(442,215,44,11);
ob19=createSprite(509,215,10,44);

ob20=createSprite(509+12,198,26,10);
ob21=createSprite(529,206,10,15);
ob22=createSprite(509+12,211,26,10);
ob22=createSprite(520,220,11,37);
ob22.rotation=rotation-12;






skull=createSprite(130,445,13,13)
skull.addImage(ballImg);
skull.scale=0.1
m1=createSprite(640,80,13,13);
m1.addImage(m1Img);
m1.scale=0.08
m2=createSprite(805,232,13,13);
m2.addImage(m2Img);
m2.scale=0.08
m3=createSprite(430,80,13,13);
m3.addImage(m3Img);
m3.scale=0.08


}
function draw() {
  background("black");
  text(mouseX+","+mouseY,mouseX,mouseY);
  if(keyDown(LEFT_ARROW)){
    skull.x=skull.x-5;
  }
  if(keyDown(RIGHT_ARROW)){
    skull.x=skull.x+3;

  }
  if(keyDown(UP_ARROW)){
    skull.y=skull.y-3
  }
  if(keyDown(DOWN_ARROW)){
    skull.y=skull.y+3
  }
  ellipse(453,215,30,45);
  ellipse(483,215,30,45);
  fill("black");
  ellipse(453,215,15,23);
  ellipse(483,215,15,23);

  drawSprites();
}