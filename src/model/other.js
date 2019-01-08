/*jshint esversion:6*/
function* foo() {
    yield 1;
    yield 2;
    return 3;
}
//
function* bar(x) {
    if (x < 3) {
        x = yield* bar(x + 1);
    }
    return x * 2;
}

/////
function* baz() {
    yield*[1, 2, 3, 4];
}

var arry = [1, 2, 3, 4];

console.log('loaded done');

///导出方式一 添加一个默认导出
var all ={ bar, arry };
export{ all as default};