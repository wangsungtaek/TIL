// 인터페이스 프로그래밍

interface Product {
    id: number;
    description: string;
}

interface IProductService {
    getProducts(): Product[];
    getProductById(id: number): Product
}

class ProductService2 implements IProductService {
    getProducts(): Product[] {
        return [];
    }
    getProductById(id: number): Product {
        return {
            id: 123,
            description: 'sgdsg'
        }
    }
}

const prod2 = new ProductService2();
console.log(prod2.getProductById(123));