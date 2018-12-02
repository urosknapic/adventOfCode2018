var fileLines;
var frequnecy = 0;
var mapArr = new Map();

function showOutput(text)
{
  document.getElementById('output').innerText = text;
};

function readFile(inputFile)
{
    var input = inputFile.target;
    var reader = new FileReader();
    reader.onload = function()
    {
      fileLines = reader.result.split("\r\n"); // get content splited by new lines
      for(var i = 0; i<fileLines.length; i++)
      {
        fileLines[i] = fileLines[i].trim();
      }
      showOutput(reader.result);
    };
    reader.readAsText(input.files[0]);
    document.getElementById("getFreq").disabled = false;
    document.getElementById("getRepeated").disabled = false;    
    fileLines = null;
    frequnecy = 0;
    mapArr = new Map();
};

function getFrequency()
{
  // this is part one of day 1  
  if(typeof(fileLines) === "undefined")
  {
    showOutput("ops.. Nothing from input.. cant do shit about it");
  } 
  else
  {
    // lets process lines
    fileLines.forEach(function(line, index)
    {
      var isnum = /^(?:[+\d|\-\d].*\d|\d)$/.test(line);
      if(!isnum)
      {
        console.log(isnum, "this is value: '" + line + "'", "at line: "+ index);
      } 
      else
      {
        frequnecy += parseInt(line);
      }
    });

    if(frequnecy === 0 || frequnecy > 0)
      showOutput("Answer is: " + frequnecy);
    else if(frequnecy < 0)
      showOutput("Answer is: -" + frequnecy);
    else
      showOutput("Something went wrong");
  }
}

function getRepeatedFrequency()
{
  if(typeof(fileLines) === "undefined")
  {
    showOutput("ops.. Nothing from input.. cant do shit about it");
  } 
  else
  {
    mapArr.set(frequnecy); // added 0 frequency to it
    var isDoubled = false;
    var repeats = 1;
    var i = 0;
    while(!isDoubled)
    {
      if(i >= fileLines.length)
      {
        repeats++;
        i = 0;
      }
      var number = parseInt(fileLines[i]);
      var isnum = !isNaN(number);
      if(isnum)
      {
        //add frequency
        frequnecy += number;
        //check if exists
        if(mapArr.has(frequnecy))
        {
          //if yes, return
          isDoubled = true;
          showOutput("Twice repeated frequency is: " + frequnecy);
          console.log("From begining: " + repeats, 
            "index: " + i, 
            "number: " + number, 
            "repeated freq: " + frequnecy, 
            "fina map size: " + mapArr.size);
          return frequnecy;
        }
        else 
        {
          //if not add it
          mapArr.set(frequnecy);
        }
      }
      i++;
    }
    //if end of input list, start at beginning
  }
}