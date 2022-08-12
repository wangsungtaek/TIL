// 선택적 인자를 가진 단일 생성자
interface ProductProperties {
    id?: number;
    description?: string;
}

class Product2 {
    id: number;
    description: string;
    constructor(properties?: ProductProperties) {
        
    }
}