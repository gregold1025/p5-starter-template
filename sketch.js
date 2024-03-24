

let tonic = 0;
let radius = 200;

function setup() {
  createCanvas(800, 800);
  dial = createNodeDial();

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


