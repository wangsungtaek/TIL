// MotorVehicle 인터페이스
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.startEngine = function () {
        return true;
    };
    Car.prototype.stopEngine = function () {
        return true;
    };
    Car.prototype.brake = function () {
        return true;
    };
    Car.prototype.accelerate = function (speed) {
        console.log("Dirving faster");
    };
    Car.prototype.hank = function (howLong) {
        console.log("Beep beep yeah!");
    };
    return Car;
}());
var SecretServiceCar = /** @class */ (function () {
    function SecretServiceCar() {
    }
    SecretServiceCar.prototype.startEngine = function () {
        return true;
    };
    SecretServiceCar.prototype.stopEngine = function () {
        return true;
    };
    SecretServiceCar.prototype.brake = function () {
        return true;
    };
    SecretServiceCar.prototype.accelerate = function (speed) {
        console.log("Dirving faster");
    };
    SecretServiceCar.prototype.hank = function (howLong) {
        console.log("Beep beep yeah!");
    };
    SecretServiceCar.prototype.fly = function (howHigh) {
        console.log("Flying ".concat(howHigh, " feet high"));
    };
    SecretServiceCar.prototype.land = function () {
        console.log("Landing. Fasten your belts");
    };
    SecretServiceCar.prototype.swim = function (howFar) {
        console.log("Swimming ".concat(howFar, " feet"));
    };
    return SecretServiceCar;
}());
var car = new Car();
car.startEngine();
var superCar = new SecretServiceCar();
superCar.fly(20);
