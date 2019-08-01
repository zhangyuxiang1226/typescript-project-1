/**
 * 1. 描述对象的形状指的是描述对象长什么样，
 * 即描述对象属性的名称和值的类型
 */

interface Speakable {
    name: string;
    speak():void;
}

let p1:Speakable = {
    name: 'zyx',
    speak() {
        console.log('speak')
    }
}

/**
 * 2. 可用来表示行为的抽象
 * 一个接口可以被多个类来实现，一个类也可以实现多个接口
 * 一个类只有一个父类，一个父类可以有多个子类，这就是所谓的单继承
 * 
 */

interface Eatable {
    eat():void;
}

class Person5 implements Eatable, Speakable {
    name: 'zyx';
    speak() {
    };
    eat() {
    }
}
class Duck5 implements Eatable {
    eat() {}
}

interface Person6 {
    readonly id: number;
    name: string;
    [propName: string]: any; // 表示未知的其余属性全部随意
}
let p6:Person6 = {
    id: 1,
    name: 'zyx',
    age:10,
    city: 'beijing',
}
// p6.id = 2; // 接口设置为readonly时只读

/**
 * 接口也可以继承
 */
interface Speakable2 {
    speak():void
}
interface SpeakEnglish extends Speakable2 {
    speakEnglish():void;
}

// 就需要 两个方法都写
class AmericanPerson implements SpeakEnglish {
    speakEnglish() {};
    speak() {};
}


// 接口约束函数
interface Discount {
    (price:number):number;
}

function discount(price: number):number {
    return price * 0.8
}  
let d:Discount = discount;

/**
 * 可索引接口:可以对对象和数组进行约束
 * 
 */
interface UserInterface1 {
    [index: number]: string; // 索引是number类型，值是字符串类型
}
interface UserInterface2 {
    [index: string]: string; 
}

let user1:UserInterface1 = ['a', 'b', 'c'];
let user2:UserInterface2 = {
    name: 'zyx',
    // age: 2 // 这样就不行
}


// 约束构造函数
class Animal2 {
    // name: string; //等同于 public name: string
    constructor (public name: string) {
        // this.name = name;


    }
}
interface WithNameClass {
    new(name: string): Animal2; // 返回值是Animal2
}

function createAnimal(clazz: WithNameClass, name: string) {
    return new clazz(name);
} 
let animal2 = createAnimal(Animal2, 'cat')