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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Contains definitions for various operations, only accessed via operate()
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

//The user-friendly calculation function
function operate(operator, a, b){
    return (calculator[operator](a, b));
}

//Clear the display when clear button is pressed
clear.addEventListener('click', ()=>{
    display.value = "";
});

//Might as well be main()
equals.addEventListener('click', ()=>{
    var operation = -1;
    var next = -1;
    var total;
    var isOperator = false;
    let copy = display.value;
    uInput = display.value;
    
    /*Disgusting code that figures out the index of the first operator
    *Iterate through each element, if it's an operator then save its value*/
    for (var i = 0; i < uInput.length; i++) {
        if (uInput.charAt(i) == "+" | uInput.charAt(i) == "-" |
        uInput.charAt(i) == "*" | uInput.charAt(i) == "/"){
            isOperator = true;
            if (operation < i){
                operation = uInput.charAt(i);
            }
        } 
    };

    //If there was no operator, just leave here
    if (isOperator == false){
        display.value = "Projectile invalid";
        return;
    }

    //copy is the array after the first operator
    copy = copy.slice(copy.indexOf(operation) + 1);
    console.log(copy);

    //If there's a second operator, find it and save it's value
    for (var i = 0; i < copy.length; i++) {
        if (copy.charAt(i) == "+" | copy.charAt(i) ==  "-" |
        copy.charAt(i) ==  "*" | copy.charAt(i) ==  "/"){
            if (next < i){
                next = copy.charAt(i);
            }
        } 
    };

    /*Initialise the index of the first operator, and decleration of
     index of second operator */
    let ind = uInput.indexOf(operation);
    let ind2;
    var operand1 = uInput.substring(0, ind);
    

    while (uInput.indexOf(operation) > -1){

        //If there are duplicate operators, don't use the wrong index for 2nd
        if (operation == next){
            ind2 = uInput.indexOf(next) + uInput.indexOf(operation) + 1;
        }
        else{
            ind2 = uInput.indexOf(next);
        }
        
        //If there's multiple operators, divide the expression into seperate parts
        if (next == -1){
            var operand2 = uInput.substring(ind + 1);
        }
        else{
            var operand2 = uInput.substring(ind + 1, ind2);
        }

        //Calculate expression
        total =+ operate(operation, (+operand1), (+operand2));
        operand1 = total;

        //Get ready for subsequent expression (if multiple operators)
        copy = copy.slice(copy.indexOf(operation + 1));
        operation = next;

        next = -1;

        for (var i = 0; i < copy.length; i++) {
            if (copy.charAt(i) == "+" | copy.charAt(i) == "-" | 
            copy.charAt(i) == "*" | copy.charAt(i) == "/"){
                if (next < i){
                    next = copy.charAt(i);
                }
            } 
        };

        console.log(next);
        ind = uInput.indexOf(operation, ind + 1);
    }
    display.value = total;
});

//Make numbers actually display to the calculator
numberButton.forEach(el =>{
    el.addEventListener('click', (e)=>{
        display.value += e.target.innerText
    });
});

//Make operators actually display to the calculator
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