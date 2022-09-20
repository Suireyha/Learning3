let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let equals = document.querySelector('.equals');
let numberButton = document.querySelectorAll('.number');
let display = document.querySelector('#display');
let clear = document.querySelector('.clear');

var uInput = "";
var uAdd = false;
var uMinus = false;
var uMultiply = false;
var uDivide = false;

let calculator = {
    '+': (x, y)=>{
        return x+y;
    },

    help: (x)=>{
        return x+5;
    }
};

plus.addEventListener('click', ()=>{ 
    uAdd = true;
    uMinus = false;
    uMultiply = false;
    uDivide = false;
    display.value += '+';
    display.select
    display.focus();
});

minus.addEventListener('click', ()=>{
    uAdd = false;
    uMinus = true;
    uMultiply = false;
    uDivide = false;
    display.value += '-';
    display.select
    display.focus();

});

multiply.addEventListener('click', ()=>{
    uAdd = false;
    uMinus = false;
    uMultiply = true;
    uDivide = false;
    display.value += '*';
    display.select
    display.focus();

});

divide.addEventListener('click', ()=>{
    uAdd = false;
    uMinus = false;
    uMultiply = false;
    uDivide = true;
    display.value += '/';
    display.select
    display.focus();

});

clear.addEventListener('click', ()=>{
    display.value = "";
});

equals.addEventListener('click', ()=>{
    uInput = display.value;
    display.value = null;
    

    if(uAdd){
        ind = uInput.indexOf("+");
        display.value = ((+uInput.substring(0, ind)) + (+uInput.substring(ind + 1, uInput.length)));
    }
    else if(uMinus){
        ind = uInput.indexOf("-");
        display.value = ((+uInput.substring(0, ind)) - (+uInput.substring(ind + 1, uInput.length)));
    }
    else if(uMultiply){
        ind = uInput.indexOf("*");
        display.value = ((+uInput.substring(0, ind)) * (+uInput.substring(ind + 1, uInput.length)));
    }
    else if(uDivide){
        ind = uInput.indexOf("/");
        display.value = ((+uInput.substring(0, ind)) / (+uInput.substring(ind + 1, uInput.length)));
    }
});

numberButton.forEach(el =>{
    el.addEventListener('click', (e)=>{
        display.value += e.target.innerText
    });
});


//Add multiple numbers