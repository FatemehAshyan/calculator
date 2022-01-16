let num1 ="";
let operator = "";
let num2 ="";

function setNum(number) {
    if (operator) {
        num2+=number;
        result.value = number==='.'? num2+"0" : num2 ;
    }else{
        num1+=number;
        result.value = number==='.'? num1+"0" : num1 ;
    }
}

function setOpration(opr) {
    if (num1) {
        operator = opr;
        result.value = 0;
    }
}
function setResult(){    
    if(num1&&num2&&operator){
        let rus = eval(num1+operator+num2);
        result.value = rus;
    }else{
        result.value = 0;
    }
}
function reset() {
    num1 = 0;
    num2 = 0;
    operator = "";
    result.value = 0;
}