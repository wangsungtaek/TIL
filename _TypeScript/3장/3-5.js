// Person 추상 클래스
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    ;
    Person2.prototype.changeAddress = function (newAddress) {
        console.log("Changing address to ".concat(newAddress));
    };
    Person2.prototype.giveDayOff = function () {
        console.log("Giving a day off to ".concat(this.name));
    };
    Person2.prototype.promate = function (percent) {
        this.giveDayOff();
        this.increasePay(percent);
    };
    return Person2;
}());
var Employee2 = /** @class */ (function (_super) {
    __extends(Employee2, _super);
    function Employee2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee2.prototype.increasePay = function (percent) {
        console.log("Increasing the salary of ".concat(this.name, " by ").concat(percent, "$"));
    };
    return Employee2;
}(Person2));
var Contractor = /** @class */ (function (_super) {
    __extends(Contractor, _super);
    function Contractor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Contractor.prototype.increasePay = function (percent) {
        console.log("Increasing the hourly of ".concat(this.name, " by ").concat(percent, "$"));
    };
    return Contractor;
}(Person2));
var workers = [];
workers[0] = new Employee2('John');
workers[1] = new Contractor('Mary');
workers.forEach(function (worker) {
    worker.promate(5);
});
