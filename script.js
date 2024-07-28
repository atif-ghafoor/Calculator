import { Parser } from 'expr-eval'; // experssion evaluate


const display = document.getElementById('input'); // input bar
const operators = ['+', '-', '*', '/', '%']
let ValuInDisplay;

// function to append number in display
function appendNumber(number){
    display.value += number
    ValuInDisplay += number
}

// function to clear display
function clearDisplay(){
    display.value = ''
}

// function to append operators in display
function appendOperator(op){
    if (!operators.includes(display.value[display.value.length-1])){
        display.value += `${op}`;
        ValuInDisplay += op
    }
}

// function to del last number in the display 
function delLastNumber (){
    display.value = display.value.slice(0, -1)
}

// function to evalute expressions in display
function calculate(){
    let parse = new Parser()
    const result = parse.evaluate(display.value)
    display.value = result
}

// while focus on diaplay boreder color change
let input = document.querySelector('input')
input.addEventListener('focus', function (){
    input.style.border = 'solid 1px #4285F4'
})

// while not focus on displaly its border color change back to normal
input.addEventListener('blur', function(){
    input.style.border = 'solid 1px #DADCE0'
})

// the code to take only numric input from keyboard and prevent from repeating operators like % % % etc.
input.addEventListener('keypress', function(e){
    if (e.key === 'Enter'){ // when we enter to calculate display input
        calculate()
    }

    // code to prevent user from enter alphabatical or some speasial symbols
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '(', ')', '%', '/', '*', '-', '+', 'Backspace', 'Delete', 'Enter']
    if (!allowedKeys.includes(e.key)){
        e.preventDefault()
    }

    // code to prevent user enter operater again and again
    else{
        if (!operators.includes(e.key)){// logic to add only numbers to ValuInDisplay
            ValuInDisplay += e.key
        }
        if (operators.includes(ValuInDisplay[ValuInDisplay.length-1])){// if last letter of display is operator then prevent e.key
            e.preventDefault()
        }else{
            ValuInDisplay += e.key // logic to add only those operators which are not repating to ValuInDisplay
        }
    }
})

// for calulator on screen button to input numric values
let buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    let buttonClassname = button.className
    button.addEventListener('click', function(){
        if (buttonClassname === 'one'){
            appendNumber(1)
        }
        if (buttonClassname === 'two'){
            appendNumber(2)
        }
        if (buttonClassname === 'three'){
            appendNumber(3)
        }
        if (buttonClassname === 'four'){
            appendNumber(4)
        }
        if (buttonClassname === 'five'){
            appendNumber(5)
        }
        if (buttonClassname === 'six'){
            appendNumber(6)
        }
        if (buttonClassname === 'seven'){
            appendNumber(7)
        }
        if (buttonClassname === 'eight'){
            appendNumber(8)
        }
        if (buttonClassname === 'nine'){
            appendNumber(9)
        }
        if (buttonClassname === 'zero'){
            appendNumber(0)
        }
        if (buttonClassname === 'plus'){
            appendOperator('+')
        }
        if (buttonClassname === 'minus'){
            appendOperator('-')
        }
        if (buttonClassname === 'multiply'){
            appendOperator('*')
        }
        if (buttonClassname === 'divide'){
            appendOperator('/')
        }
        if (buttonClassname === 'module'){
            appendOperator('%')
        }
        if (buttonClassname === 'ac'){
            clearDisplay()
        }
        if (buttonClassname === 'ce'){
            delLastNumber()
        }
        if (buttonClassname === 'dot'){
            appendNumber('.')
        }
        if (buttonClassname === 'equal'){
            calculate()
        }
    })
})

