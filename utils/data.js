
let majorBasePCSets = [

  [0,4,7], //root
  [7,11,2], 
  [2,5,9], 
  [9,0,4], 
  [4,7,11], 
  [11,2,5], 
  [5,9,0]
];

let minorBasePCSets = [
  [0,3,7], //root
  [7,10,2],
  [2,5,8],
  [8,0,3],
  [3,7,10], 
  [10,2,5], 
  [5,8,0]
  
];

// Mixolydian mode
let mixolydianBasePCSets = [
[0,4,7], // root
[7,10,2],
[2,5,9],
[9,0,4],
[4,7,10],
[10,2,5],
[5,9,0]
];

// Lydian mode
let lydianBasePCSets = [
[0,4,7], // root
[7,11,2],
[2,6,9],
[9,0,4],
[4,7,11],
[11,2,6],
[6,9,0]
];

// Dorian mode
let dorianBasePCSets = [
[0,3,7], // root
[7,10,2],
[2,5,9],
[9,0,3],
[3,7,10],
[10,2,5],
[5,9,0]
];

// Phrygian mode
let phrygianBasePCSets = [
[0,3,7], // root
[7,10,1],
[1,5,8],
[8,0,3],
[3,7,10],
[10,1,5],
[5,8,0]
];

// Locrian mode
let locrianBasePCSets = [
[0,3,6], // root
[6,10,1],
[1,4,8],
[8,0,3],
[3,6,10],
[10,1,4],
[4,8,0]
];

let modalBasePCSets = [
majorBasePCSets,
// lydianBasePCSets, 
// mixolydianBasePCSets,

// dorianBasePCSets,
// phrygianBasePCSets, 
// minorBasePCSets, 

//locrianBasePCSets
];


const rootNotes = ["C",
                 "C#", 
                 "D", 
                 "Eb",
                 "E", 
                 "F", 
                 "F#", 
                 "G", 
                 "Ab", 
                 "A", 
                 "Bb", 
                 "B"];