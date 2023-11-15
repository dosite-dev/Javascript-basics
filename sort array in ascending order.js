/*Create a function to sort and arrange these elements of the array in ascending order.
var some numbers = [3,4,8,2,1,2,2,6,3,4];

 */
function number(array) {
    var sortedArray = array.sort((a,z) => a-z);
    
    return sortedArray;
  }
  console.log( number([3,4,8,2,1,2,2,6,3,4]));
  
  