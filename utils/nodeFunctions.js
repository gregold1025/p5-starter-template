function Node(x, y, basePCSet, index, isActive = false) {
    let basePCSetTransformed = basePCSet.map(pc => (pc + tonic) % 12);
    let rootNote = basePCSetTransformed[0];
    let rootNoteName = rootNotes[rootNote];
    basePCSetTransformed.sort((a, b) => a - b);
  
    return {
      x: x,
      y: y,
      index: index,
      basePCSet: basePCSetTransformed,
      rootNote: rootNote,
      rootNoteName: rootNoteName,
      isActive: isActive,
      display: displayNode
    };
  
    function displayNode() {
      const radius = 20; // Radius of the circle
      const color = this.isActive ? "green" : "blue";
  
      fill(color);
      ellipse(this.x, this.y, radius * 2); // Draw the circle
  
      // Display root note name
      textSize(16);
      textAlign(CENTER, CENTER);
      fill(255);
      text(this.rootNoteName, this.x, this.y);
    }
  }
  
  function createNodeDial() {
    let nodes = [];
  
    basePCSets.forEach((basePCSet, index) => {
      const angle = (TWO_PI / 12 * index) - HALF_PI;
      const x = radius * cos(angle) + width / 2;
      const y = radius * sin(angle) + height / 2;
      nodes.push(Node(x, y, basePCSet, index)); // Passing each element from basePCSets array as basePCSet
    });
  
    return nodes;
  }
  
  function displayNodeDial(dial) {
    dial.forEach(node => {
      node.display();
    });
  }
  