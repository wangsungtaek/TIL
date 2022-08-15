// 팩토리 함수
function getProductService(isProduction) {
    if (isProduction) {
        return new ProductService2();
    }
    else {
        return new MockProductService();
    }
}
var productService2;
var isProd = true;
productService2 = getProductService(isProd);
console.log(productService2.getProductById(123));
