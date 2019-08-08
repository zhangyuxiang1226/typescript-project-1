var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a7 = {
    name: 'yuanyuan',
    age: 10,
    gender: 0,
};
function getName2(p) {
    return p.name;
}
// 在检查参数类型的时候，并不是真正的比较接口类型，而是比较具体的属性是否兼容
// 即a7有三个属性，Person7只要求2个，此时是可以兼容的
getName2(a7);
/**
 * 2. 基本数据类型的兼容性
 */
var num;
var str;
num = str;
// str = num;// 这样就不行
var num2;
var str2;
num2 = str2; // num2符合字符串的签名，所以这样可以赋值
/**
 * 3. 类的兼容性
 */
var Parent10 = /** @class */ (function () {
    function Parent10() {
    }
    return Parent10;
}());
var Child10 = /** @class */ (function (_super) {
    __extends(Child10, _super);
    function Child10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child10;
}(Parent10));
var p10 = new Parent10();
var c10 = new Child10();
// 把子类的实例赋给了父类的变量，总是可以的
var p11 = new Child10();
// 把父类的实例赋值给子类的变量，必须Parent10中也含有age属性
var c11 = new Parent10();
var C111 = { name: 'zyx', age: 10 }; // 只要符合Child10的属性就可以
var sum10;
sum10 = function (a, b) {
    return a + b;
};
sum10 = function (a) {
    return a;
};
sum10 = function () {
    return 0;
};
var getPerson;
getPerson = function () {
    return {
        name: 'ayanami',
        age: 10,
        gender: 'male',
    };
};
var log;
log = function (val) {
    console.log(val);
};
log = function (val) {
    console.log(val);
};
var x1;
var y1;
x1 = y1;
var x3 = { data: '123' };
var y3 = { data: 123 };
// x3 = y3;
/**
 * 枚举的兼容性
 * 枚举和数字兼容
 */
var Colors2;
(function (Colors2) {
    Colors2[Colors2["Red"] = 0] = "Red";
    Colors2[Colors2["Yellow"] = 1] = "Yellow";
    Colors2[Colors2["Blue"] = 2] = "Blue"; // 2
})(Colors2 || (Colors2 = {}));
var num4 = Colors2.Red;
console.log(num4); // 0
num4 = 2;
var c5;
c5 = Colors2.Red;
c5 = 1;
