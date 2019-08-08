/**
 * 类型保护
 */
/**
 * 在分支中判断变量的具体类型
 */
function double2(input) {
    if (typeof input == 'number') {
        input.toFixed; // 进入判断里面才有toFixed方法
        return input * 2;
    }
    if (typeof input == 'string') {
        return input + input;
    }
    if (typeof input == 'boolean') {
        return !input;
    }
}
// 通过实例判断
var Bird1 = /** @class */ (function () {
    function Bird1() {
    }
    return Bird1;
}());
var Dog1 = /** @class */ (function () {
    function Dog1() {
    }
    return Dog1;
}());
function getName10(animal) {
    if (animal instanceof Bird1) {
        return animal.name1;
    }
    if (animal instanceof Dog1) {
        return animal.name2;
    }
}
/**
 * null保护
 * 默认情况下null的检查是不严格的
 */
function getFirstLetter(str) {
    // str = str || ''; // 当开启null严格模式的时候，需要这样兼容移一下
    // if (str == null) {
    //     return '';
    // }
    function log() {
        // ?叫链判断运算符  !是强行调用运算
        console.log(str.trim());
    }
    return str.charAt(0);
}
/**
 * 链判断运算符 原理是三元运算符
 */
var a8 = {
    b: 'zyx',
};
a8 = null;
// console.log(a8?.b); // es9的提案，等同于三元运行
console.log(a8 == null ? undefined : a8.b);
function getButton(button) {
    if (button.class == 'warning') {
        console.log(button.text1);
    }
    if (button.class == 'danger') {
        console.log(button.text2);
    }
}
function getAnimalNumber(animal) {
    if ('wings' in animal) {
        console.log(animal.wings);
    }
    if ('leg' in animal) {
        console.log(animal.leg);
    }
}
// x is Bird9 是类型谓词， 语法：parameterName is type
function isBird(x) {
    return x.wings > 0; // x as Bird9类型转换
}
function getAnimalNumber2(x) {
    if (isBird(x)) {
        console.log(x.wings);
    }
}
var birdMan = {
    name: 'Ro',
    fly: function () { },
    eat: function () { },
};
/**
 * 通过自定义结构来规定类型
 */
var p12 = {
    name: 'zyx',
    age: 10,
    gender: 'male',
};
var p13 = {
    name: 'eric',
    age: 10,
    gender: 'male',
};
var job = {
    name: 'FE'
};
var hobbyLevel = 10;
var p14 = {
    name: 'zyx',
    age: 10,
    gender: 'male',
};
// 这里参数如果用string则调用时可以传任意值；如果使用keyof限制，则只能使用Person14中定义的属性
function getValueByKey(p, key) {
    return p[key];
}
getValueByKey(p14, 'anystring');
function getValueByKey2(p, key) {
    return p[key];
}
getValueByKey2(p14, 'age');
var con = {
    name2: 'water'
};
var con2 = {
    name2: 'water'
};
