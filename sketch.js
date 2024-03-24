

let tonic = 0;


function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 14, 100, 100);
  dial = createNodeArray();

  polySynth = new p5.PolySynth();
}

function draw() {
  background(220);
  displayDialBackground();
  displayNodeDial(dial);
}

function keyPressed() {
  if (keyCode === 32){
      console.log(keyCode);
      triggerNotes(activeNodes);
  }
}


