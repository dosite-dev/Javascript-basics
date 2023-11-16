/* Create a function that calculates the BMI of a person and returns the specific classification of a person according to the height and weight provided by a user.
    How to calculate Body Mass Index:
    BMI = weight(kg) / (height(m) x height(m)) */
    function calculateBMI(weight,height){
        var bmi=weight/(height * height);
        var result="";

    
    if (bmi < 18.5) {
        result="Underweight";     
        }
        else if(bmi>= 18.5 && bmi <= 24.9){
            result="normal weight";
        }
        else if(bmi >=25 && bmi<= 29.9){
            result="over weight";
        }
        else if(bmi >=30 && bmi<=34.9){
            result="moderately overweight";

        }
        else if(bmi >=35 && bmi <= 39.9){
            result=" Severely Overweight";
        }
        else{
            result="Morbidly Overweight";
        }
return {bmi:result};
}
var results = calculateBMI(80, 1.75);
console.log (results);