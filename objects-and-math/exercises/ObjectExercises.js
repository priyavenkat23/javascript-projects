let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 2,
   move: function(){
      return Math.floor(Math.random() * 11);
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 5,
   move: function(){
      return Math.floor(Math.random() * 11);
   }
};

let superChimpTwo= {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 4,
   move: function(){
      return Math.floor(Math.random() * 11);
   }

};

let dog= {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 7,
   move: function(){
      return Math.floor(Math.random() * 11);
   }
};

let waterBear= {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 8,
   move: function(){
      return Math.floor(Math.random() * 11);
   }

};


// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.
let crew = [superChimpOne, superChimpTwo, salamander, dog, waterBear];

// Print out the relevant information about each animal.

for(let i=0;i< crew.length ; i++){

   let animalObj = crew[i];
    crewReports = (animalObj) => {
      console.log(`${animalObj.name} is a ${animalObj.species}. They are ${animalObj.age} years old and ${animalObj.mass} kilograms. Their ID is ${animalObj.astronautID}.`);

    }
    crewReports(animalObj) ;
   
}

// Start an animal race!

function fitnessTest(candidates){
   let results = [], numSteps, turns;
 for (let i = 0; i < candidates.length; i++){
     numSteps = 0;
     turns = 0;
     while(numSteps < 20){
     numSteps += candidates[i].move();
     turns++;
     }
     results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
 }
 return results;

}

console.log(fitnessTest(crew));