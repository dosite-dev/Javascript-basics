/*Create a function that displays multiples of 5 */

function multiplesOfFive(nber) {
    for (let n = 1; n <= nber; n++) {
      if (n % 5 === 0) {
        console.log(n);
      }
    }
  }
    multiplesOfFive(30);