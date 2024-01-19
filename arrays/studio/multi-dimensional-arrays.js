let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

const input = require('readline-sync');

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let cabinetArray1 = food.split(",").sort();
let cabinetArray2 = equipment.split(",").sort();
let cabinetArray3 = pets.split(",").sort();
let cabinetArray4 = sleepAids.split(",").sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [cabinetArray1, cabinetArray2, cabinetArray3, cabinetArray4];
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let selectedcabinet = input.question("select a cabinet from 0-3: ");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
console.log(`The selected cabinet number is: ${selectedcabinet}.`);
if(selectedcabinet > 0 && selectedcabinet <= 3){
    console.log(`The selected cabinet contents are: ${cargoHold[selectedcabinet]}`);
    let itemSelected = input.question(`select a particular item from this cabinet:  ${cargoHold[selectedcabinet]}: `);
    if(itemSelected !=null && itemSelected!=""){
        if(cargoHold[selectedcabinet].includes(itemSelected)){
            console.log(`Cabinet ${selectedcabinet} DOES contain ${itemSelected}.`);
        }else{
            console.log(`Cabinet ${selectedcabinet} DOES NOT contain ${itemSelected}.`);
        }
    }
}
else{
    console.log("Sorry! you have entered a wrong cabinet number");
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
