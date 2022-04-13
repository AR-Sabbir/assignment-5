

















// RESULT 

function exam(){
 let gpa='';
let grade=

 if(marks >=0 && bn < 33){
    gpa=0;
    grade=F
    
    }else if(marks >=33 && bn < 40){
        gpa=1;
        grade='D';
    }else if(marks >=40 && bn < 50){
        gpa=2;
        grade='C'
    }else if(marks >=50 && bn < 60){
        gpa=3;
        grade='B'
    }else if(marks >=60 && bn <70){
        gpa=3.5;
        grade='A-'
    }else if(marks >=70 && bn <80){
        gpa=4
        grade='A';
    }else if(marks >=80 && bn <= 100){
        gpa=5
        grade='A+';
    }else{
        gpa='invalid';
        grade='invalid';
    }



    console.log(`
name:  ${name}
class:${section}
roll: ${roll}

--------------------------------------------------
Subject  Marks   GPA     Grade     Result

Bnagla    ${bn}  ${gpa}
English   ${bn}  ${gpa}
Math      ${bn}  ${gpa}
Science  ${bn}  ${gpa}
S Science ${bn}  ${gpa}
Religion   ${bn}  ${gpa}





`)
}

exam();
