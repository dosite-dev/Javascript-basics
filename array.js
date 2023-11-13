/* function that recieves an array and return the sum of all the elements */

function sumOfArray(arr) {
    var sum = 0;
    for (var n = 0; n < arr.length; n++) {
        sum += arr[n];
    }
    return sum;
}
var numbers = [6, 9, 7, 9, 5];
var result = sumOfArray(numbers);
console.log(result);