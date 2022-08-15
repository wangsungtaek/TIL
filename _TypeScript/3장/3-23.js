// 인터페이스 프로그래밍
var ProductService2 = /** @class */ (function () {
    function ProductService2() {
    }
    ProductService2.prototype.getProducts = function () {
        return [];
    };
    ProductService2.prototype.getProductById = function (id) {
        return {
            id: 123,
            description: 'sgdsg'
        };
    };
    return ProductService2;
}());
var prod2 = new ProductService2();
console.log(prod2.getProductById(123));
