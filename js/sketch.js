//Animation for Trio Tan

//Based on code from Dan Shiffman https://editor.p5js.org/codingtrain/sketches/qa7RiptE9
// growing roses

let n = 0;
let d = 0;
let h = 0;
let deg = 0;

//CCapture
// var capture = false; // default is to not capture frames, can be changed with button in browser
var capturer = new CCapture({
  format:'webm', 
  workersPath: 'js/',
  framerate: 20
});

function setup() {
  createCanvas(1920, 1080);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);
  frameRate(20);
}

function draw() {
  if (frameCount==1) capturer.start(); // start the animation capture
  background(180, 100, 10, 1);
  // push();
  // translate(width*.25, height*.25);
  // rose();
  // pop();

  push();
  translate(width*.5, height*.5);
  scale(1.5);
  rose();
  pop();

  // push();
  // translate(width*.25, height*.75);
  // rose();
  // pop();

  // push();
  // translate(width*.75, height*.25);
  // rose();
  // pop();

  // push();
  // translate(width*.75, height*.75);
  // rose();
  // pop();

  capturer.capture(document.getElementById('defaultCanvas0'));  
  if (frameCount==7200){
    save_record();
  }
  print(frameCount);

  
}

// function windowResized(){
//   resizeCanvas(windowWidth, windowHeight);
// }

function rose(){
  stroke(50);
  strokeWeight(0.5);
  setLineDash([5, 5]);
  //line(0, -height, 0, height);
  //line(-width, 0, width, 0);
  stroke(h, 50, 50);
  strokeWeight(1);
  noFill();
  
  beginShape();
  setLineDash([0,0]);
  for (let i = 0; i < 361; i++){
    let k = i * d;
    let r = 300 * sin(n*k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y)
  }
  endShape();

  stroke(255);
  strokeWeight(2);
  noFill();
  beginShape();
  for (let i = 0; i < 361; i++){
    let k = i;
    let r = 300 * sin(n*k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y)
  }
  endShape();

  n += 0.0001;
  d += 0.0005;
  h += 0.25;

  if (h > 360){
    h = 0;
  }
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}

// function mousePressed(){
//   let fs = fullscreen();
//   fullscreen(!fs);
// }

function save_record() {
  capturer.save();
}