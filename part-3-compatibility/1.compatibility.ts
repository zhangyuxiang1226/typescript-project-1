/**
 * 1. 接口的兼容性
 */
interface Animal7 {
    name: string;
    age: number;
    gender: number;
}

let a7: Animal7 = {
    name: 'yuanyuan',
    age: 10,
    gender: 0,
}

interface Person7 {
    name: string;
    age: number;
    // gender: number;  // 这里少一个属性，也可以兼容，
}

function getName2(p: Person7): string {
    return p.name;
}
// 在检查参数类型的时候，并不是真正的比较接口类型，而是比较具体的属性是否兼容
// 即a7有三个属性，Person7只要求2个，此时是可以兼容的
getName2(a7);


/**
 * 2. 基本数据类型的兼容性
 */
let num: string | number;
let str: string;
num = str;
// str = num;// 这样就不行

let num2: {
    toString(): string
};
let str2: string;
num2 = str2; // num2符合字符串的签名，所以这样可以赋值


/**
 * 3. 类的兼容性
 */
class Parent10 {
    name: string;
    age: number; // 当这个属性不存在的时候，c11会报错
}
class Child10 extends Parent10 {
    age: number;
}

let p10: Parent10 = new Parent10();
let c10: Child10 = new Child10();

// 把子类的实例赋给了父类的变量，总是可以的
let p11: Parent10 = new Child10();
// 把父类的实例赋值给子类的变量，必须Parent10中也含有age属性
let c11: Child10 = new Parent10();
let C111: Child10 = { name: 'zyx', age: 10 } // 只要符合Child10的属性就可以


/**
 * 函数的兼容性
 * 比较函数的时候先比较函数上的参数，再比较函数上的返回值
 * 参数是可以省略的；可以省，但是不能多
 */
type sumFunc = (a: number, b: number) => number;
let sum10: sumFunc;
sum10 = function (a: number, b: number): number {
    return a + b;
};
sum10 = function (a: number): number {
    return a;
};
sum10 = function (): number {
    return 0;
};

// 定义返回值，这里不是箭头函数；左边是参数列表，右边是返回值是一个对象
type GetPerson = () => { name: string; age: number };
let getPerson: GetPerson;
getPerson = function () {
    return {
        name: 'ayanami',
        age: 10,
        gender: 'male', // 这里多一个可以，但是定好的不可少
    }
}


/**
 * 双向协变；定义为 number | string时，使用时可以兼容类型定义时的
 */
type LogFunc = (a: number | string) => void;
let log: LogFunc;
log = function (val: number) {
    console.log(val);
}
log = function (val: number | string | boolean) {
    console.log(val);
}

/**
 * 泛型的兼容性：
 * 泛型在判断兼容性的时候，先判断具体类型，再进行兼容性的额判断
 */
interface Empty<T> {

}
interface NotEmpty<T> {
    data: T;
}
let x1: Empty<string>;
let y1: Empty<number>;
x1 = y1;

let x3: NotEmpty<string> = {data: '123'};
let y3: NotEmpty<number> = {data: 123};
// x3 = y3;

/**
 * 枚举的兼容性
 * 枚举和数字兼容
 */
enum Colors2 {
    Red, // 0
    Yellow, // 1
    Blue // 2
}
let num4:number = Colors2.Red;
console.log(num4) // 0
num4 = 2;
let c5:Colors2;
c5 = Colors2.Red;
c5 = 1;



