

// 3.1 module.exports에 함수를 할당하는 방식
// module.exports = function(a, b){
//     return a + b;
// }

// 3.2 exports에 객체를 할당하는 방식

module.exports = {
    add (v1, v2) { return v1 + v2 },
    minus (v1, v2) { return v1 - v2 }
};
