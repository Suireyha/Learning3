let label = document.querySelector('.label');
let display = document.querySelector('#display');
let submit = document.querySelector('.submit');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function fib(int){

    let sequence = [];
    
    for (var i = 0; i < int; i++){
        if(i < 2){
            sequence[i] = 1;
        }
        else{
            sequence[i] = (sequence[i - 1] + sequence[i - 2]);
        }
    }

    display.value = (sequence[sequence.length - 1]);
}


submit.addEventListener('click', ()=>{fib(display.value)});