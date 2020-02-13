
const keypad = document.getElementById("keypad");
const operands = keypad.querySelectorAll("#operand");
const clear = document.getElementById("clear");

const inputLength = 8
var screenText = "";

//clear screen text
clear.addEventListener("click", () => clearScreentext());

//add an event listener to each button, returning the innerHTML
for(let operand of operands) {
    operand.addEventListener("click", ()=> modifyScreenText(operand.innerHTML));
}

//update the string of numbers + update the screen
function modifyScreenText(num) {
    if(screenText.length > inputLength) {
        return
    }
    else {
    screenText += num
    document.getElementById("screenText").innerHTML = screenText
    }
}
//clear screen/string of numbers 
function clearScreentext() {

    screenText = ""
    document.getElementById("screenText").innerHTML = screenText
}