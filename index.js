// TASK 1
const countFactorial = (RESULT) => {
    return RESULT == 0 ? 1 : RESULT * countFactorial(RESULT - 1)
}

const countDelimiters = (RESULT) => {
    let arr = []
    for (let i = RESULT; i >= 1; i--) {
        if (RESULT % i === 0) {
            arr.push(i)
        }
    }
    return arr
}

function enterTheNum() {
    const RESULT = window.prompt('Enter the number', '')
    processTheNum(RESULT)
}

function processTheNum(RESULT) {
    if (RESULT === null) {
        return
    }

    const REG_EXP = /0+[1-9][0-9]*/
    const IS_NUM_VALID = isFinite(RESULT) && RESULT >= 0 && Number(RESULT) % 1 === 0 && !REG_EXP.test(RESULT)
    const IS_NOT_EMPTY_OR_BLANK = RESULT !== '' && !RESULT.includes(' ')

    if (IS_NUM_VALID && IS_NOT_EMPTY_OR_BLANK) {
        console.log('Number: ' + RESULT + '\nFactorial: ' + countFactorial(RESULT)  + '\nSquare: ' + 
        (RESULT*RESULT) + '\nisPrime: ' + (RESULT % 2 !== 0) + '\nisEven: ' + (RESULT % 2 === 0) + 
        '\nDelimiters: ' + countDelimiters(RESULT))
    } else {
        console.log('Incorrect input!')
        enterTheNum()
    }
}

enterTheNum()



// TASK 2

function enterTheSymbol() {
    const SYMBOL = window.prompt('Enter something', '')
    processTheSymbol(SYMBOL)
}

function processTheSymbol(SYMBOL) {
    if (SYMBOL === null) {
        return 
    }
    const IS_LENGTH_VALID = SYMBOL.length >= 1 && SYMBOL.length <= 3
    if (IS_LENGTH_VALID && SYMBOL !== '' && SYMBOL.trim()) {
        enterNumber(SYMBOL)
    } else {
        console.log('Incorrect input!')
        enterTheSymbol()
    }
}
enterTheSymbol()

function enterNumber(SYMBOL) {
    const NUMBER = window.prompt('Enter the number', '')
    processNumber(SYMBOL, NUMBER)
}
function processNumber(SYMBOL, NUMBER) {
    if (NUMBER === null) {
        return 
    }

    const REG_EXP2 = /0+[1-9][0-9]*/
    const IS_NUM_VALID2 = isFinite(NUMBER) && NUMBER >= 0 && Number(NUMBER) % 1 === 0 && !REG_EXP2.test(NUMBER)
    const IS_NOT_EMPTY_OR_BLANK2 = NUMBER !== '' && !NUMBER.includes(' ')
    const IS_NUM_IN_SCOPE = (NUMBER > 0) && (NUMBER < 10)

    if (IS_NUM_VALID2 && IS_NOT_EMPTY_OR_BLANK2 && IS_NUM_IN_SCOPE) {
        console.log(((SYMBOL.trim() + ' ').repeat(NUMBER) + '\n').repeat(NUMBER))   
    } else {
        console.log('Incorrect input!')
        enterNumber(SYMBOL)
    }
}