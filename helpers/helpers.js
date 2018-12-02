var Helper = new Object();

Helper.FileLines;

Helper.ReadFileByNewLines = function(event, runExtraFunction = false)
{
    var fileLines;
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function()
    {
      Helper.FileLines = reader.result.split("\r\n"); // get content splited by new lines
      for(var i = 0; i<Helper.FileLines.length; i++)
      {
        Helper.FileLines[i] = Helper.FileLines[i].trim();
      }
      Helper.ShowOutput("output", reader.result);
    };
    reader.readAsText(input.files[0]);

    if(runExtraFunction)
        Helper.CustomFunction();
};

Helper.ShowOutput = function(targetId, text)
{
    document.getElementById(targetId).innerText = text;
};
// I thought this would be good id you want to run custom function or things on diferent page right after reading file
// It might be weard but i dont know. Will see
Helper.CustomFunction = function()
{ 
    throw undefined;
};