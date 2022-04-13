function convert(amount,currency){
    
    
    let rate = 0; 
    
    
      
    if( currency == 'USD' ){    
        rate = 86;
    }else if( currency == 'CAD' ){ 
        rate = 68;
    }else if( currency == 'Pound' ){
        rate = 114; 
    }else if( currency == 'Euro' ){ 
        rate = 99;
    }
    
  
    }
    
    console.log(`
    
        ${ amount } ${ currency } =${convert(amount,currency)}
    
    
    `);