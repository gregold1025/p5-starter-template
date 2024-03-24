let nodeRadius = 40;
let dialRadius = 300;

function Node(x, y, basePCSet, index, modeColor, isActive = false) {
  let basePCSetTransposed = basePCSet.map(pc => (pc + tonic)%12);
  let rootNote = basePCSetTransposed[0]%12;
  let rootNoteName = rootNotes[rootNote];

  let quality = (basePCSetTransposed[1] - basePCSetTransposed[0] === 4 || 
      Math.abs(basePCSetTransposed[1] - basePCSetTransposed[0]) === 8 
      ? 0 : 1);
  quality = (quality === 1 && (basePCSetTransposed[2] - basePCSetTransposed[1] === 3 || 
      Math.abs(basePCSetTransposed[1] - basePCSetTransposed[0]) === 6) ? 2: quality);
  //major = 0; minor = 1
  //basePCSetTransposed.sort((a, b) => a - b);

  return {
    x: x,
    y: y,
    index: index,
    basePCSet: basePCSetTransposed, 
    rootNote: rootNote,
    rootNoteName: rootNoteName,
    isActive: isActive,
    quality: quality,
    modeColor: modeColor,
    display: displayNode
  };

  function displayNode() {
    const color = this.isActive ? "blue" : modeColor;

    fill(color);
    ellipse(this.x, this.y, nodeRadius * 2); // Draw the circle

    // Display root note name
    textSize(16);
    textAlign(CENTER, CENTER);
    fill(255);
    text(this.rootNoteName, this.x, this.y);
  }
}
  
  function createNodeArray() {
    let nodes = [];
    modalBasePCSets.forEach((basePCSets, index) => {
      let radiusOffset = dialRadius;
      let colorOffset = color(index, 100, 50);
      nodes = createNodeDialHelper(basePCSets, nodes, index, radiusOffset, colorOffset);
    });
  
    return nodes;
  }

  function createNodeDialHelper(basePCSets, nodes, indexOffset, dialRadius, modeColor){  
    basePCSets.forEach((basePCSet, index) => {
    let indexPosn = (index >= (6-indexOffset) ? index - 7 : index);
    const angle = (TWO_PI / 12 * indexPosn) - HALF_PI;
    const x = dialRadius * cos(angle) + width / 2;
    const y = dialRadius * sin(angle) + height / 2;
    nodes.push(Node(x, y, basePCSet, index, modeColor));
  });
  return nodes;
}
  
  function displayNodeDial(dial) {
    dial.forEach(node => {
      node.display();
    });
  }

  function displayDialBackground(){
    stroke(0, 100, 100, 100);
    strokeWeight(100);
    strokeCap(SQUARE);
    arc(width/2, height/2, dialRadius * 2.0, dialRadius * 2.0, -TWO_PI/3 - PI/12., PI/3. + PI/12);
    strokeWeight(1);
    stroke(0);
  }
  
function modeArc(modeIndex, modeColor){
  
}