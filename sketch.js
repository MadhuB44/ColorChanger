var movingRec
var fixedRec
var O1,O2,O3,O4

function setup() {
  createCanvas(800,600);
 fixedRec=createSprite(100, 400, 50, 50);
 fixedRec.shapeColor="white"

 movingRec=createSprite(250, 100, 50, 50);
 movingRec.shapeColor="blue"

 O1=createSprite(200, 400, 80, 20);
 O1.shapeColor="red"

 O2=createSprite(300, 400, 80, 20);
 O2.shapeColor="orange"

 O3=createSprite(400, 400, 80, 20);
 O3.shapeColor="green"

 O4=createSprite(500, 400, 80, 20);
 O4.shapeColor="yellow"

}

function draw() {
  background(0); 

  movingRec.x=mouseX
  movingRec.y=mouseY
  //console.log(fixedRec.width/2+movingRec.width/2)
  //console.log(movingRec.x-fixedRec.x)

  if(isTouching(O2,movingRec)){
    O2.shapeColor="black";
    movingRec.shapeColor="white";
  }else{
    O2.shapeColor="orange";
    movingRec.shapeColor="blue";
  }

  drawSprites();
}
//boolean value - true/false, 1/0, on/off
// arguments
