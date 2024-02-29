let img0;

function preload() {
  img0 = loadImage("smile_2.png");
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  //face
  fill('yellow')
  noStroke()
  ellipse(200,200,300,300);
  
  //eyes
  fill('black')
  ellipse(150,250,20,40);
  ellipse(250,250,20,40);
  
  //mouth
  image(img0, 120, 110, 150, 60);
  
}
