/**
 * 接口
 * 1.用于描述一种你对象结构或者说对象的形状
 * 2.用于描述一种抽象的特性集合
 */

interface UserInterface {
    name: string;
    age: number;
    gender?: boolean;
} 

let user:UserInterface = {
    name: 'zyx',
    age:10,
}

interface Flyable {
    fly():void
}

// 类对接口的继承用 implements
class Bird implements Flyable {
    fly() {
        console.log('bird flys');
    }
}