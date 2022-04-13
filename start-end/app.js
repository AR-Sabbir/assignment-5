
let start=Number(prompt('start value'))
let end=Number(prompt('end value'))
if(start == '' ||end==''){
    alert('doya kore value din');

}else if(start >end){
    alert('start value  choto din ar end value boro din')
}else{

    for (let i=start;i<=end;i++) {
    
   
        console.log(i);
         
     }

}

