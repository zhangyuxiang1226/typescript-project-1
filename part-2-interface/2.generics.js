/**
 * Generics 泛型
 * 定义方法的时候不指定，而是在使用的时候指定具体类型
 */
function createArray(length, val) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr[i] = val;
    }
    return arr;
}
var a1 = createArray(3, 'x');
// 使用泛型
function createArray2(length, val) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr[i] = val;
    }
    return arr;
}
createArray2(1, 'c'); // 相当于把string传给T
createArray2(1, 8);
/**
 * 类数组 IArguments
 */
function sum6() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var as = arguments;
    var r = 0;
    for (var i = 0; i < as.length; i++) {
        r += as[i];
    }
    return r;
}
sum6(1, 2, 3);
/**
 * 类型推论
 */
var root = document.getElementById('root');
var children = root.children;
var childNodes = root.childNodes;
var input = document.createElement('input');
/**
 * 泛型类 ：在类中使用泛型
 * T means Type
 */
var MyArray = /** @class */ (function () {
    function MyArray() {
        this.list = [];
    }
    MyArray.prototype.add = function (val) {
        this.list.push(val);
    };
    MyArray.prototype.getFirst = function () {
        return this.list[0];
    };
    return MyArray;
}());
var myArr = new MyArray();
myArr.add(1);
myArr.add(2);
myArr.add(3);
var firstVal = myArr.getFirst();
console.log(firstVal);
var sum3 = function (a, b) {
    return a + b;
};
var r3 = sum3(1, 2);
/**
 * 泛型可以有多个
 * tuple
 */
// 写一个元组交换函数
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap(['a', 2]);
/**
 * 泛型可以有默认类型
 */
// T默认值是number
var MyArray2 = /** @class */ (function () {
    function MyArray2() {
        this.list = [];
    }
    MyArray2.prototype.add = function (val) {
        this.list.push(val);
    };
    MyArray2.prototype.getFirst = function () {
        return this.list[0];
    };
    return MyArray2;
}());
function logger(val) {
    console.log(val.length);
}
logger('hello');
var cart = ['a', 'b', 'c'];
var cart3 = { list: ['a', 'b', 'c'] };
// class Aperson implements A1 { // 这样就不行
// }
var Aperson = /** @class */ (function () {
    function Aperson() {
    }
    return Aperson;
}());
