// enum 타입으로 기온 변환 함수 구현
var Direction;
(function (Direction) {
    Direction[Direction["FtoC"] = 0] = "FtoC";
    Direction[Direction["CtoF"] = 1] = "CtoF";
})(Direction || (Direction = {}));
function convertTemperature(temp, fromTo) {
    return Direction.FtoC === fromTo ? ((temp - 32) * 5.0) / 9.0 : (temp * 9.0) / 5.0 + 32;
}
console.log("70F is ".concat(convertTemperature(70, Direction.FtoC), "C"));
console.log("21F is ".concat(convertTemperature(21, Direction.CtoF), "F"));
