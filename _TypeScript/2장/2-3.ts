// 타입 유추
const age = 25;
function getTax(income: number): number {
    return income * 0.15;
}

let yourTax = getTax(50000);