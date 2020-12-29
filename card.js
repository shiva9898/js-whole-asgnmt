function validateCreditCard(creditCardNum){

  if(creditCardNum.length !== 16){
    return false;
  }

  for(var i = 0; i < creditCardNum.length; i++){
  
    var currentNumber = creditCardNum[i];

    currentNumber = Number.parseInt(currentNumber);

    if(!Number.isInteger(currentNumber)){
      return false;
    }
  }

  var obj = {};
  for(var i = 0; i < creditCardNum.length; i++){
    obj[creditCardNum[i]] = true;
  }
  if(Object.keys(obj).length < 2){
    return false;
  }

  if(creditCardNum[creditCardNum.length - 1] % 2 !== 0){
    return false;
  }

  var sum = 0;
  for(var i = 0; i < creditCardNum.length; i++){
    sum += Number(creditCardNum[i]);
  }
  if(sum <= 16){
    return false;
  }

  return true;
};

console.log(validateCreditCard('9999777788880000')); 
console.log(validateCreditCard('6666666666661666')); 
console.log(validateCreditCard('a92332119c011112')); 
console.log(validateCreditCard('4444444444444444')); 
console.log(validateCreditCard('1211111111111112')); 
