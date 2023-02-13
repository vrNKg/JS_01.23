function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args)
        } else {
            return function(...nextArgs) {
                return curried.apply(this, [...args, ...nextArgs])
            }
        }
    }
}

function checkNum(value) {
    if (!isFinite(value)) {
        throw new Error()
    }
}

class Calculator {
    constructor(num1, num2) {
        checkNum(num1)
        checkNum(num2)
        this.x = num1
        this.y = num2
    }
    setX = (num) => {
        checkNum(num)
        this.x = num
    }
    setY = (num) => {
        checkNum(num)
        this.y = num
    }
    getSum = () => {
        return this.x + this.y
    }
    getMul = () => {
        return this.x * this.y
    }
    getSub = () => {
        return this.x - this.y
    }
    getDiv = () => {
        if (this.x === 0 || this.y === 0) {
            throw new Error()
        }
        return this.x / this.y
    }
}

function lessThanZero(value) {
    if (value <= 0) {
        throw new Error()
    }
}

class RickAndMorty {
    constructor() {}

    getCharacter(id) {
        checkNum(id)
        lessThanZero(id)

        return fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((character) => {
                if (character.status === 404) {
                    return null
                }
                return character.json()
            })
            .catch(() => null)
    }
    
    async getEpisode(id) {
        checkNum(id)
        lessThanZero(id)

        try {
            let url = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
            let episode = await url.json()

            if (episode.error) {
                return null
            }
            return episode
        } catch (err) {
            return null
        }
    }
}
