// 자바스크립트 - 세금 계산 함수
function calcTax1(state:string, income:number, dependents:number):number|undefined {
    if(state === 'NY') {
        return income * 0.06 - dependents * 500;
    } else if(state === 'NJ') {
        return income * 0.05 - dependents * 300;
    }
}

console.log(calcTax1('NJ', 50000, 2));       // 1900
// console.log(calcTax('NJ', 50000, 'two'));   // NaN