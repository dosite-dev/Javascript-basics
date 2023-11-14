/*Create a function that receives an array of numbers and returns the average of the numbers
*/ 


function calculateAverage(arr) {
    var sum = 0;

    for (var n = 0; n < arr.length; n++) {
        sum += arr[n];
    }

    var average = sum / arr.length;
    return average;
}

var numbers = [6, 7, 8, 9, 10];
var averageResult = calculateAverage(numbers);
console.log(averageResult);
