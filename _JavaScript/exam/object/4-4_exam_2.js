const calculator = {
    first: 0,
    second: 0,
    read() {
        this.first = 10;
        this.second = 10;
    },
    sum() {
        return this.first + this.second;
    },
    mul() {
        return this.first * this.second;
    }
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());