// enum 타입으로 기온 변환 함수 구현

enum Direction {
    FtoC,
    CtoF,
}

function convertTemperature(temp: number, fromTo: Direction): number {
    return Direction.FtoC === fromTo ? ((temp - 32) * 5.0) / 9.0 : (temp * 9.0) / 5.0 + 32;
}

console.log(`70F is ${convertTemperature(70, Direction.FtoC)}C`);
console.log(`21F is ${convertTemperature(21, Direction.CtoF)}F`);