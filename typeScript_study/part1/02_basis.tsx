var a: number;
a = 10;

let c = false;
//如果变量的声明和赋值是同时进行，TS可以同时对变量进行类型检测。 
//c = 123;
//a = "hello";
//有类型限制 
//对函数参数作类型声明 :number 函数返回值类型
function sum(a:number,b:number):number {
  return a + b;
}