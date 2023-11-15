/*Create a function that displays a pattern like this:
1 1 1 1 
1 1 1 0  
1 1 0 0  
1 0 0 0  
 */

function patternSquare(a,b){
    for( i=a; i>=0; i--){
        console.log('1 '.repeat(i)+('0 ' .repeat(a-i)))
    }

}
patternSquare(4,5);