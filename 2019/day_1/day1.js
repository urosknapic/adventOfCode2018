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
            getFuelAmount(moduleMass);         
        };
        reader.readAsText(input.files[0]);
};

function getFuelAmount(_moduleMass) {
    // TODO: Each value (mass) divide by three, round down and subtract by 2 each
    _moduleMass.forEach(function(el, i) {
        var number = Math.floor(el/3) - 2;
        // TODO: Add result to final fuel value
        fuelRequierment += number;
        resultNode.innerText = "Answer: " + fuelRequierment;
    });
}
(function(){
    document.querySelector("#testButton").addEventListener("click", function(){
        var input = document.querySelector("#testInput").value;
        var number = parseInt(input);
        if(isNaN(number)){
            resultNode.innerText = "No correct number!"
        } else {
            resultNode.innerText = (Math.floor(number/3) - 2);    
        }
    });
})();
