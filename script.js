let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {

    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);   //The eval function in JavaScript is used to execute a string of code within the local scope. eval can be used to dynamically execute code generated at runtime.//
            input.value = string;
        }

        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }

        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length-1);
            input.value = string;
        }

        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})