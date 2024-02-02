// Code your selectRandomEntry function here:
let idNumbers = [291, 414, 503, 599, 796, 890];

function selectRandomEntry(idArr){
  let index = Math.floor(Math.random()*idArr.length); 
  return idArr[index] ;
}

let callCount = 0;
let newIdArr = [];
let crewArr = [];


// Code your buildCrewArray function here:
function buildCrewArray(selectedIdArr , animalArr){

while(idNumbers.length !=0 && callCount < 3 ){
  
  let id = selectRandomEntry(idNumbers);
  
  if(!newIdArr.includes(id)){
    newIdArr.push(id); 
    callCount++;
  }

}

  for(let i =0; i< animalArr.length;i++){
    let candidateObj = animalArr[i];
    for(let j=0; j <selectedIdArr.length;j++){
        if(candidateObj.astronautID === selectedIdArr[j]){
          crewArr.push(candidateObj.name);
        }
    }
  }
  

}






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
buildCrewArray(newIdArr,animals);
console.log(`${crewArr[0]}, ${crewArr[1]}, and ${crewArr[2]} are going to space!`);
