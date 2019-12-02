var frequnecy = 0;
var mapArr = new Map();

Helper.CustomFunction = function()
{
  // this overrides CustomFunction and it is triggered after reading function
  // if we read new file, restore values and enable buttons
  // when calling Helper.ReadFileByNewLines set flag runExtraFunction = true for its auto execution;
  // this should be ovveriden method.
  document.getElementById("getFreq").disabled = false;
  document.getElementById("getRepeated").disabled = false;    
  fileLines = null;
  frequnecy = 0;
  mapArr = new Map();
};

function getFrequency()
{
  // this is part one of day 1  
  if(typeof(Helper.FileLines) === "undefined")
  {
    showOutput("ops.. Nothing from input.. cant do shit about it");
  } 
  else
  {
    // lets process lines
    Helper.FileLines.forEach(function(line, index)
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
      Helper.ShowOutput("output", "Answer is: " + frequnecy);
    else if(frequnecy < 0)
      Helper.ShowOutput("output", "Answer is: -" + frequnecy);
    else
      Helper.ShowOutput("output", "Something went wrong");
  }
}

function getRepeatedFrequency()
{
  //part two
  if(typeof(Helper.FileLines) === "undefined")
  {
    Helper.ShowOutput("output", "ops.. Nothing from input.. cant do shit about it");
  } 
  else
  {
    mapArr.set(frequnecy); // added 0 frequency to it
    var isDoubled = false;
    var repeats = 1;
    var i = 0;
    while(!isDoubled)
    {
      if(i >= Helper.FileLines.length)
      {
        repeats++;
        i = 0;
      }
      var number = parseInt(Helper.FileLines[i]);
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
          Helper.ShowOutput("output", "Twice repeated frequency is: " + frequnecy);
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
  }
}