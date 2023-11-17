/*Create a function that displays a pattern like this:
      1 
    1
  1 
1
*/
function pattern(diags){
    for(let i=diags ;i>= 0 ; i--){
        var diag= "";
        for(let j=0 ;j < diags ; j++){
            if (i === j) {
                diag+= "1 ";
            
            }
            else{
                diag+=" "
            }
        }
        console.log(diag)
    }

}
pattern(4)