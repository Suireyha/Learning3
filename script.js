let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let equals = document.querySelector('.equals');
let numberButton = document.querySelectorAll('.number');
let operatorButtons = document.querySelectorAll('.operator');
let display = document.querySelector('#display');
let clear = document.querySelector('.clear');

var uInput = "";
var uAdd = false;
var uMinus = false;
var uMultiply = false;
var uDivide = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let calculator = {
    '+': (x, y)=>{
        return x+y;
    },

    '-': (x, y)=>{
        return x-y;
    },

    '*': (x, y)=>{
        return x*y;
    },

    '/': (x, y)=>{
        return x/y;
    }
};

function operate(operator, a, b){
    display.value = (calculator[operator](a, b));
}

clear.addEventListener('click', ()=>{
    display.value = "";
});

equals.addEventListener('click', ()=>{
    var operation;
    var next;
    var total;
    let copy = display.value;
    uInput = display.value;
    display.value = null;
    
    

    operation = uInput.indexOf("+", "-", "*", "/");

    copy = copy.slice(copy.indexOf(operation));

    next = copy.indexOf("+", "-", "*", "/");

    ind = uInput.indexOf(operation);
    var operand1 = uInput.substring(0, ind);

    while (operation != -1){
        
        console.log(operation);

        console.log(next);

        if (next == -1){
            var operand2 = uInput.substring(ind + 1, uInput.length);
        }
        else{
            var operand2 = uInput.substring(ind + 1, next);
        }

        console.log(operand1);
        console.log(operand2);

        console.log(uInput[operation]);

        switch(uInput[operation]){
            case '+':
                total += operate('+', operand1, operand2);
                operand1 = total;
                break;
            case '-':
                total += operate('-', operand1, operand2);
                operand1 = total;
                break;
            case '*':
                total += operate('*', operand1, operand2);
                operand1 = total;
                break;
            case '/':
                total += operate('/', operand1, operand2);
                operand1 = total;
                break;
            default:
                console.log("Not an operator");
        }

        operation = copy.indexOf("+", "-", "*", "/");

        copy = copy.slice(copy.indexOf(operation));

        next = copy.indexOf("+", "-", "*", "/");

    }

    display.value = total;
});

numberButton.forEach(el =>{
    el.addEventListener('click', (e)=>{
        display.value += e.target.innerText
    });
});

operatorButtons.forEach(el =>{
    el.addEventListener('click', (e)=>{
        switch (e.target.innerText){
            case '+':
                display.value += '+';
                break;
            case '-':
                display.value += '-';
                break;
            case 'x':
                display.value += '*';
                break;
            case '/':
                display.value += '/';
                break;
        }
        display.select;
        display.focus();
    })
})
