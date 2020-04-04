# js复习



## JS基础





## 1.1 JS嵌入

* 内部
  * head中
  * body中
* 外部`<script src="script.js"></script>`
* noscript





## 1.2 基本规则


项目| 内容 |备注
---|---|---
大小写| 区分大小写|
标识符| 数字，$ 和_开头 |变量，函数，属性的名称
注释| // 和/* */ |
结尾分号| 不是必需 |
变量类型| 动态类型 |不需要指定变量的数据类型
转义| 支持\ |
|  |



## 1.3 数据类型

+ 1.3.1 **原始类型**
  + 基本类型（包装对象）
    + 数字
    + 字符串
    + 布尔
  + 特殊
    + null
    + undefined
+ 1.3.2  **引用类型**
  + 基本对象
  + 特殊对象
    + 数组
    + 函数
  + 内置对象（类）
    + date
    + 正则
    + error
  + 全局对象
    + global（浏览器中为window）



## 1.4 数据类型转换

### 1.4.1隐式转换

**隐式转换的情景**

+ 期望使用布尔值时（if语句，比较大小）
+ 期望使用字符串时（+）
+ 期望使用数字时（符号-，*，/）



**类型转换的值**

| 原始值    | 转换为字符串 | 转换为数字 | 转换为布尔值 | 转换为对象            |
| --------- | ------------ | ---------- | ------------ | --------------------- |
| undefined | "undefined"  | **NaN**    | **false**    | throws TypeError      |
| null      | "null"       | **0**      | **false**    | throws TypeError      |
| true      | "true"       | 1          |              | new Boolean(true)     |
| false     | "false"      | 0          |              | new Boolean(false)    |
| " "       |              | 0          | **false**    | new String(" ")       |
| "123"     |              | 123        | true         | new String("123")     |
| "abc"     |              | **NaN**    | true         | new String("abc")     |
| 0,-0      | "0"          |            | **false**    | new Number(0/-0)      |
| NaN       | "NaN"        |            | **false**    | new Number(NaN)       |
| Infinity  | "Infinity"   |            | true         | new Number(Infinity)  |
| -Infinity | "-infinity"  |            | true         | new Number(-Infinity) |
| 123       | "123"        |            | true         | new Number(123)       |
| {}        | .toString()或value()或异常 | value()或.toString或异常 | true     |                       |
| []        | " "          | 0          | true         |                       |
| [1]单数字数组 | "1" | 1 | true |                       |
| ['a'] | join() | NaN | true |                       |
| function(){} |              | NaN | true |                       |
|           |              |            |              |                       |



### 1.4.2 显式（强制）转换

+ 转换字符串

  + String()函数
  + .toString方法

+ 转换数字

  + Number()函数 

  + parseInt()函数

    > 整数

  + parseFloat()函数

    > 小数

+ 转换布尔值

  + Boolean()函数





## 1.5 变量

### 1.5.1 变量声明

**显式声明**

`var a = 1`

**隐式声明**

```js
function demo(){
	a=1; // 全局a
}
demo()
console.log(a) //1
```



1.5.2 作用域

+ 变量作用域
  + 全局作用域
  + 函数作用域
+ 作用域链

1.5.3 变量提升





## 1.6 运算符

### 1.6.1运算符分类

算数运算符

比较运算符

逻辑运算符

位运算符

in运算符

instanceof运算符

其他:三元运算符,typeof运算符,delete运算符,void运算符,逗号运算符

> 延伸阅读:eval(), 当表达式计算时,调用eval函数

### 1.6.2运算符优先级





## 1.7 语句

### 条件语句

+ if
+ if.... else if
+ switch

### 循环语句

+ while
+ do while
+ for
+ for in

### 跳转语句

+ break
+ continue
+ return
+ 标签语句(结合continue)
+ throw
+ try/catch/finally

### 其他

+ with
+ debugger
+ "use strict"





## 1.7 对象基础

### 创建

+ {}

+ new

+ Object.create()



### 原型

### 继承







## 1.8 数组

### 创建

+ []
+ new Array()

### 长度和稀疏数组

### 查找

### 修改

### 删除

### 遍历

### 多维数组



### 数组方法

基本方法

+ join()
+ reverse()
+ sort()
+ concat()
+ slice()
+ splice()
+ push()和pop()
+ unshift()和shift()
+ toString和toLocaleString()

ES5方法

+ forEach()
+ map()
+ filter()
+ every()和some()
+ reduce()和reduceRIght()
+ indexOf()和lastIndexOf()



> 引申阅读: 代替数组的字符串





## 1.9 函数

### 定义

```js
function fn(){
    //code....
}
```

### 调用

```js
fn();
fn();
```



### 间接调用(call和apply)



### 构造函数

```js
//new一个函数来新建一个对象
new fn
```



### 实参和形参

### 命名空间的函数



函数的属性和方法



> 函数式编程和高阶函数





### 1.10 类和模块

1.11正则表达式

1.12子集

1.13服务器端的Javascript