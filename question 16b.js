function numbers(array){
    array.sort((a, b) => a -b);
    console.log(numbers);
    var lastThreeNumbers = array.slice(-3);
    console.log(lastThreeNumbers);

    var firstThreeNumbers = array.slice( 0 ,3);
    console.log(firstThreeNumbers);
    
}
var number = [3,4,8,2,1,2,2,6,3,4];
numbers(number);
