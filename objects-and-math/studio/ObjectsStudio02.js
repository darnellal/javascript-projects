// Code your orbitCircumference function here:

let altitude = 2000;
let orbitalSpeed = 28000;
let orbitsComplete = 5;

function orbitCircumference(orbit) {
  return Math.round(2 * Math.PI * (orbit + 6378));
}

// Code your missionDuration function here:
function missionDuration(orbitsComplete, orbitCircumfrence, orbitSpeed) {
  return Math.round(((orbitsComplete * orbitCircumfrence) / orbitSpeed) * 1000) / 1000;
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(array){
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Code your oxygenExpended function here:
function oxygenExpended () {
  let hours = missionDuration(3, orbitCircumference(altitude), orbitalSpeed);
  let crewMember = selectRandomEntry(crew);
  let oxygenWeight = Math.round(crewMember.o2Used(hours) * 10000) / 10000;

  return [crewMember.name, hours, oxygenWeight];
}


// Candidate data & crew array.
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
 
let crew = [candidateA,candidateC,candidateE];

let circumfrence = orbitCircumference(altitude);
let duration = missionDuration(orbitsComplete, circumfrence, orbitalSpeed);
console.log(`The mission will travel ${orbitsComplete * circumfrence} km around the planet, and it will take ${duration} hours to complete.`);

let finalResult = oxygenExpended();

console.log(`${finalResult[0]} will perform the spacewalk, which will last ${finalResult[1]} hours and require ${finalResult[2]} kg of oxygen.`)