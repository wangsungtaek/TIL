var Gongsta = /** @class */ (function () {
    function Gongsta() {
    }
    Gongsta.prototype.shoot = function () {
        Gongsta.totalBullets--;
        console.log("Bullets left: ".concat(Gongsta.totalBullets));
    };
    Gongsta.totalBullets = 100;
    return Gongsta;
}());
var g1 = new Gongsta();
g1.shoot();
var g2 = new Gongsta();
g2.shoot();
