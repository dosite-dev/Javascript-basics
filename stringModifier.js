 /*a function called “stringModifier”. This function allows a user to provide a string, 
 and then provide the position they want to modify,
  and a character to replace the modified one from the string. This function will receive 
  3 arguments the first argument will be a string, the second will be the position of a specific.*/
  function  stringModifier(str,position,newchar){
 if (position < 0 || position > str.length){
    console.log("Enter valid position");
  }
  var modifiedString = str.substring (0,position)+(newchar,"H")+("");
  return modifiedString;
 
  }
  console.log(stringModifier("many",3,""));
 