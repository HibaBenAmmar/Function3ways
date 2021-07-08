// Function declaration

function squaredNumber1 (
    number1,
    number2
    ) {
        const total1 = number1*number1;
        const total2 = number2*number2;
        const totalsum = total1+total2;
        const totalSumSquared = totalsum*totalsum
    return totalSumSquared;
  }
  
  console.log(squaredNumber1(2, 2,));

// Function expression

const squaredNumber2 = function(
    number1,
    number2
    ) {
        const total1 = number1*number1;
        const total2 = number2*number2;
        const totalsum = total1+total2;
        const totalSumSquared = totalsum*totalsum
    return totalSumSquared;
  };
  
  console.log(squaredNumber2(2, 2,));

// Arrow function (function expression)

const squaredNumber3 = (number1,number2) =>{
        const total1 = number1*number1;
        const total2 = number2*number2;
        const totalsum = total1+total2;
        const totalSumSquared = totalsum*totalsum
    return totalSumSquared;
  }
  
  console.log(squaredNumber3(2, 2,));