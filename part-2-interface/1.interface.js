/**
 * 1. 描述对象的形状指的是描述对象长什么样，
 * 即描述对象属性的名称和值的类型
 */
var p1 = {
    name: 'zyx',
    speak: function () {
        console.log('speak');
    }
};
var Person5 = /** @class */ (function () {
    function Person5() {
    }
    Person5.prototype.speak = function () {
    };
    ;
    Person5.prototype.eat = function () {
    };
    return Person5;
}());
var Duck5 = /** @class */ (function () {
    function Duck5() {
    }
    Duck5.prototype.eat = function () { };
    return Duck5;
}());
var p6 = {
    id: 1,
    name: 'zyx',
    age: 10,
    city: 'beijing',
};
// 就需要 两个方法都写
var AmericanPerson = /** @class */ (function () {
    function AmericanPerson() {
    }
    AmericanPerson.prototype.speakEnglish = function () { };
    ;
    AmericanPerson.prototype.speak = function () { };
    ;
    return AmericanPerson;
}());
function discount(price) {
    return price * 0.8;
}
var d = discount;
var user1 = ['a', 'b', 'c'];
var user2 = {
    name: 'zyx',
};
// 约束构造函数
var Animal2 = /** @class */ (function () {
    // name: string; //等同于 public name: string
    function Animal2(name) {
        // this.name = name;
        this.name = name;
    }
    return Animal2;
}());
function createAnimal(clazz, name) {
    return new clazz(name);
}
var animal2 = createAnimal(Animal2, 'cat');
