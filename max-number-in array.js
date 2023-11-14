/*function that recieves an array and returns the smallest number from that array*/
function MaxValue(arr) {
    var maxValue = arr[0];

    for (var n = 1; n < arr.length; n++) {
        if (arr[n] > maxValue) {
            maxValue = arr[n];
        }
    }

    return maxValue;
}
var numbers = [6, 8, 100, 98, 5];
var maxResult = MaxValue(numbers);
console.log(maxResult);