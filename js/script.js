function Submit(){
  // Making variables
  let num1 = document.getElementById('1').value;
  let num2 = document.getElementById('2').value;
  let result = 0
  // Checking if user entered numbers
  if (num1&&num2){
    //Checking if numbers are whole and positive
    if(num1%1==0&&num2%1==0&&num1>0&&num2>0){
      for (let i=0; i<num2; i++){
        result+=num1;
      }
       document.getElementById('Result').innerHTML = num1+"x"+num2+"="+result
    } else{
      //warn user if they didnt enter 2 valid numbers
      document.getElementById('Result').innerHTML = "Please enter 2 valid numbers (whole and positive)";
    }
  } else{
    //warn user if they didnt enter 2 valid numbers
    document.getElementById('Result').innerHTML = "Please enter 2 valid numbers";
  }
}