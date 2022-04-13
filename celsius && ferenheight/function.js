const fahren=(celsius)=>{

let fare=(celsius*9/5)+32

return`fahrenheight=${fare}`

}


/**
 * 
 * 
 * 
 * 
 * 
 
 function countVowel(str) {
    var count = 0;
    str=str.toLowerCase();
    for(var i=0;i<str.length;i++){
      if(str.charAt(i)=="a"||str.charAt(i)=="e"||str.charAt(i)=="i"||
         str.charAt(i)=="o"||str.charAt(i)=="u"){
         count++; //Increment vowel count
      }
    }
    return count;
  }
  
  console.log(countVowel("Hello")) //2
  console.log(countVowel("Umbrella")) //3*/

  let sum = 100;
  for (var x = 0; x < 1000; x++)
  {
      if (x % 3 === 0 || x % 5 === 0)
      {
         sum += x;
      }
  }
  console.log(sum);
  