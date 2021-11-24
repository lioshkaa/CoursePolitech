let lowerLetters="qwertyuiopasdfghjklzxcvbnm";
let upperLetters="QWERTYUIOPLKJHGFDSAZXCVBNM";
let number="0123456789";
let special="!@#$%^&*()_-+=\|/.,:;[]{}";

let inputTest=document.getElementById("input_test");
let blockCheck=document.getElementById("block_check");

inputTest.addEventListener('keyup',function(evt){
  let inputTestVal=inputTest.value;
  let isLowerLetters=false;
  let isUpperLetters=false;
  let isNumber=false;
  let isSpecial=false;

  for(let i=0;i<inputTestVal.length;i++){
    if(!isLowerLetters && lowerLetters.indexOf(inputTestVal[i])!=-1){
      isLowerLetters=true;
    }
    else if(!isUpperLetters && upperLetters.indexOf(inputTestVal[i]!=-1)){
      isUpperLetters=true;
    }
    else if(!isNumber && number.indexOf(inputTestVal[i])!=-1){
      isNumber=true;
    }
    else if(!isSpecial && special.indexOf(inputTestVal[i])!=-1){
      isSpecial=true;
    }
  }
  let rating=0;
    if(isLowerLetters){
      rating++
    }
   if(isUpperLetters){
      rating++;
    }
   if(isNumber){
      rating++;
    }
   if(isSpecial){
      rating++;
    }

    if(inputTestVal.length<6 && rating<3){
        blockCheck.style.width='10%';
        blockCheck.style.backgroundColor="#e7140d";
    }
    else if(inputTestVal.length<6 && rating>=3){
        blockCheck.style.width="50%";
        blockCheck.style.backgroundColor="#ffdb00";
    }
    else if(inputTestVal.length>8 && rating<3){
        blockCheck.style.width="50%";
        blockCheck.style.backgroundColor="#ffdb00";
    }
    else if(inputTestVal.length>=8 && rating>=3){
      blockCheck.style.width="100%";
      blockCheck.style.backgroundColor="#61ac27";
    }
    else if(inputTestVal.length>=6 && rating==1){
      blockCheck.style.width="10%";
      blockCheck.style.backgroundColor="#e7140d";
    }
    else if(inputTestVal.length>=6 && rating>1 && rating<4){
      blockCheck.style.width="50%";
      blockCheck.style.backgroundColor="#ffdb00";
    }
    else if(inputTestVal.length>=6 && rating==4){
      blockCheck.style.width="100%";
      blockCheck.style.backgroundColor="#61ac27"

    }
})