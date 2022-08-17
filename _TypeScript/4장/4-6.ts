// 액션을 모니터링하는 문자열  enum 선언

enum ProductsActionTypes {
    Search = 'Products Search',
    Load = 'Products Load All',
    LoadFailure = 'Products Load All Failure',
    LoadSuccess = 'Products Load All Success'
}

console.log(ProductsActionTypes.LoadFailure);