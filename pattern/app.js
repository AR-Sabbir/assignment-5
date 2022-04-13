
 const pattern=(iii)=>{
let fastStart=prompt('fastStart')
for(i=fastStart; i<=iii; i++)
{
  let strr="";
 for(j=1; j<=i; j++)


 strr += j+" ";
 console.log(strr);
}


}
function printPattern(range) {
  let start=prompt('ulta-start')
  for(var i=start;i>=range;i--){
    var str="";
    for(var j=1;j<=i;j++){
      str += j+" ";
    }
    console.log(str);
  }
}let bis=prompt('first-end')
let bbb=prompt('last-end')



pattern(bis);
 printPattern(bbb)


