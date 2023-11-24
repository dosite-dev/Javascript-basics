function countVowels(str){
   var  vowelsCount=0;
   const vowels=["a","e","i","u","o"];
   for (let char of str){
    if (vowels .includes(char)){
        vowelsCount++;
    }

   }
   return vowelsCount;


}
console.log(countVowels("umutoni"));