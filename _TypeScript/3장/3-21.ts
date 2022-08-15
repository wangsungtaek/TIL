class Product {
    id: number;
    description: string;
}

class ProductService {
    getProducts(): Product[] {
        return [];
    }
    getProductById(id: number): Product {
        return {
            id: 123,
            description: 'Good Product'
        };
    }
}

class MockProductService implements ProductService {
    getProducts(): Product[] {
        return [];
    }
    getProductById(id: number): Product {
        return {
            id: 345,
            description: 'no'
        }
    }
}

const productService = new ProductService();
const producs = productService.getProducts();