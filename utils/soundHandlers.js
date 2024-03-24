function triggerNotes(activeNodes) {
    userStartAudio();
    // Iterate through activeNodes
    activeNodes.forEach(node => {
  
      node.basePCSet.forEach(midiNote => {

        polySynth.play(midiToNoteName(midiNote + 60), .3, 0, 2);
      });
    });
  }

  function midiToNoteName(midi) {

    // Calculate the octave and note index
    const octave = Math.floor((midi + 9) / 12); // MIDI octave range starts from -1, so add 9 and then divide by 12
    const noteIndex = midi % 12; // MIDI note index range is from 0 to 11
    
    // Concatenate the note name and octave
    const noteName = rootNotes[noteIndex];
    console.log(noteName + octave);
    
    return noteName + octave;
  }
  
  // Example usage
  console.log(midiToNoteName(60)); // Output: 'C4'
  