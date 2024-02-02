// Code your orbitCircumference function here:

function orbitCircumference(radius){
  return Math.round(2 * Math.PI * radius);
}


// Code your missionDuration function here:
const orbitRadius = 2000;
const orbitSpeed= 28000;
function missionDuration(noOfOrbits,orbitRadius,orbitSpeed){  

  let dist = orbitCircumference(orbitRadius);
  let time = dist/orbitSpeed;
  let result = Math.round(time *noOfOrbits*100)/100;

  console.log(`The mission will travel ${dist} km around the planet, and it will take ${result} hours to complete.`);
return result;
}
missionDuration(5,orbitRadius,orbitSpeed);

// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(idArr){
  let index = Math.floor(Math.random()*idArr.length); 
  return idArr[index] ;
}


// Code your oxygenExpended function here:

function oxygenExpended(candidateObj){

  let hrs =  missionDuration(3,orbitRadius,orbitSpeed);
  let o2Usage = Math.round(candidateObj.o2Used(hrs)*1000)/1000;
  return console.log(`${candidateObj.name} will perform the spacewalk, which will last ${hrs} hours and require ${o2Usage} kg of oxygen.`);

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

 
for(let i=0;i<crew.length;i++){
  oxygenExpended(selectRandomEntry(crew)); 
}
  
  
 
 