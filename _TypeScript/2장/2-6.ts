function padLeft(value: string, padding: any): string {
    if(typeof padding === 'number') {
        return Array(padding + 1).join('') + value;
    }
    if(typeof padding === 'string') {
        return padding + value;
    }

    throw new Error(`Expected String or number, got '${padding}'.`);
}

console.log(padLeft('Hello world', 4));
console.log(padLeft('Hello world', 'John says'));
console.log(padLeft('Hello` world', true));`