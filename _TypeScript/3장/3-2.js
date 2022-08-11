// 싱글톤 클래스
var AppState = /** @class */ (function () {
    function AppState() {
        this.counter = 0;
    }
    AppState.getInstance = function () {
        if (AppState.instanceRef === undefined) {
            AppState.instanceRef = new AppState();
        }
        return AppState.instanceRef;
    };
    return AppState;
}());
// const appState = new AppState(); / private 생성자 때문에 오류 발생
var appState1 = AppState.getInstance();
var appState2 = AppState.getInstance();
appState1.counter++;
appState1.counter++;
appState2.counter++;
appState2.counter++;
console.log(appState1.counter);
console.log(appState2.counter);
