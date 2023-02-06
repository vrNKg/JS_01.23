function makeDeepCopy(obj) { 
    let copy = {...obj}
    if (typeof obj !== 'object' || obj === null) {
        throw new Error()
    } else {
        for (let key in obj) {
            if (typeof obj[key] === 'object' && obj !== null) {
                copy[key] = makeDeepCopy(obj[key])
            }
        }
        return copy 
    }
}

function selectFromInterval(arr, num1, num2) {
    const isArrValid = Array.isArray(arr) && arr.every((el) => typeof el === 'number') && arr.length > 0
    const isScopeValid = isFinite(num1) && isFinite(num2)

    if (isArrValid && isScopeValid) {
        for (let element of arr) {
            const isNumValid = isFinite(element)
            if (isNumValid) {
                const [from, to] = [num1, num2].sort((x, y) => x - y)
                return arr.filter((el) => el >= from && el <= to)
            } else {
                throw new Error()
            }
        }
    } else {
        throw new Error()
    }
}

function createIterable(from, to) {  
    const isLimitValid = typeof from === 'number' && typeof to === 'number'
    const isToGrater = to > from 

    if (isLimitValid && isToGrater) {
        return {
            from, 
            to,
            [Symbol.iterator]: function() {
                return {
                    current: this.from,
                    last: this.to,

                    next() {
                        if (this.current <= this.last) {
                            return { 
                                done: false, 
                                value: this.current++ 
                            }
                        } else {
                            return { 
                                done: true 
                            }
                        }
                    }
                }
            }
        }
    } else {
        throw new Error()
    }
}