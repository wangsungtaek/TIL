// 파라미터 및 반환되는 타입이 서로 다른 경우

interface Product {
    id: number;
    description: string;
}

class ProductService2 {
    getProducts(description: string): Product[];
    getProducts(id: number): Product;
    getProducts(product: number | string): Product[] | Product {
        if(typeof product === 'number') {
            console.log(`Getting the product info for id ${product}`);
            return { id: product, description: 'great product' };
        } else if(typeof product === 'string') {
            console.log(`Getting product with description ${product}`);
            return [{ id: 123, description: 'blue jeans' },
                { id: 789, description: 'blue jeans' }];
        } else {
            return {
                id: -1,
                description: `Error: getProducts() accept only number or String as args`
            };
        }
    }
}

const prodService2 = new ProductService2();

console.log(prodService2.getProducts(123));
console.log(prodService2.getProducts('blue jeans'));