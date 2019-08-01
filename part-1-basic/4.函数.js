/**
 * 函数
 */
// 限制参数和返回值
// 函数声明
function sum1(a, b) {
    return a + b;
}
sum1(1, 2);
var gerUserName = function (fname, lname) {
    return fname + lname;
};
// 可选参数，这个参数可有可无；这里用foreach举例，让foreach的后两个参数可选
var items = [1, 2, 3];
var iteratorFunc = function (item) {
};
items.forEach(iteratorFunc);
// 默认参数
function ajax(url, method) {
    if (method === void 0) { method = 'GET'; }
    console.log(url, method);
}
ajax('/user');
// 剩余参数
function sum2(prefix) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    args.reduce(function (a, b) { return a + b; });
}
var r = sum2('$', 1, 2, 3, 4);
console.log(r);
function getType(val) {
    return val;
}
function double(val) {
    if (typeof val == 'string') {
        return val + val;
    }
    if (typeof val == 'number') {
        return val * 2;
    }
    if (typeof val == 'boolean') {
        return !val;
    }
}
double('zyx');
double(10);
double(true);
