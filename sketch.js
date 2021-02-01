var box1,box2,box3,box4,box5;
var music,ground1,ground2,ground3,ground4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,700);

    //create 4 different surfaces
     box1=createSprite(735,516,90,20)
      box2=createSprite(571,516,90,20)
    box3=createSprite(183,516,90,20)
    box4=createSprite(400,516,90,20)
    box5=createSprite(720,461,20,20)
    box5.velocityY=7 
    box5.velocityX=7


    ground1=createSprite(651,537,3000,10)
    ground2=createSprite(800,697,10,3000)
    ground3=createSprite(25,425,10,3000)
    ground4=createSprite(246,8,3000,10)
    //create box sprite and give velocity

}

function draw() {
    background("grey");
    text(mouseX + ","+ mouseY,mouseX,mouseY,)

    box1.shapeColor="green"
  box2.shapeColor="orange"
  box3.shapeColor="blue"
  box4.shapeColor="purple"
box5.shapeColor="red"

box5.bounceOff(ground1);
box5.bounceOff(ground2);
box5.bounceOff(ground3);
box5.bounceOff(ground4);

box5.bounceOff(box1);
box5.bounceOff(box2);
box5.bounceOff(box4);
box5.bounceOff(box3)

    


    drawSprites();
}
    //add condition to check if box touching surface and make it box

