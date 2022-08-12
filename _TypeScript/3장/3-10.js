// 파라미터 및 반환되는 타입이 서로 다른 경우
var ProductService2 = /** @class */ (function () {
    function ProductService2() {
    }
    ProductService2.prototype.getProducts = function (product) {
        if (typeof product === 'number') {
            console.log("Getting the product info for id ".concat(product));
            return { id: product, description: 'great product' };
        }
        else if (typeof product === 'string') {
            console.log("Getting product with description ".concat(product));
            return [{ id: 123, description: 'blue jeans' },
                { id: 789, description: 'blue jeans' }];
        }
        else {
            return {
                id: -1,
                description: "Error: getProducts() accept only number or String as args"
            };
        }
    };
    return ProductService2;
}());
var prodService2 = new ProductService2();
console.log(prodService2.getProducts(123));
console.log(prodService2.getProducts('blue jeans'));
