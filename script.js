
const keypad = document.getElementById("keypad");
const operands = keypad.querySelectorAll("#operand");
const operators = keypad.querySelectorAll("#operator");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
let xRegister;
let yRegister;
let logicAnswer;
let statusRegister = ""
let accumulator = 0;
let typingInProcess = false;


const inputLength = 8
var screenText = "";

//clear screen text
clear.addEventListener("click", () => clearAllLogic());

//process the equation

equals.addEventListener("click", () => operate(xRegister, yRegister, statusRegister));

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
    if(screenText.length > inputLength) {
        return
    }
    if(typingInProcess === false) {
        screenText += num
        document.getElementById("screenText").innerHTML = screenText  

    }
    else 
    {
        clearScreentext();
        screenText += num
        document.getElementById("screenText").innerHTML = screenText
        typingInProcess = false;
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
    document.getElementById("screenText").innerHTML = screenText

}




function leftSideOfEquation(numberString, operator) {
//convert string to number and store the operator ready for
//retrival by equals

xRegister = parseInt(numberString)
document.getElementById("screenText").innerHTML = xRegister
typingInProcess = true;

if(yRegister === undefined) {
    yRegister = xRegister
    statusRegister = operator
    
    return
}
else
{
        statusRegister = operator
        console.log(`${xRegister} ${statusRegister} ${yRegister}`)
        logicAnswer = operate(yRegister, xRegister, statusRegister)
        yRegister = logicAnswer;
        document.getElementById("screenText").innerHTML = yRegister;
    

}


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







