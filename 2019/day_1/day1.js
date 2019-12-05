/* 
Fuel required to launch a given module is based on its mass. 
Specifically, to find the fuel required for a module, take its mass, 
divide by three, round down, and subtract 2. 

The Fuel Counter-Upper needs to know the total fuel requirement. 
To find it, individually calculate the fuel needed for the mass of 
each module (your puzzle input), then add 
together all the fuel values.
*/
var moduleMass = [];
var fuelRequierment = 0;
var resultNode = document.getElementById('output'); 

function readData(event) { 
    // TODO: Read input file
    var input = event.target;
    var reader = new FileReader();
        reader.onload = function(){
            var text = reader.result;
            moduleMass = text.split('\r\n');
            console.log(moduleMass);
            var firstPart = getFuelAmount(moduleMass);
            var secondPart = getFuelAmountPartTwo(moduleMass);
            resultNode.innerText = "Answer of first part: " + firstPart + ", and second: " + secondPart;
        };
        reader.readAsText(input.files[0]);
};

function getFuelAmount(_moduleMass) {
    fuelRequierment = 0;
    // TODO: Each value (mass) divide by three, round down and subtract by 2 each
    _moduleMass.forEach(function(el, i) {
        var number = Math.floor(el/3) - 2;
        // TODO: Add result to final fuel value
        fuelRequierment += number;
    });
    return fuelRequierment;    
}

function getFuelAmountPartTwo(_moduleMass){
    fuelRequierment = 0;
    _moduleMass.forEach(function(el, i) {
        var number = el;//Math.floor(el/3) - 2;
        // TODO: Add result to final fuel value
        while(number > 0){
            number = Math.floor(number/3) - 2;            
            if(number < 0){
                number = 0;
            }
            fuelRequierment += number;
        }
    }); 
    return fuelRequierment;    
}

(function(){
    document.querySelector("#testButton").addEventListener("click", function(){
        fuelRequierment = 0;
        var input = document.querySelector("#testInput").value;
        var number = parseInt(input);
        if(isNaN(number)){
            resultNode.innerText = "No correct number!"
        } else {
            resultNode.innerText = (Math.floor(number/3) - 2);    
        }
    });

    document.querySelector("#testButtonTwo").addEventListener("click", function(){
        fuelRequierment = 0;
        var input = document.querySelector("#testInput").value;
        var number = parseInt(input);
        if(isNaN(number)){
            resultNode.innerText = "No correct number!"
        } else {
            getFuelAmountPartTwo([number]);
        }
    });
})();
