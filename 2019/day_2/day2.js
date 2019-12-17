var inputIntegers = [];
function readData(event) { 
    // TODO: Read input file
    var input = event.target;
    var reader = new FileReader();
        reader.onload = function(){
            var text = reader.result;
            inputIntegers = text.split('\r\n');
            console.log(inputIntegers);
            testComputer(inputIntegers);
            // resultNode.innerText = "Answer of first part: " + firstPart + ", and second: " + secondPart;
        };
        reader.readAsText(input.files[0]);
};

function testArrayInt(input){
    var run = true;

    var index = 0;
    while(run){
        var positionOne = index+1;
        var positionTwo = index+2;
        var output = index+3;

        var a = input[input[positionOne]];
        var b = input[input[positionTwo]];
        switch(input[index]){
            case 1:
            input[input[output]] = a + b;
            break;
            case 2: 
            input[input[output]] = a * b;
            break;
            case 99: run = false; console.log(input); return; break;
        }
        index += 4;
    }
}

function WebSoltion(){
    var ret = 0;
    // const fs = require('fs');
    // var data = fs.readFileSync('./input.txt').toString().split('\n');
    // if(data[data.length-1]==''){data.pop();}

    var ip1pos, ip2pos, oppos;
    var ip1, ip2, op;
    // var p=[1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,19,9,23,1,5,23,27,1,27,9,31,1,6,31,35,2,35,9,39,1,39,6,43,2,9,43,47,1,47,6,51,2,51,9,55,1,5,55,59,2,59,6,63,1,9,63,67,1,67,10,71,1,71,13,75,2,13,75,79,1,6,79,83,2,9,83,87,1,87,6,91,2,10,91,95,2,13,95,99,1,9,99,103,1,5,103,107,2,9,107,111,1,111,5,115,1,115,5,119,1,10,119,123,1,13,123,127,1,2,127,131,1,131,13,0,99,2,14,0,0];
    // var p = [1,9,10,3,2,3,11,0,99,30,40,50];
    var p = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,19,9,23,1,5,23,27,1,27,9,31,1,6,31,35,2,35,9,39,1,39,6,43,2,9,43,47,1,47,6,51,2,51,9,55,1,5,55,59,2,59,6,63,1,9,63,67,1,67,10,71,1,71,13,75,2,13,75,79,1,6,79,83,2,9,83,87,1,87,6,91,2,10,91,95,2,13,95,99,1,9,99,103,1,5,103,107,2,9,107,111,1,111,5,115,1,115,5,119,1,10,119,123,1,13,123,127,1,2,127,131,1,131,13,0,99,2,14,0,0
    ];
    // p = data[0].split(',').map(Number);
    // p[1]=12;
    // p[2]=2;
            
    for(i=0;i<p.length;i+=4){
        ip1pos = p[i+1];
        ip2pos = p[i+2];
        oppos = p[i+3];

        ip1 = p[ip1pos];
        ip2 = p[ip2pos];
        
        if(p[i]==1){op=ip1+ip2;} else if(p[i]==2){op=ip1*ip2;} else if(p[i]==99){break;} else {console.log("ERROR");}
        p[oppos]=op;
    }

    ret = p[0];

    console.log(ret);
}

function testComputer(_inputArray){
    // part one
    var oldSubarray = [];
    var finalArray = [];
    _inputArray.forEach(function(el, i){
        var index = 0;
        oldSubarray = el; // as test i want to check if this value became final array properly
        finalArray = el.split(",");
        if(index === 0){
            // replace at position 1 with 12, and 2 with 2
            finalArray[1] = "12";
            finalArray[2] = "2";
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
                console.log("Old: ", oldSubarray);
                console.log("New: ", finalArray);
                return;
                break;
            }
            index += 4;
        }
        finalArray = finalArray.join(",");
        console.log("Old: ", oldSubarray);
        console.log("New: ", finalArray);
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