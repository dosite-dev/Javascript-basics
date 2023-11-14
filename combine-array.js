
/* Create a function that combines two arrays into one single array. 
	Use the following arrays:
	arrange = [a,b,c,d]
	array to = [e,f,g]
*/
function combineArrays(arrayOne, arrayTwo) {
    // Use the concat method to combine the arrays
    var combinedArray = arrayOne.concat(arrayTwo);
    return combinedArray;
}
var arrayOne = ['a', 'b', 'c', 'd'];
var arrayTwo = ['e', 'f', 'g'];

var resultArray = combineArrays(arrayOne, arrayTwo);
console.log(resultArray);