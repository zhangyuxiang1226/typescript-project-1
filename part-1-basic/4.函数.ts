/**
 * 函数
 */

// 限制参数和返回值
// 函数声明
function sum1(a: number, b: number): number {
    return a + b;
}

sum1(1, 2);


// 函数定义表达式
// type用来定义类型别名，即规定一个类型，约束函数
type GetUserName = (a: string, b: string) => string;
let gerUserName: GetUserName = function (fname, lname) {
    return fname + lname;
}

// 可选参数，这个参数可有可无；这里用foreach举例，让foreach的后两个参数可选
let items: number[] = [1, 2, 3];
type IteratorFunc = (item: number, index?: number, arr?: number[]) => void;
let iteratorFunc: IteratorFunc = function (item: number) {

}
items.forEach(iteratorFunc);


// 默认参数
function ajax(url: string, method: string = 'GET') {
    console.log(url, method)
}
ajax('/user');


// 剩余参数
function sum2(prefix: string, ...args: number[]) {
    args.reduce((a, b) => a + b);
}
let r = sum2('$', 1, 2, 3, 4);
console.log(r);

// 函数重载
type Mytype = string | number | boolean;
function getType(val:Mytype):Mytype {
    return val;
}
// 规定这个函数只能接受三种类型 string number boolean
function double(val:string):string;
function double(val:number):number;
function double(val:boolean):boolean;


function double(val:Mytype) {
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