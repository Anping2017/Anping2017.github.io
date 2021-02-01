# 表达式和语句
**表达式（Expression)**
>一个表达式可以产生一个值，有可能是运算、函数调用、有可能是字面量。表达式可以放在任何需要值的地方。
```
var a = 1;
a+b
a>b
function abc(){}
```

**语句**

>语句可以理解为一个行为，循环语句和判断语句就是典型的语句。一个程序有很多个语句组成，一般情况下;分割一个一个的语句


## JS语句
- 分支结构
  - if
  - switch
  - 三元运算符
- 循环结构
  - for
  - while
  - do while

- 辅助语句
  - continue
  - break


## if语句
```
if (/*condition*/) {
    //code....
}
else if {
    //code..
}
else {
    //code..
}


```

## switch语句
用来处理多个单值的情况
```
switch (/*exprestion*/) {
case /*value*/:
    //code..
    break;
case /*value2*/:
    //code..
    break;
default:
    //code..
}


//例子
switch(new.Date().getDay()){
case 6:
    text = "Saturday";
    break;
case 7：
    text = "Sunday";
default:
    text = "Weekday";
}
```


## for 语句
```
for (/*before expression*/;/*condition*/;/*after expression*/){
    //code...
}


//例子
for (let i =0; i<10; i++) {
    document.write(i);
}
```


## while语句
先检验再执行
```
while (/*condiftion*/) {
    //code...
}

//例子
var i = 1;
while (i<10){
    i*=2;
    document.write(i);
}
```



## do...while语句
先执行再检验
```
do {
    //code..
}while(/*condition*/)

//例子
var i=1;
do {
    i*=2;
}while(i<10)
```


## 三元运算符
if 语句的简写
```
condition？ expression_true:expression_flase;


//例子
var age =100
var check = (age>60)?"old":"young";
```