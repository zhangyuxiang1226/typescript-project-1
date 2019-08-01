/**
 * 需要npm init -y
 * npm i typescript -g
 * 单词可以运行 tsc 1.ts 实现编译
 * tsc --init 生成配置文件，配置了之后只需要使用tsc指令，就可以自动找本文件夹下的ts文件进行编译
 * 在packagejson中配置script可以实现监听 tsc --watch
 */
// 1.基本数据类型
var name1 = 'zyx2';
var age = 10;
var isAlive = true;
var x = undefined;
var y = null;
name1 = null; // 如果tsconfig中配置strictNullChecks: true，则报错
name1 = undefined; // 如果tsconfig中配置strictNullChecks: true，则报错
// 2.数组：长度任意，类型统一
var names = ['a', 'b', 'c'];
var names2 = ['a', 'b', 'c'];
// 3.tuple元组：长度和类型都确定
var person = ['a', 2, 'b'];
// 4.枚举类型，这里可以看一下编译出来的文件，es5是如何表达的
var Gender;
(function (Gender) {
    Gender[Gender["BOY"] = 0] = "BOY";
    Gender[Gender["GIRL"] = 1] = "GIRL";
})(Gender || (Gender = {}));
var boy = Gender.BOY;
var colors = [0 /* RED */, 1 /* YELLOW */, 2 /* BLUE */];
// 6.any任意类型
var x2;
x2 = 'zyx';
x2 = 10;
x2 = null;
// never 永远不
// 1) 作为没有返回值的函数的返回值类型，never表示函数永远都不结束，void可以拿到返回值
function getY() {
    console.log(1);
    throw new Error('报错了');
    console.log(2);
}
function sum() {
    while (true) {
    }
    console.log(2);
}
// 返回void表示返回为空
function getName() {
    console.log('hello');
    // return 1; // 这里如果放开就回报错
    return null;
}
