/**
 * 接口
 * 1.用于描述一种你对象结构或者说对象的形状
 * 2.用于描述一种抽象的特性集合
 */
var user = {
    name: 'zyx',
    age: 10,
};
// 类对接口的继承用 implements
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log('bird flys');
    };
    return Bird;
}());
