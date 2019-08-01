/**
 * Generics 泛型
 * 定义方法的时候不指定，而是在使用的时候指定具体类型
 */

function createArray(length: number, val: any): any[] {
    let arr: any[] = [];
    for (let i = 0; i < length; i++) {
        arr[i] = val;
    }

    return arr;
}
let a1 = createArray(3, 'x');

// 使用泛型
function createArray2<T>(length: number, val: T): T[] {
    let arr: T[] = [];
    for (let i = 0; i < length; i++) {
        arr[i] = val;
    }

    return arr;
}

createArray2<string>(1, 'c'); // 相当于把string传给T
createArray2<number>(1, 8);


/**
 * 类数组 IArguments
 */
function sum6(...args: number[]) {
    let as: IArguments = arguments;
    let r: number = 0;
    for (let i = 0; i < as.length; i++) {
        r += as[i];
    }

    return r;
}
sum6(1, 2, 3);


/**
 * 类型推论
 */
let root = document.getElementById('root');
let children: HTMLCollection = root.children;
let childNodes: NodeListOf<ChildNode> = root.childNodes;

let input: HTMLInputElement = document.createElement('input');


/**
 * 泛型类 ：在类中使用泛型
 * T means Type
 */
class MyArray<T> {
    list: T[] = [];
    add(val: T) {
        this.list.push(val);
    }
    getFirst(): T {
        return this.list[0];
    }
}

let myArr = new MyArray<number>();
myArr.add(1);
myArr.add(2);
myArr.add(3);
let firstVal = myArr.getFirst();
console.log(firstVal);

/**
 * 泛型接口: 就是在定义接口的时候使用泛型
 */
interface SUM<T> {
    (a: T, b: T): T // 描述的是函数
}
let sum3: SUM<number> = function (a: number, b: number) {
    return a + b;
}
let r3 = sum3(1, 2);

/**
 * 泛型可以有多个
 * tuple
 */

// 写一个元组交换函数
function swap<A, B>(tuple: [A, B]): [B, A] {
    return [tuple[1], tuple[0]];
}
swap<string, number>(['a', 2]);

/**
 * 泛型可以有默认类型
 */
// T默认值是number
class MyArray2<T = number> {
    list: T[] = [];
    add(val: T) {
        this.list.push(val);
    }
    getFirst(): T {
        return this.list[0];
    }
}

// 当定义函数的时候，并不知道T是什么类型；用泛型类继承接口，就可以用接口中的方法了
interface LengthWise {
    length: number
}
function logger<T extends LengthWise>(val: T) {
    console.log(val.length);
}
logger<string>('hello');


/**
 * 泛型类型的别名
 */
type Cart<T> = { list: T[] } | T[];
let cart: Cart<string> = ['a', 'b', 'c'];
let cart3: Cart<string> = { list: ['a', 'b', 'c'] };



/**
 * 泛型接口 VS 泛型类型别名
 * 1.接口会创建一个新的名词，别名不会
 * 2.别名不能被继承和实现
 */
interface A {

}
interface B {

}
type A1 = A | B;
type A2 = A;

// class Aperson implements A1 { // 这样就不行
// }

class Aperson implements A, B {
}
