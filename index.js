function checkFunc(value) {
    if (typeof value !== 'function') {
        throw new Error('wtf')
    }
}

Array.prototype.customFilter = function (callback, context) {
    checkFunc(callback)

    let newArr = []

    for (let i = 0; i < this.length; i++) {
       if (callback.call(context, this[i], i, this)) {
            newArr.push(this[i])
       }
    }
    return newArr
}

function createDebounceFunction(cb, timeout) {
    checkFunc(cb)
    
    let timerId = 0

    return () => {
    clearTimeout(timerId)
    timerId = setTimeout(() => cb(), timeout)
    }
}

