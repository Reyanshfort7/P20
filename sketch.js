var bg,tom,tomone,tomtwo,tomthree,tomfour;
var jerry,jerryone,jerrytwo,jerrythree,jerryfour;
function preload() {
    //load the images here
bg=loadImage=("images/garden.png");
tomone=loadAnimation=("images/tomOne.png");
tomtwo=loadAnimation=("images/tomTwo.png","images/tomThree.png");
tomthree=loadAnimation=("images/tomFour.png");

jerryone=loadAnimation=("images/jerryOne.png");
jerrytwo=loadAnimation=("images/jerryTwo.png","images/jerryThree.png");

jerrythree=loadAnimation=("images/jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600);
    tom.addAnimation("tomSleeping",tomone)
    tom.scale=0.2;
    jerry=createSprite(200,600);
    jerry.addAnimation("jerryStanding",jerryone);
    jerry.scale=0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
    tom.velocityX=0;
    tom.addAnimation("tomlastImage",tomthree);
    tom.x=300;
    tom.scale=0.2;
    tom.changeAnimation("tomlastImage");
    jerry.addAnimation("jerrylastImage",jerrythree);
    jerry.scale=0.15;
    jerry.changeAnimation("jerrylastImage");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
  tom.velocityX=-5;
  tom.addAnimation("tomrunning",tom);
  tom.changeAnimation("tomrunning");
  jerry.addAnimation("jerryteezing",jerrytwo);
  jerry.frameDelay=25;
  jerry.changeAnimation("jerryteezing");
  }

}
