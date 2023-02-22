// create dom
const container = document.createElement('main')
container.className = 'container'
document.body.append(container)

const mainWrapper = document.createElement('div')
mainWrapper.className = 'main-wrapper'
container.append(mainWrapper)

const inputNum = document.createElement('input')
inputNum.value = '0'
inputNum.className = 'input-area'
inputNum.type = 'text'
inputNum.readOnly = 'readonly'
inputNum.maxLength = 9
mainWrapper.append(inputNum)

const bttnsWrapper = document.createElement('section')
bttnsWrapper.className = 'bttns-wrapper'
mainWrapper.append(bttnsWrapper)

const cleanBtn = document.createElement('button')
cleanBtn.innerHTML = 'C'
cleanBtn.className = 'btn clean-delete'
bttnsWrapper.append(cleanBtn)

const prosOrCons = document.createElement('button')
prosOrCons.innerHTML = '+/-'
prosOrCons.className = 'btn pros-or-cons'
bttnsWrapper.append(prosOrCons)

const deleteBtn = document.createElement('button')
deleteBtn.innerHTML = 'Del'
deleteBtn.className = 'btn clean-delete'
deleteBtn.onclick = function() {deleteAll()}
bttnsWrapper.append(deleteBtn)

const divideBtn = document.createElement('button')
divideBtn.innerHTML = '/'
divideBtn.className = 'btn operator'
bttnsWrapper.append(divideBtn)

const sevenBtn = document.createElement('button')
sevenBtn.innerHTML = '7'
sevenBtn.className = 'btn number'
bttnsWrapper.append(sevenBtn)

const eightBtn = document.createElement('button')
eightBtn.innerHTML = '8'
eightBtn.className = 'btn number'
bttnsWrapper.append(eightBtn)

const nineBtn = document.createElement('button')
nineBtn.innerHTML = '9'
nineBtn.className = 'btn number'
bttnsWrapper.append(nineBtn)

const multipleBtn = document.createElement('button')
multipleBtn.innerHTML = 'x'
multipleBtn.className = 'btn operator'
bttnsWrapper.append(multipleBtn)

const fourBtn = document.createElement('button')
fourBtn.innerHTML = '4'
fourBtn.className = 'btn number'
bttnsWrapper.append(fourBtn)

const fiveBtn = document.createElement('button')
fiveBtn.innerHTML = '5'
fiveBtn.className = 'btn number'
bttnsWrapper.append(fiveBtn)

const sixBtn = document.createElement('button')
sixBtn.innerHTML = '6'
sixBtn.className = 'btn number'
bttnsWrapper.append(sixBtn)

const minusBtn = document.createElement('button')
minusBtn.innerHTML = '-'
minusBtn.className = 'btn operator'
bttnsWrapper.append(minusBtn)

const oneBtn = document.createElement('button')
oneBtn.innerHTML = '1'
oneBtn.className = 'btn number'
bttnsWrapper.append(oneBtn)

const twoBtn = document.createElement('button')
twoBtn.innerHTML = '2'
twoBtn.className = 'btn number'
bttnsWrapper.append(twoBtn)

const threeBtn = document.createElement('button')
threeBtn.innerHTML = '3'
threeBtn.className = 'btn number'
bttnsWrapper.append(threeBtn)

const plusBtn = document.createElement('button')
plusBtn.innerHTML = '+'
plusBtn.className = 'btn operator'
bttnsWrapper.append(plusBtn)

const zeroBtn = document.createElement('button')
zeroBtn.innerHTML = '0'
zeroBtn.className = 'btn number'
bttnsWrapper.append(zeroBtn)

const dblZeroBtn = document.createElement('button')
dblZeroBtn.innerHTML = '00'
dblZeroBtn.className = 'btn number'
bttnsWrapper.append(dblZeroBtn)

const dotBtn = document.createElement('button')
dotBtn.innerHTML = '.'
dotBtn.className = 'btn dot-btn'
bttnsWrapper.append(dotBtn)

const equalBtn = document.createElement('button')
equalBtn.innerHTML = '='
equalBtn.className = 'btn equal'
bttnsWrapper.append(equalBtn)

// create varaibles
const bttns = document.querySelectorAll('.btn')
let num1 = ''
let num2 = ''
let operator = ''

// functions
cleanBtn.addEventListener('click', (e) => {
    if (operator === '') {
        num1 = ''
        inputNum.value = num1
    } else {
        num2 = ''
        inputNum.value = num2
    }
})

prosOrCons.addEventListener('click', () => {
    if (operator === '') {
        if (!inputNum.value.includes('-')) {
            if (num1 === '') {
                num1 = '0'
            }
            num1 = '-' + num1
            inputNum.value = num1
        } else {
            num1 = Math.abs(num1)
            inputNum.value = num1
        }
    } else {
        if (!inputNum.value.includes('-')) {
            if (num2 === '') {
                num2 = '0'
            }
            num2 = '-' + num2
            inputNum.value = num2
        } else {
            num2 = Math.abs(num2)
            inputNum.value = num2
        }
    }
})

function deleteAll(message = 0) {
    num1 = ''
    num2 = ''
    operator = ''
    inputNum.value = `${message}`
}

dotBtn.addEventListener('click', (e) => {
    if (operator === '') {
        if (!num1.includes('.')) {
            if (num1 === '') {
                num1 = '0'
            }
            num1 += '.'
            inputNum.value = num1
        }
    } else {
        if (!num2.includes('.')) {
            if (num2 === '') {
                num2 = '0'
            }
            num2 += '.'
            inputNum.value = num2
        }
    }
})

document.addEventListener('keypress', (event) => {
    if (event.key >= '0' && event.key <= '9') {
        if (operator === '') {
            num1 += event.key
            inputNum.value = num1
        } else {
            num2 += event.key
            inputNum.value = num2
        }
    }
})

function checkNum(value) {
    if (!isFinite(value)) {
        throw new Error()
    }
}

bttns.forEach(button => {
    button.addEventListener('click', (e) => {

        if (e.target.classList.contains('number')) {
            if (operator === '') {
                num1 += e.target.innerHTML
                inputNum.value = num1
            } else {
                num2 += e.target.innerHTML
                if (num2.length > 9) {
                    return num2.slice(0, 9)
                }
                inputNum.value = num2
            }
            return
        }

        if (e.target.classList.contains('operator')) {
            operator = e.target.innerHTML
            inputNum.value = operator
        }

        if (e.target.classList.contains('equal') ) {
            if (num1 === '') {
                num1 = '0'
            }
            if (num2 === '') {
                num2 = num1
            }
            switch (operator) {
                case '+':
                    num1 = (+num1) + (+num2)
                    break
                case '-':
                    num1 = num1 - num2
                    break
                case 'x':
                    num1 = num1 * num2
                    break
                case '/':
                    if (num1 === '0' || num2 === '0') {
                        deleteAll('Error')
                        return
                    }
                    num1 = num1 / num2
                    break
            }
            inputNum.value = parseFloat((+num1).toFixed(8))
            num2 = ''
            operator = ''
        }
    })
})
