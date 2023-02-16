class Stack {
    constructor(size = 10) {
        const isNumValid = isFinite(size) && size >= 0 && Number(size) % 1 === 0 && size <= 10
        if (!isNumValid) {
            throw new Error('Invalid limit value')
        } else {
            this.maxSize = size
        }
        this.array = []
    }
    push(elem) {
        if (this.array.length >= this.maxSize) {
            throw new Error('Limit exceeded')
        }
        this.array.push(elem)
    }

    pop() {
        if (this.array.length === 0) {
            throw new Error('Empty stack')
        }
        return this.array.pop()
    }

    peek() {
        if (this.array.length === 0) {
            return null
        }
        return this.array[this.array.length-1]
    }

    isEmpty() {
        return this.array.length === 0
    }

    toArray() {
        const newArr = []
        for (let i = 0; i < this.array.length; i++) {
            newArr.push(this.array[i])
        }
        return newArr
    }

    static fromIterable(iterable) {
        function isIterable(iterable) {
            if (iterable == null) {
                return false
            }
            return typeof iterable[Symbol.iterator] === 'function'
        }

        if (isIterable) {
            const arr = []
            for (let element of iterable) {
                arr.push(element)
            }
            let newStack = new Stack(arr.length)
            for (let element of iterable) {
                newStack.push(element)
            }
            return newStack
        } else {
            throw new Error('Not iterable')
        }
    }
  }
class Node {
    constructor(el) {
        this.element = el
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(elem) {
        const newNode = new Node(elem)
        if (!this.head || !this.tail) {
            this.head = newNode
            this.tail = newNode
            return this
        }
        this.tail.next = newNode
        this.tail = newNode
        return this
    }

    prepend(elem) {
        const newNode = new Node(elem, this.head)
        this.head = newNode
        if (!this.tail) {
            this.tail = newNode
        }
        return this
    }

    find(elem) {
        if (!this.head) {
            return null
        }
        let currentNode = this.head
        while (currentNode) {
            if (elem !== undefined && currentNode.elem === elem) {
                return currentNode
            }
            currentNode = currentNode.next
        }
        return null
    }

    toArray() {
        const nodes = []
        let currentNode = this.head
      
        while (currentNode) {
          nodes.push(currentNode)
          currentNode = currentNode.next
        }
        return nodes
    }

    static fromIterable(iterable) {
        function isIterable(iterable) {
            if (iterable == null) {
                return false
            }
            return typeof iterable[Symbol.iterator] === 'function'
        }

        if (isIterable) {
            let newList = new LinkedList()
            for (let element of iterable) {
                newList.append(element)
            }
            return newList
        } else {
            throw new Error('Not iterable')
        }
    }
}
class Car {
    constructor() {}

    #brand = ''
    #model = ''
    #yearOfManufacturing = 1950
    #maxSpeed = 100
    #maxFuelVolume = 20
    #fuelConsumption = 1
    #damage = 1
    #currentFuelVolume = 0
    #isStarted = false
    #mileage = 0
    #health = 100

    checkString(value, type) {
        if (value.length < 1 || value.length > 50) {
            throw new Error(`Invalid ${type} name`)
        }
    }

    isNumValid(value, number1, number2){
        return isFinite(value) && (value >= number1 && value <= number2)
    }

    get brand() {
        return this.#brand
    }

    set brand(value) {
        this.checkString(value, 'brand')
        this.#brand = value
    }

    get model() {
        return this.#model
    }

    set model(value) {
        this.checkString(value, 'model')
        this.#model = value
    }

    get yearOfManufacturing() {
        return this.#yearOfManufacturing
    }

    set yearOfManufacturing(value) {
        const currentYear = new Date().getFullYear()
        if (!this.isNumValid(value, 1950, currentYear)) {
            throw new Error('Invalid year of manufacturing')
        }
        this.#yearOfManufacturing = value
    }

    get maxSpeed() {
        return this.#maxSpeed
    }

    set maxSpeed(value) {
        if (!this.isNumValid(value, 100, 330)) {
            throw new Error('Invalid max speed')
        }
        this.#maxSpeed = value
    }

    get maxFuelVolume() {
        return this.#maxFuelVolume
    }

    set maxFuelVolume(value) {
        if (!this.isNumValid(value, 20, 100)) {
            throw new Error('Invalid max fuel volume')
        }
        this.#maxFuelVolume = value
    }

    get fuelConsumption() {
        return this.#fuelConsumption
    }

    set fuelConsumption(value) {
        if (typeof value !== 'number' || !isFinite(value) || value < 0) {
            throw new Error('Invalid fuel consumption')
        }
        this.#fuelConsumption = value
    }

    get damage() {
        return this.#damage
    }

    set damage(value) {
        if (!this.isNumValid(value, 1, 5)) {
            throw new Error('Invalid damage')
        }
        this.#damage = value
    }
    
    get currentFuelVolume() {
        return this.#currentFuelVolume
    }
    get isStarted() {
        return this.#isStarted
    }
    get mileage() {
        return this.#mileage
    }
    get health() {
        return this.#health
    }

    start() {
        if (this.#isStarted) {
            throw new Error('Car has already started')
        }
        this.#isStarted = true
    }
    shutDownEngine() {
        if (!this.#isStarted) {
            throw new Error('Car hasn\'t started yet')
        }
        this.#isStarted = false
    }

    fillUpGasTank(fuelAmount) {
        if (!isFinite(fuelAmount) || fuelAmount <= 0) {
            throw new Error('Invalid fuel amount')
        }
        if (this.#currentFuelVolume + fuelAmount > this.#maxFuelVolume) {
            throw new Error('Too much fuel')
        }
        if (this.#isStarted) {
            throw new Error('You have to shut down your car first')
        }
        this.#currentFuelVolume += fuelAmount
    }

    drive(speed, hours) {
        const distance = speed * hours
        const fuelNeeds = distance * this.#fuelConsumption / 100
        const healthNeeds = distance * this.damage / 100

        if (!isFinite(speed) || speed <= 0) {
            throw new Error('Invalid speed')
        }
        if (!isFinite(hours) || hours <= 0) {
            throw new Error('Invalid duration')
        }
        if (speed > this.#maxSpeed) {
            throw new Error('Car can\'t go this fast')
        }
        if (!this.#isStarted) {
            throw new Error('You have to start your car first')
        }
        if (fuelNeeds > this.#currentFuelVolume) {
            throw new Error('You don\'t have enough fuel')
        }
        if ((this.#health - healthNeeds) <= 0) {
            throw new Error('Your car won\'t make it')
        }
        this.#currentFuelVolume -= fuelNeeds
        this.#health -= healthNeeds
        this.#mileage += distance
    }

    repair() {
        if (this.#isStarted) {
            throw new Error('You have to shut down your car first')
        } else if (this.#currentFuelVolume === 0) {
            throw new Error('You have to fill up your gas tank first')
        } else {
            this.#health = 100
        }
    }

    getFullAmount() {
        if (this.currentFuelVolume > 0) {
            return this.#maxFuelVolume - this.#currentFuelVolume
        }
        return this.#currentFuelVolume = 0
    }
}
