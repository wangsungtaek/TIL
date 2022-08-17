// 액션을 모니터링하는 문자열  enum 선언
var ProductsActionTypes;
(function (ProductsActionTypes) {
    ProductsActionTypes["Search"] = "Products Search";
    ProductsActionTypes["Load"] = "Products Load All";
    ProductsActionTypes["LoadFailure"] = "Products Load All Failure";
    ProductsActionTypes["LoadSuccess"] = "Products Load All Success";
})(ProductsActionTypes || (ProductsActionTypes = {}));
console.log(ProductsActionTypes.LoadFailure);
