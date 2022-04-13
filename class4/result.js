
let name=prompt('student name')
let roll=prompt('Student Roll')
let age=prompt('Student Age')
let bn=prompt('bangla')
let section=prompt('class')


let gpa='';
let grad='';

if(bn >=0 && bn < 33){
gpa=0;
grade=F

}else if(bn >=33 && bn < 40){
    gpa=1;
    grade='D';
}else if(bn >=40 && bn < 50){
    gpa=2;
    grade='C'
}else if(bn >=50 && bn < 60){
    gpa=3;
    grade='B'
}else if(bn >=60 && bn <70){
    gpa=3.5;
    grade='A-'
}else if(bn >=70 && bn <80){
    gpa=4
    grade='A';
}else if(bn >=80 && bn <= 100){
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
Age:  ${age}
-------------------------------------
Subject  Marks GPA Grade Result

Bnagla   ${bn}




`)






let name=prompt('Student Name');
let classname=prompt('class');
let roll=prompt('student roll');
let bn=prompt('bangla');
let en=prompt('English');
let math=prompt('Mathematics');
let s=prompt('Science');
let ss=prompt('social science');
let rel=prompt('religion');





console.log(`
name:  ${name}
class:${classname}
roll: ${roll}

--------------------------------------------------
Subject  Marks   GPA     Grade     Result

Bnagla    ${bn}  ${gpa}
English   ${en}  ${gpa}
Math      ${math}  ${gpa}
Science  ${s}  ${gpa}
S Science ${ss}  ${gpa}
Religion   ${rel}  ${gpa}





`)
