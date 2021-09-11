//使用字面量进行类型声明
let d: number;
//表示任何类型 设置any 相当于对该变量关闭了TS类型检测
//any可以赋值给任何变量
let f: any;
//声明变量不指定类型相当于  隐式any
let p;
//unkonwn实际上是一个类型安全的any 表示未知类型的值 unknown不可以赋值给别的变量
let w: unknown;
//类型断言
/* 
s = e as string;
s = <string>e;
 */

//void 用来表示空 以函数为例 表示没有返回值的函数
function fn(): void{
  
}
//never 表示永远不会返回结果
function fn2(): never{
  throw new Error("报错了 ")
}

//object表示一个js对象
//{}用来指定对象中可以包含哪些属性
//语法：{属性名：属性值，属性名：属性值}
//在属性名后面加上？表示属性是可选的
let a1: { name: string, age?: number };
//设置对象结构类型声明：[propName:string]:any 表示任意类型的属性
let c1: { name: string, [propName: string]: string };
//设置函数结构类型声明：语法：(形参：类型，形参：类型...)=>返回值
let fn3: (n1: number, n2: number) => number;
//array
let a4: number[];
let a5: Array<number>;

/* 元组就是固定长度的数组 */
let h: [string, string];
h = ["hello", "hi"];

//enum 枚举
let i: { name: string, gender: number };
i = {
  name: "okk",
  gender: 1,
}