let currentInput='';
let currentOperation='';
let previousInput='';
function appendNumber(number){
    currentInput+=number;
    document.getElementById('display').value=currentInput;
}

function setOperation(operation){
    if(currentInput==='') return;
    previousInput=currentInput;
    currentOperation=operation;
    currentInput='';
}

function clearDisplay(){
    currentInput='';
    previousInput='';
    currentOperation='';
    document.getElementById('display').value='';
}

function calculateResult(){
    if(currentInput===''||previousInput==='')return;
    let result;
    const prev=parseFloat(previousInput);
    const current=parseFloat(currentInput);

    if(currentOperation==='+'){
        result=prev+current;    
    } else if (currentOperation==='-'){
        result=prev-current;
    } else if (currentOperation==='*'){
        result=prev*current;
    } else if (currentOperation==='/'){
        if(current===0){
            alert('Cannot divide by zero!');
            clearDisplay();
            return
        }
        result=prev/current;
    }

    currentInput=result.toString();
    document.getElementById('display').value=currentInput;

}