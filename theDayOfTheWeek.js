function dayOfTheWeek(day){
    var result;
    switch(day){
        case 1:
            result="monday";
            return result;
            break;
            case 2:
            result="tuesday";
            return result;
            break;
            case 3:
            result="wednesday";
            return result;
            break;
            case 4:
            result="Thursday";
            return result;
            break;
            case 5:
            result="Friday";
            return result;
            break;
            case 6:
            result="saturday";
            return result;
            break;
            case 7:
            result="Sunday";
            return result;
            break;
            
            default:
                console.log("not match");
    }
    return result;
   

}
console.log(dayOfTheWeek(6));