/*function that recieves an array and returns the smallest number from that array*/
function findMinValue(arr) {
    var minValue = arr[0];

    for (var n = 1; n < arr.length; n++) {
        if (arr[n] < minValue) {
            minValue = arr[n];
        }
    }

    return minValue;
}
var numbers = [9, 4, 2, 76, 5];
var minResult = findMinValue(numbers);
console.log(minResult);