function palindromeString(str){
    var reversedString =str.split('').reverse().join('');
    return str === reversedString;

}
console.log( palindromeString("obb"));