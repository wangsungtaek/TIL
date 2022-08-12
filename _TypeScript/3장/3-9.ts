// 메서드 오버로딩의 올바른 예

class ProductService1 {
    getProducts();
    getProducts(id: number);
    getProducts(id?: number) {
        if(typeof id === 'number') {
            console.log(`Getting the product info for ${id}`);
        } else {
            console.log(`Getting all products`);
        }
    }
}

const prodService1 = new ProductService1();

prodService1.getProducts(123);

prodService1.getProducts();