/* Create a function that displays a pattern */

    function triangle(rows,column){
    
        for(let i=5; i > 0; i--){
        let x=" ";
        for(let j=1; j<i ;j++){
            x += " 1 ";
            
        }
        console.log(x);
        }
    }
    triangle(4,4);