function compute(expression){
console.log(expression);
let sum = additionTest1(expression.split("+"));
return sum;
let subtract = subtractionTest(expression.split("-"));
return subtract;
let multiply = multiplicationTest(expression.split("*"));
return multiply;
let divide = divisionTest(expression.split("/"));
return divide;
let result1 = additionAndSubtractionTest(expression);
return result1;

}


function additionTest1(expressionArray){
    let sum = 0;
    for(let i = 0; i<expressionArray.length; i++){
        sum +=parseFloat(expressionArray[i],10)
    }
    return sum;
}

function subtractionTest(expressionArray){
    let subtract = 0;
    for(let j=0; j<expressionArray.length; j++){
        subtract-=parseFloat(expressionArray[j])
    }
return subtract;
}

function multiplicationTest(expressionArray){
    let multiply = 0;
    for(let k=0; k<expressionArray.length; k++){
        multiply-=parseFloat(expressionArray[k])
    }
return multiply;
}

function divisionTest(expressionArray){
    let divide = 0;
    for(let l=0; l<expressionArray.length; l++){
        subtract-=parseFloat(expressionArray[l])
    }
return divide;
}

//Not Sure if this works
function additionAndSubtractionTest(expressionArray){
    var result1 = 0;
    let m=0;
    while(m < expressionArray.length-1){
        if(currValue == "+" || currValue == "-") {
        let operand1 = parseFloat(expressionArray[m-1]);
        let operand2 = parseFloat(expressionArray[m+1]);
        if(expressionArray[m] == "-"){
          result1 = operand1 - operand2;}
        else 
          result1 = operand1 + operand2;
}
else m++;
    }    
return result1;
}