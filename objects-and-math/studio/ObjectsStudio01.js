// Code your selectRandomEntry function here:

function selectRandomEntry(array){
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function getThreeIds(array) {
  let newArray = [];
  while (newArray.length < 3) {
    let selectedItem = selectRandomEntry(array);
    if (newArray.includes(selectedItem) === false) {
      newArray.push(selectedItem);
    }
  }
  return newArray;
}

// Code your buildCrewArray function here:
function buildCrewArray(array1, array2){
  let crew = [];
  for (let candidate in array2) {
    if (array1.includes(array2[candidate].astronautID) === true) {
      crew.push(array2[candidate].name);
    }
  }
  return crew;
}

let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:

let selectedCrew = buildCrewArray(getThreeIds(idNumbers), animals);
console.log(`${selectedCrew[0]}, ${selectedCrew[1]}, and ${selectedCrew[2]} are going to space!`)
