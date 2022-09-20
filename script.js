let label = document.querySelector('.label');
let display = document.querySelector('#display');
let submit = document.querySelector('.submit');


function palindrome(str){

    var temp = [];
    for (var i = 0; i < str.length; i++){
        temp[i] = str[str.length - (1 + i)];
    }
    var com = temp.join("");
    console.log(com);
    if (com == str){
        console.log("True");
        return true;
    }
    console.log("False");
    return false;
}

submit.addEventListener('click', ()=>{palindrome(display.value)});