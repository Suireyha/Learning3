let label = document.querySelector('.label');
let display = document.querySelector('#display');
let submit = document.querySelector('.submit');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function result(isPalindrome){
    
    if (isPalindrome){
        label.setAttribute('style', 'color: lime; font-size: 30px;');
        display.setAttribute('style', 'border: solid 3px lime; box-shadow: 0 0 5px lime');
        label.textContent = "Palindrome!";
        await sleep(900);
        label.setAttribute('style', 'color: white; font-size: 25px;');
        display.setAttribute('style', 'border: solid 2px white; box-shadow: 0 0 4px white');
        label.textContent = "Palindrome?";
    }

    else{
        label.setAttribute('style', 'color: red; font-size: 30px;');
        display.setAttribute('style', 'border: solid 3px red; box-shadow: 0 0 5px red');
        label.textContent = "Palindrome.";
        await sleep(900);
        label.setAttribute('style', 'color: white; font-size: 25px;');
        display.setAttribute('style', 'border: solid 2px white; box-shadow: 0 0 4px white');
        label.textContent = "Palindrome?";
    }

}

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

submit.addEventListener('click', ()=>{
    result(palindrome(display.value))
});