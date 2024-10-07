function add(number1,number2){
    return number1 + number2
}

function subtract(number1,number2){
    return number1 - number2
}

function multiply(number1,number2){
    return number1 * number2
}

function divide(number1,number2){
    return number1 / number2
}

// addition event
const addBtn = document.getElementById('add')
addBtn.addEventListener('click',function(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0 ;
    const number2 = parseFloat(document.getElementById('number2').value) || 0 ;
    const result = add(number1 ,number2);

    calcResult = document.getElementById('calculation-result')
    calcResult.textContent = result
})


// subtraction button
const subtractBtn = document.getElementById('subtract')
subtractBtn.addEventListener('click',function(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0 ;
    const number2 = parseFloat(document.getElementById('number2').value) || 0 ;
    const result = subtract(number1 ,number2);

    calcResult = document.getElementById('calculation-result')
    calcResult.textContent = result
})

// multiply

const multiplyBtn = document.getElementById('multiply')
multiplyBtn.addEventListener('click',function(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0 ;
    const number2 = parseFloat(document.getElementById('number2').value) || 0 ;
    const result = multiply(number1 ,number2);

    calcResult = document.getElementById('calculation-result')
    calcResult.textContent = result
})

// divition

const divideBtn = document.getElementById('divide')
divideBtn.addEventListener('click',function(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0 ;
    const number2 = parseFloat(document.getElementById('number2').value) || 0 ;
    const result = divide(number1 ,number2);

    calcResult = document.getElementById('calculation-result')
    calcResult.textContent = result
})