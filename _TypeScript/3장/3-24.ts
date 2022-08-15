// 팩토리 함수
function getProductService(isProduction: boolean): IProductService {
    if(isProduction) {
        return new ProductService2();
    } else {
        return new MockProductService();
    }
}

let productService2: IProductService;

const isProd = true;
productService2 = getProductService(isProd);

console.log(productService2.getProductById(123));

