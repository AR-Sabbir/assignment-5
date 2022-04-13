
/**
 * AGE CAL
 */
 function ageCal(name,age){
    let manus='';
        
    if(age >=0 && age <5){
        manus='babu';
    }else if(age >=5 && age <10){

        manus='balok';
    }else if(age >=10 && age <18){

        manus='kisor';
    }else if(age >=18 && age <30){

        manus=' Jubok';
    }else if(age >=30 && age <50){

        manus='togboge Jubok';
    }else if(age >=50 && age <70){

        manus='togboge uncle';
    }else if(age >=50){

        manus='bura manus';
    }


    console.log(`
    
    
    Hi ${name},you are a ${manus} manus
    
    
    `);

}
