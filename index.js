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

