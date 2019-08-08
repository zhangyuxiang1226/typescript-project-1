/**
 * 类型保护
 */

/**
 * 在分支中判断变量的具体类型
 */
function double2(input: string | number | boolean) {
    if (typeof input == 'number') {
        input.toFixed // 进入判断里面才有toFixed方法
        return input * 2;
    }
    if (typeof input == 'string') {
        return input + input;
    }
    if (typeof input == 'boolean') {
        return !input
    }
}

// 通过实例判断
class Bird1 {
    name1: string;
}
class Dog1 {
    name2: string;
}

function getName10(animal: Bird1 | Dog1) {
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
function getFirstLetter(str: string | null) {
    // str = str || ''; // 当开启null严格模式的时候，需要这样兼容移一下
    // if (str == null) {
    //     return '';
    // }

    function log() {
        // ?叫链判断运算符  !是强行调用运算
        console.log(str!.trim());
    }

    return str.charAt(0);
}

/**
 * 链判断运算符 原理是三元运算符
 */
let a8 = {
    b: 'zyx',
}
a8 = null;
// console.log(a8?.b); // es9的提案，等同于三元运行
console.log(a8 == null ? undefined : a8.b);

/**
 * 可辨识的联合类型
 */
interface WarningButton {
    class: 'warning',
    text1: '修改'
}
interface DangerButton {
    class: 'danger',
    text2: '删除'
}
type Button = WarningButton | DangerButton;
function getButton(button: Button) {
    if (button.class == 'warning') {
        console.log(button.text1);
    }
    if (button.class == 'danger') {
        console.log(button.text2);
    }
}


interface Bird8 {
    wings: number;
}
interface Dog8 {
    leg: number
}

function getAnimalNumber(animal: Bird8 | Dog8) {
    if ('wings' in animal) {
        console.log(animal.wings);
    }
    if ('leg' in animal) {
        console.log(animal.leg);
    }

}

// 如果是鸟的话，返回鸟的翅膀的个数，如果是狗的话，返回狗的腿个数
interface Bird9 {
    wings: number;
}
interface Dog9 {
    leg: number
}

// x is Bird9 是类型谓词， 语法：parameterName is type
function isBird(x: Bird9 | Dog9): x is Bird9 {
    return (x as Bird9).wings > 0; // x as Bird9类型转换
}

function getAnimalNumber2(x: Bird9 | Dog9) {
    if (isBird(x)) {
        console.log(x.wings);
    }
}


/**
 * 交叉类型
 * 是将多个类型转成一个类型
 */
interface Bird10 {
    name: string;
    fly(): void;
}
interface Person10 {
    name: string;
    eat(): void;
}
type BirdMan = Bird10 & Person10;
let birdMan: BirdMan = {
    name: 'Ro',
    fly() { },
    eat() { },
}

/**
 * 通过自定义结构来规定类型
 */
let p12 = {
    name: 'zyx',
    age: 10,
    gender: 'male',
}
type People = typeof p12;
let p13: People = {
    name: 'eric',
    age: 10,
    gender: 'male',
}

// function getName11(p:People) {
//     return p.name;
// };

// getName11({
//     name: 'zyx',
//     age: 10,
//     gender: 'male',
// })


interface Person13 {
    name: string;
    age: number;
    job: {
        name: string;
    },
    hobbies: {
        name: string;
        level: number;
    }[]
}
let job: Person13['job'] = {
    name: 'FE'
}
let hobbyLevel: Person13['hobbies'][0]['level'] = 10;


/**
 * 限制使用接口中的值，keyof
 */
interface Person14 {
    name: string;
    age: number;
    gender: 'male' | 'female',
}
let p14: Person14 = {
    name: 'zyx',
    age: 10,
    gender: 'male',
}
// 这里参数如果用string则调用时可以传任意值；如果使用keyof限制，则只能使用Person14中定义的属性
function getValueByKey(p: Person14, key: string) {
    return p[key]
}
getValueByKey(p14, 'anystring');

function getValueByKey2(p: Person14, key: keyof Person14) {
    return p[key];
}
getValueByKey2(p14, 'age');


/**
 * 属性可选，且批量设置属性
 * 等同于
   type PartialPerson = {
        name?: string;
        age?: number;
        gender?: 'male' | 'female';
    }
 */
interface Person15 {
    name: string;
    age: number;
    gender: 'male' | 'female';
}
type PartialPerson = {
    [key in keyof Person15]: Person15[key];
}

/**
 * 条件分支
 */
interface Fish {
    name1: string;
}
interface Water {
    name2: string;
}
interface Sky {
    name3: string;
}
// 即如果T传入Fish，则当前是接口使用Water，否则使用Sky
type Condition<T> = T extends Fish ? Water : Sky;

let con: Condition<Fish> = {
    name2: 'water'
}

let con2: Water = {
    name2: 'water'
}