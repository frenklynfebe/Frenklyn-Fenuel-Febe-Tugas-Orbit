let angle = 0;
function setup() {
  createCanvas(580,480);
}

function draw() {
  background(0, 204, 204);
  stroke(255, 255, 255);
  strokeWeight (45);
  noFill();
  translate (290,240);
  let r= 180;
  circle (0,0,r*2);//radius ouyer circle
  
  strokeWeight(32);
  stroke (255, 255, 255);
  random(02,2);
  
  stroke(255, 153, 255);
  strokeWeight (10);
  noFill();
  translate (1,0.1);
  let f= 90;
  circle (0,0,r*1);//radius ouyer circle
  
  strokeWeight(45);
  stroke (255, 153, 255);
  random(01,1);
  
  let x = r * cos(angle);  //moves the pink ball
  let y = r * sin(angle);// moves the pink ball
  point(x,y);
  angle += 0.2;  // speed of the pink ball
  
}