
const keypad = document.getElementById("keypad");
const operands = keypad.querySelectorAll("#operand");
const operators = keypad.querySelectorAll("#operator");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const point = document.getElementById("point");

let xRegister;
let yRegister;
let logicAnswer;
let statusRegister = ""
let defaultText = "0"
let accumulator = 0;
let typingInProcess = false;
let operationInProcess = false


const inputLength = 8
var screenText = "";
document.getElementById("screenText").innerHTML = defaultText
//clear screen text
clear.addEventListener("click", () => clearAllLogic());

//process the equation

equals.addEventListener("click", () => equality());

point.addEventListener("click", () => modifyScreenText(point.innerHTML))

//add an event listener to each button, returning the innerHTML
for(let operand of operands) {
    operand.addEventListener("click", ()=> modifyScreenText(operand.innerHTML));
}

//add function to the operator keys
for(let operator of operators) {
    operator.addEventListener("click", ()=> leftSideOfEquation(screenText,operator.innerHTML));
}


//FUNCTIONAL -- DO NOT MODIFY!!!!!!
//update the string of numbers + update the screen
function modifyScreenText(num) {

    if(screenText.includes('.')) {
        if(num === '.') {
            if(operationInProcess === true)
            {
                clearScreentext()
                
            }
            else{
                num = ''
                console.log(screenText)

            }

          


            }
           
        }
    

    if(screenText === '' && num === '.') {
        num = '0.'
    }

    if(screenText === '0' && num === '0') {
        return;
    }


    if(screenText.length > inputLength) {
        
        if(operationInProcess === false) {

            return
        }
        else {
            clearScreentext();
            document.getElementById("screenText").innerHTML = screenText
            typingInProcess = false;
            operationInProcess = false;

        }
        
        
    }
    if(typingInProcess === false) {
        screenText += num
        document.getElementById("screenText").innerHTML = screenText
        operationInProcess = false;  

    }
    else 
    {
        clearScreentext();
        screenText += num
        document.getElementById("screenText").innerHTML = screenText
        typingInProcess = false;
        operationInProcess = false;
    }
       
}

//clear screen/string of numbers 
function clearScreentext() {

    screenText = ""
    document.getElementById("screenText").innerHTML = screenText
}

function clearAllLogic() {
    screenText = ""
    xRegister = undefined;
    yRegister = undefined;
    inProcess = false;
    statusRegister = ""
    accumulator = 0;
    document.getElementById("screenText").innerHTML = defaultText

}

function leftSideOfEquation(numberString, operator) {
//convert string to number and store the operator ready for
//retrival by equals


xRegister = parseFloat(numberString)
document.getElementById("screenText").innerHTML = xRegister
typingInProcess = true;




if(yRegister === undefined) {
    yRegister = xRegister
    statusRegister = operator
    operationInProcess = true;
    
    return
}

   
if (operationInProcess === true) {

    statusRegister = operator
    document.getElementById("screenText").innerHTML = roundToTwo(yRegister);
    return;

}
else if(operationInProcess === false) {
    
    logicAnswer = operate(yRegister, xRegister, statusRegister)
    statusRegister = operator
    yRegister = parseFloat(logicAnswer);
    document.getElementById("screenText").innerHTML = roundToTwo(yRegister);
    operationInProcess = true

}
  
}

function equality() {


    if(xRegister === undefined || yRegister === undefined || statusRegister === undefined) {
        return;
    }
  
    let answer = roundToTwo(parseFloat(operate(yRegister, parseFloat(screenText), statusRegister)));
    console.log(answer)

    if (isNaN(answer)) {
        document.getElementById("screenText").innerHTML = 'Error'
        xRegister = undefined;
        yRegister = undefined;
        inProcess = false;
        statusRegister = ""
        accumulator = 0;
        return;

    }



    document.getElementById("screenText").innerHTML = answer;
    yRegister = answer;
    operationInProcess = true;

    
  
}
function operate(x, y, operator) {
   

    switch(operator) {
        case '+':
            return x + y

        case '-':
            return x - y;
        

        case '÷':
            return x / y;
        

        case 'X':
            return x * y;
        
    }
    
}

function roundToTwo(num) {    
    return +(Math.round(num + "e+10")  + "e-10");
}
