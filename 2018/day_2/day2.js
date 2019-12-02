function GetChecksum()
{
    var lines = Helper.FileLines;
    var threeTimesChecksum = 0;
    var twoTimesChecksum = 0;

    if(lines === null || typeof(lines) === "undefined")
    {
        Helper.ShowOutput("output", "I have no lines to read");
    }
    else
    {
        lines.forEach(function(element){
            var partialChecksum = getCheckSumForLine(element);
            
            threeTimesChecksum += partialChecksum.threeTimes;
            twoTimesChecksum += partialChecksum.twoTimes;
        });
        // display final result
        Helper.ShowOutput("output", "Checksum: " + (threeTimesChecksum * twoTimesChecksum));
    }

    function getCheckSumForLine(line)
    {
        var three = 0;
        var two = 0;
        var map = new Map();

        for(var i = 0; i<line.length; i++)
        {
            var character = line[i];
            if(map.has(character))
            {
                var val = parseInt(map.get(character)) + 1;
                map.set(character, val);
            } 
            else
            {
                map.set(character, 1);
            }
        }
        map.forEach(function(val, key){
            if(val === 2 && two < 1){
                two++;
            } 
            else if( val === 3 && three < 1)
            {
                three++;
            }
        });
        
        return {threeTimes:three, twoTimes:two};
    }
};

function GetCommonBoxes(){
  var lines = Helper.FileLines;
  
  if(lines != null || typeof(lines) !== "undefined")
  {
      for(var i = 0; i<lines.length; i++)
      {
          var lineOne = lines[i];
          for(var j = i+1; j<lines.length; j++)
          {
            var lineTwo = lines[j];
            var indexesToRemove = new Array();
            for(var ch = 0; ch < lineOne.length; ch++)
            {
                if(lineOne[ch] !== lineTwo[ch])
                {
                    // remove that characters
                    indexesToRemove.push(ch);
                }
            }

            if(indexesToRemove.length === 1)
            {
                var newLine = lineOne.substr(0, indexesToRemove[0]) + lineOne.substr(indexesToRemove[0]+1, lineOne.length-1);
                Helper.ShowOutput("output", newLine);
            }
          }
      }
  }
};