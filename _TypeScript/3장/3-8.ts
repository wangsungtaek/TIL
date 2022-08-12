// 메서드 오버로딩의 잘못된 예

class ProductService {
    getProducts() {
        console.log(`Getting all products`);
    }

    getProducts(id: number) {
        console.log(`Getting the product info for ${id}`);
    }
}

const prodService = new ProductService();

prodService.getProducts(123);

prodService.getProducts();