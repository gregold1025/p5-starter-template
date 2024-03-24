

let tonic = 7;
let radius = 200;

function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB, 14, 100, 100);
  dial = createNodeArray();

  polySynth = new p5.PolySynth();
}

function draw() {
  background(220);
  displayNodeDial(dial);
}

function keyPressed() {
  if (keyCode === 32){
      console.log(keyCode);
      triggerNotes(activeNodes);
  }
}


