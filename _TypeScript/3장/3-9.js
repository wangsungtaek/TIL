// 메서드 오버로딩의 올바른 예
var ProductService1 = /** @class */ (function () {
    function ProductService1() {
    }
    ProductService1.prototype.getProducts = function (id) {
        if (typeof id === 'number') {
            console.log("Getting the product info for ".concat(id));
        }
        else {
            console.log("Getting all products");
        }
    };
    return ProductService1;
}());
var prodService1 = new ProductService1();
prodService1.getProducts(123);
prodService1.getProducts();
