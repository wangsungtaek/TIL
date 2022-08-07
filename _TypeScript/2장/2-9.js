function padLeft1(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join('') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    else {
        return padding;
    }
}
console.log(padLeft1('Hello world', 4));
console.log(padLeft1('Hello world', 'John says'));
