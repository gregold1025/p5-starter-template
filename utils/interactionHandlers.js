let activeNodes = [];


function mousePressed() {
    dial.forEach(node => {
      if (dist(mouseX, mouseY, node.x, node.y) < 20) {
        node.isActive = !node.isActive;
        if (node.isActive) {
            // Add node to activeNodes list if isActive is true
            activeNodes.push(node);
          } else {
            // Remove node from activeNodes list if isActive is false
            activeNodes = activeNodes.filter(activeNode => activeNode !== node);
          }
        activeNodes.forEach(node => {console.log(node.rootNoteName, node.basePCSet, node.isActive)});
      }
    });
}


  