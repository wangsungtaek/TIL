// 오버로딩 생성자

class Product1 {
    id: number;
    description: string;
    constructor();
    constructor(id: number);
    constructor(id: number, description: string);
    constructor(id?: number, description?: string) {
        
    }
}