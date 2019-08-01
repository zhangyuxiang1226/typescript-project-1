/**
 * 定义类
 */

class Person {
    name: string;
    getName(): void {
        console.log(this.name);
    }

}

class Person2 {
    myname: string;
    constructor(myname: string) {
        this.myname = myname;
    }

    get name() {
        return this.name;
    }

    set name(newVal) {
        this.name = newVal;
    }
}

let p2 = new Person2('zyx 1');
console.log(p2.name)
p2.name = 'zyx 2' // 有了set器之后才能赋值


// 参数的属性
// 加public相当于给当前类的实例增加一个共有属性，相当于上面的例子
class Person3 {
    constructor(public myname: string) {

    }
}

class Person4 {
    public readonly id: number; // public和readonly没有冲突
    constructor(id: number) {
        this.id = id;
    }
}

let p4 = new Person4(1);
console.log(p4.id);
// p4.id = 2; // 由于上面有readonly, 则这句不可以赋值


class Parent {
    public name: string; // 公有的name属性，所有地方都能访问
    protected age: number; // 受到有限度的保存的属性，只能在自己的和自己的子类内被访问
    private money: number; // 私有属性，只能自己访问

    constructor(name: string, age: number, money: number) {
        this.name = name;
        this.age = age;
        this.money = money;
    }
    getName() {
        console.log('父类：' + this.name);
    }
    getAge() {
        console.log('子类getAge' + this.age);
    }
}

class Child extends Parent {
    getName() {
        console.log('父类：' + this.name);
    }

    getAge() {
        console.log('子类getAge' + this.age);
    }

    getMoney() {
        // console.log(this.money); // 这里不能访问
    }
}

let c = new Child('zyx me', 10, 100);
c.getName();
c.name;
// c.age; // age属性受保护
c.getAge();


class Father {
    static myname: string = 'zyx'; // 类本身加属性
    static getMyName() {
        return Father.myname;
    }
}
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
abstract class Animal {
    name:string;
    abstract speak(); // 抽象方法
}

class Cats extends Animal {
    // 继承抽象方法时，要实现抽象方法
    speak () {
        console.log('speak meow meow meow');
    }
}

class Dogs extends Animal {
    // 继承抽象方法时，要实现抽象方法
    speak () {
        console.log('speak bark bark bark');
    }
}