var inputIntegers = [];
function firstPart(event) { 
    console.log("Part one");
    // TODO: Read input file
    var input = event.target;
    var reader = new FileReader();
        reader.onload = function(){
            var text = reader.result;
            inputIntegers = text.split('\r\n');
            // console.log(inputIntegers);
            var noun = 12;
            var verb = 2;
            testComputer(inputIntegers, noun, verb);
            // resultNode.innerText = "Answer of first part: " + firstPart + ", and second: " + secondPart;
        };
        reader.readAsText(input.files[0]);
};

function secondPart(event) { 
    console.log("Part two");
    // TODO: Read input file
    var input = event.target;
    var reader = new FileReader();
        reader.onload = function(){
            var text = reader.result;
            inputIntegers = text.split('\r\n');
            for(var i = 0; i<100; i++){
                for(var j = 0; j<100; j++){
                    var noun = i;
                    var verb = j;
                    testComputer(inputIntegers, noun, verb);
                }
            }
            // resultNode.innerText = "Answer of first part: " + firstPart + ", and second: " + secondPart;
        };
        reader.readAsText(input.files[0]);
};

function testComputer(_inputArray, noun, verb){
    // part one
    var oldSubarray = [];
    var finalArray = [];
    _inputArray.forEach(function(el, i){
        var index = 0;
        oldSubarray = el; // as test i want to check if this value became final array properly
        finalArray = el.split(",");
        if(index === 0){
            // replace at position 1 with 12, and 2 with 2
            finalArray[1] = noun;
            finalArray[2] = verb;
        }
        // Read opcode;
        while(index < finalArray.length) {
            var opcode = parseInt(finalArray[index]);
            switch(opcode){
                case 1:
                //add element at position of finalArray[finalArray[1]] and finalArray[finalArray[2]] and save it to finalArray[finalArray[3]]
                add(finalArray ,finalArray[index+1], finalArray[index+2], finalArray[index+3]);
                break;
                case 2:
                multi(finalArray ,finalArray[index+1], finalArray[index+2], finalArray[index+3]);
                break;
                case 99:
                //exit program
                finalArray = finalArray.join(",");
                if(noun === 12 && verb === 2){
                    document.querySelector("#output").innerHTML += "First part answer: " + finalArray.split(",")[0] + "<br>";
                }
                if(parseInt(finalArray.split(",")[0]) === 19690720){
                    document.querySelector("#output").innerHTML += "Second part answer: " + (100*noun+verb) + "<br>";
                }
                return;
                break;
            }
            index += 4;
        }
    });
}

function add(_arr, _posOne, _posTwo, _resultPosition) {
    var numberOne = parseInt(_arr[_posOne]);
    var numberTwo = parseInt(_arr[_posTwo]);
    _arr[parseInt(_resultPosition)] = numberOne + numberTwo;
}

function multi(_arr, _posOne, _posTwo, _resultPosition) {
    var numberOne = parseInt(_arr[_posOne]);
    var numberTwo = parseInt(_arr[_posTwo]);
    _arr[parseInt(_resultPosition)] = numberOne * numberTwo;
}
/*
1,0,0,3,99
1,0,0,0,99
2,3,0,3,99
2,4,4,5,99,0
*/