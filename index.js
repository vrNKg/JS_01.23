// TASK 1
const countFactorial = (result) => {
    return result == 0 ? 1 : result * countFactorial(result - 1)
}

const countDelimiters = (result) => {
    const arr = []
    for (let i = result; i >= 1; i--) {
        if (result % i === 0) {
            arr.push(i)
        }
    }
    return arr
}

function enterTheNum() {
    const result = window.prompt('Enter the number', '')
    processTheNum(result)
}

function processTheNum(result) {
    if (result === null) {
        return
    }

    const regExp = /0+[1-9][0-9]*/
    const isNumValid = isFinite(result) && result >= 0 && Number(result) % 1 === 0 && !regExp.test(result)
    const isNotEmptyOrBlank = result !== '' && !result.includes(' ')

    if (isNumValid && isNotEmptyOrBlank) {
        console.log('Number: ' + result + '\nFactorial: ' + countFactorial(result)  + '\nSquare: ' + 
        (result*result) + '\nisPrime: ' + (result % 2 !== 0) + '\nisEven: ' + (result % 2 === 0) + 
        '\nDelimiters: ' + countDelimiters(result))
    } else {
        console.log('Incorrect input!')
        enterTheNum()
    }
}

enterTheNum()



// TASK 2

function enterTheSymbol() {
    let symbol = window.prompt('Enter something', '');
    processTheSymbol(symbol)
}

function processTheSymbol(symbol) {
    if (symbol === null) {
            return 
    }
    const isLengthValid = symbol.length >= 1 && symbol.length <= 3
    if (isLengthValid && symbol !== '' && symbol.trim()) {
        enterNumber(symbol)
    } else {
        console.log('Incorrect input!');
        enterTheSymbol()
    }
}
enterTheSymbol()

function enterNumber(symbol) {
    let number = window.prompt('Enter the number', '');
    processNumber(symbol, number)
}
function processNumber(symbol, number) {
    if (number === null) {
        return 
    }

    const regExp2 = /0+[1-9][0-9]*/
    const isNumValid2 = isFinite(number) && number >= 0 && Number(number) % 1 === 0 && !regExp2.test(number)
    const isNotEmptyOrBlank2 = number !== '' && !number.includes(' ')
    const isNumInScope = (number > 0) && (number < 10)

    if (isNumValid2 && isNotEmptyOrBlank2 && isNumInScope) {
        console.log(((symbol.trim() + ' ').repeat(number) + '\n').repeat(number))   
    } else {
        console.log('Incorrect input!');
        enterNumber(symbol)
    }
}