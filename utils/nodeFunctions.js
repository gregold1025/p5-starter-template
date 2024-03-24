let nodeRadius = 20;

function Node(x, y, basePCSet, index, isActive = false, mode) {
    let basePCSetTransposed = basePCSet.map(pc => (pc + tonic));
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
      mode: mode,
      display: displayNode
    };
  
    function displayNode() {
      const color = this.isActive ? "green" : "blue";
  
      fill(color);
      ellipse(this.x, this.y, nodeRadius * 2); // Draw the circle
  
      // Display root note name
      textSize(16);
      textAlign(CENTER, CENTER);
      fill(255);
      text(this.rootNoteName, this.x, this.y);
    }
  }
  
  function createNodeDial() {
    let nodes = [];
  
    majorBasePCSets.forEach((basePCSet, index) => {
      const angle = (TWO_PI / 12 * index) - HALF_PI;
      const x = radius * cos(angle) + width / 2;
      const y = radius * sin(angle) + height / 2;
      nodes.push(Node(x, y, basePCSet, index, 0)); // Passing each element from basePCSets array as basePCSet
    });
    minorBasePCSets.forEach((basePCSet, index) => {
      const angle = (TWO_PI / 12 * index) - PI;
      const x = radius * .7 * cos(angle) + width / 2;
      const y = radius * .7 * sin(angle) + height / 2;
      nodes.push(Node(x, y, basePCSet, index, 0)); // Passing each element from basePCSets array as basePCSet
    });
  
    return nodes;
  }
  
  function displayNodeDial(dial) {
    dial.forEach(node => {
      node.display();
    });
  }
  

  function activeNodeChordHandler(activeNodes){
    if (activeNodes.length === 1){
        return activeNodes[0].basePCSet;
    }
    //SECONDARY DOMINANT CHORDS////////////////////
    else if (activeNodes.length === 2){
      console.log(Math.abs(activeNodes[0].index - activeNodes[1].index));
        if (Math.abs(activeNodes[0].index - activeNodes[1].index) === 1){
            // Logic for chord with adjacent notes pressed -- SECONDARY DOMINANTS (V/x)
            let tonicIndex = (activeNodes[0].index > activeNodes[1].index ? 0 : 1);

            const adjustedPCSet = [...activeNodes[tonicIndex].basePCSet];
            for (i = 0; i < activeNodes[tonicIndex].quality; i++){
                adjustedPCSet[i+1]++;
            }
            console.log(adjustedPCSet, activeNodes[tonicIndex].quality);
            return adjustedPCSet;

    }

    else if (Math.abs(activeNodes[0].index - activeNodes[1].index) === 2){
        let tonicIndex = (activeNodes[0].index > activeNodes[1].index ? 0 : 1);
        const adjustedPCSet = [...activeNodes[tonicIndex].basePCSet];

        for (i = 0; i < activeNodes[tonicIndex].quality; i++){
            adjustedPCSet[i+1]++;
        }
        
        adjustedPCSet.push((adjustedPCSet[0]+10)%12);
        console.log(adjustedPCSet);
        return adjustedPCSet;
    }
    else if (Math.abs(activeNodes[0].index - activeNodes[1].index) === 10){
        let tonicIndex = (activeNodes[0].index > activeNodes[1].index ? 1 : 0);
        const adjustedPCSet = [...activeNodes[tonicIndex].basePCSet];

        for (i = 0; i < activeNodes[tonicIndex].quality; i++){
          adjustedPCSet[i+1]++;
       }
      
        adjustedPCSet.push((adjustedPCSet[0]+10)%12);
        console.log(adjustedPCSet);
        return adjustedPCSet;
    }
    //FORCE MINOR CHORDS//////////////////////////
    else if (Math.abs(activeNodes[0].index - activeNodes[1].index) === 3){
      let tonicIndex = (activeNodes[0].index > activeNodes[1].index ? 0 : 1);
      const adjustedPCSet = [...activeNodes[tonicIndex].basePCSet];

      if (activeNodes[tonicIndex].quality === 0) adjustedPCSet[1]--;
      else if (activeNodes[tonicIndex].quality === 2) adjustedPCSet[2]++;

      console.log(adjustedPCSet);
      return adjustedPCSet;
  }
  else if (Math.abs(activeNodes[0].index - activeNodes[1].index) === 9){
      let tonicIndex = (activeNodes[0].index > activeNodes[1].index ? 1 : 0);
      const adjustedPCSet = [...activeNodes[tonicIndex].basePCSet];

      if (activeNodes[tonicIndex].quality === 0) adjustedPCSet[1]--;
      else if (activeNodes[tonicIndex].quality === 2) adjustedPCSet[2]++;

      console.log(adjustedPCSet);
      return adjustedPCSet;
  }
    else {return activeNodes[0].basePCSet;}
}
    else{return [];}
  
}