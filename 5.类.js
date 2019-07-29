/**
 * 定义类
 */
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
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getName = function () {
        console.log(this.name);
    };
    return Person;
}());
var Person2 = /** @class */ (function () {
    function Person2(myname) {
        this.myname = myname;
    }
    Object.defineProperty(Person2.prototype, "name", {
        get: function () {
            return this.name;
        },
        set: function (newVal) {
            this.name = newVal;
        },
        enumerable: true,
        configurable: true
    });
    return Person2;
}());
var p2 = new Person2('zyx 1');
console.log(p2.name);
p2.name = 'zyx 2'; // 有了set器之后才能赋值
// 参数的属性
// 加public相当于给当前类的实例增加一个共有属性，相当于上面的例子
var Person3 = /** @class */ (function () {
    function Person3(myname) {
        this.myname = myname;
    }
    return Person3;
}());
var Person4 = /** @class */ (function () {
    function Person4(id) {
        this.id = id;
    }
    return Person4;
}());
var p4 = new Person4(1);
console.log(p4.id);
// p4.id = 2; // 由于上面有readonly, 则这句不可以赋值
var Parent = /** @class */ (function () {
    function Parent(name, age, money) {
        this.name = name;
        this.age = age;
        this.money = money;
    }
    Parent.prototype.getName = function () {
        console.log('父类：' + this.name);
    };
    Parent.prototype.getAge = function () {
        console.log('子类getAge' + this.age);
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.getName = function () {
        console.log('父类：' + this.name);
    };
    Child.prototype.getAge = function () {
        console.log('子类getAge' + this.age);
    };
    Child.prototype.getMoney = function () {
        // console.log(this.money); // 这里不能访问
    };
    return Child;
}(Parent));
var c = new Child('zyx me', 10, 100);
c.getName();
c.name;
// c.age; // age属性受保护
c.getAge();
var Father = /** @class */ (function () {
    function Father() {
    }
    Father.getMyName = function () {
        return Father.myname;
    };
    Father.myname = 'zyx'; // 类本身加属性
    return Father;
}());
console.log(Father.myname);
Father.getMyName();
// 抽象类
/**
 * 抽象类是一个类的概念，无法被实例化，只能被继承
 * 抽象类里的方法是抽象的
 *
 * 重写：父类是一样的，多个子类实现不一样，Cats Dogs，覆盖父类同名方法
 * 重载：同函数名，方法，返回值都不一样
 *  */
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Cats = /** @class */ (function (_super) {
    __extends(Cats, _super);
    function Cats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 继承抽象方法时，要实现抽象方法
    Cats.prototype.speak = function () {
        console.log('speak meow meow meow');
    };
    return Cats;
}(Animal));
var Dogs = /** @class */ (function (_super) {
    __extends(Dogs, _super);
    function Dogs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 继承抽象方法时，要实现抽象方法
    Dogs.prototype.speak = function () {
        console.log('speak bark bark bark');
    };
    return Dogs;
}(Animal));
