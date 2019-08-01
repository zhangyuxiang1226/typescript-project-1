// 类型推论
// let name2 = 'zyx';
let name2;
name2 = 10;
name2 = '';

// 包装类
// 基本数据类型是没有方法的
let name3 = 10;
console.log(name3.toFixed(3));

// 当你在一个基本数据类型上调用方法的时候，会立刻隐含的把一个基本数据类型包装成对象
let name4 = 'zyx';
new String('ZYX').toLocaleLowerCase();

let hasGirl:boolean = true;
hasGirl = Boolean(true);
// hasGirl = new Boolean(true); // 这样就不行，new Boolean返回对象

// 联合类型
let name5:string|number|boolean;
name5 = 'zyx';
name5 = 10;

// 类型断言
let name6:string|number|boolean;
name6 = 'zyx';
(name6 as string).length;
function getName6(val:string|number|boolean) {
    (val as string).length
}


