// 类型推论
// let name2 = 'zyx';
var name2;
name2 = 10;
name2 = '';
// 包装类
// 基本数据类型是没有方法的
var name3 = 10;
console.log(name3.toFixed(3));
// 当你在一个基本数据类型上调用方法的时候，会立刻隐含的把一个基本数据类型包装成对象
var name4 = 'zyx';
new String('ZYX').toLocaleLowerCase();
var hasGirl = true;
hasGirl = Boolean(true);
// hasGirl = new Boolean(true); // 这样就不行，new Boolean返回对象
// 联合类型
var name5;
name5 = 'zyx';
name5 = 10;
// 类型断言
var name6;
name6 = 'zyx';
name6.length;
function getName6(val) {
    val.length;
}
