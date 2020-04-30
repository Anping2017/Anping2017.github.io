## SASS笔记
[SASS中文网](https://www.sass.hk/docs/)
[SASS英文官网](https://sass-lang.com/)


### 嵌套规则(Nested Rules)
```css
#main p {
    color: #00ff00;
    width:97%;
    
    /*嵌套后生成#main p .redbox*/
    .redbox {
        background-color:red;
        color:#000;
    }
}
```


### 父选择器引用（Referencing Parent Selectors:&）
```
a {
    font-size:12px;
    &:hover {color: red;}  //生成a:hover
    .firebox & {color:black} //生成.firebox a
}

/* 多层嵌套 */
h1 {
    color:blue;
    p {
        color:red;
        & a {   //生成h1 p a
            color:yellow 
        }
    }
}

/*&规则:必须为前缀，可以加后缀 */
 
.main {

    &-head {  //生成.main-head
        
    }
}

```
> 父选择器 & 被作为一个后缀的时候，Sass 将抛出一个错误。




### 属性的嵌套（ Nested Properties）
```
.funky {
    font:{
        size:12px;   //生成font-size
        family:fatasy;  //生成font-family
    }
}

```



### 变量
```
//变量声明
$width:5em;
$width:5em !global //全局声明，普通声明只在当前{}下有用

//变量名-和_互用，main-head可访问main_head



//使用
width:$width;
```


#### 变量的数据类型
* 字符串
* 数字（数值保留单位）
* 颜色
* 布尔值
* 空值
* 值列表（数组）
* maps（键值对）
* 



### 运算符
* 加减乘除
* 分割符/属性替代表示: `#{$number1}/#{$number2}`
* -用作减法规则：` number1 - number2 `前后带空格，`（number1-number2）`加括号，或者` -number`-前加空格后加数字
* +可拼接字符串
* 布尔运算支持`and`,`or`,`not`
* 支持颜色运算，支持括号，不支持数组运算
* 

### 函数
sassscript定义了部分可直接使用的函数
[函数列表](https://sass-lang.com/documentation/moduleshttps://note.youdao.com/)

```
p {
    color:hsl(100%,10%,0)
}
```


### 关键字参数
关键字参数是对hsl参数的命名
```
p {
    color:hsl($light:100%,$darkness:10%,$hue:0)
}
```



### 插值语法#{}
插值语法用来强调其内容为纯css，避免sass运算
```
$name:'foo'
//p.foo
p.#{$name} {
    
}
```



### 变量默认符 !default
用来表示如果变量已被赋值，则不修改原值，否则使用新值
```
$name = 1em;
$name = 2em !default;

```

### css3 @规则

#### @import 引入外部
```
@import "foo.sass";

//如果不带后缀会搜索.sass和.scss后缀文件

@import "foo","tools"; //import多个

```


#### @media 媒体查询样式
```
.sidebar {
    width:100px;
    @media ....... {   //@media会冒泡到顶端
        width:200px;
    }
}
```


#### @extend 继承类
```
.nav {
    display:block;
    font-size:12px
}

.nav-small{
    @extend .nav  //继承.nav所有样式
    color:black;
}

//继承css默认样式
@extend a:hover;

//!optional标记（找不到不会报错）
```




#### @at-root
将嵌套的层提到父层

#### @debug，@warn，#error
将结果输出到控制台



## 控制指令和表达式
#### if()条件语句
```
if(布尔值,值1，值2)

if(true,1px,2px) //1px
```


#### @if
```
p {
    @if 1+1 == 2 {
        color:red;
    }
    @if 1+1 == 3 {
        color:blue;
    }
}
```

#### @if,@else if,@else
```
p {
    @if  {}
    @else if{}
    @to
    }
}
```

#### @for的两种形式
1. @for $var from <start> ==through== <end>
2. @for $var from <start> ==to== <end>

循环中的参数$name,不运算#{$name}

```
@for $i from 1 through 3 {
    .item-#{$i} {width:2em*$i;}
}


```


#### @each循环
`@each $var in <list or map>`
`@each $var1,$var2....in <多维list or map>`


#### @while
```
 $i:0;
  @while $i<5 {
      .item-#{$i} {
          width:2em*$i;
      }
      $i : $i+1;
  }
```




### 混入样式@mixin
指定一个通用的样式

```
@mixin mixinname{
    display:block;
    color:white;
}

//引入混入样式
body {
    @include mixinname
}


//带参数的mixin
@mixin mixinname ($para1,$para2){
    display:block;
    color:white;
}

body {
    @include mixname(2px,$value2) //可引入直接值和变量
}


//关键字参数
body {
    @include mixname($color:blue,$size:3) //
}


//可变参数...
@mixin mixinname($para...){   //参数后面加...
}
```

#### @content 内容混入
```
@mixin name{
    @content
}

p {
    include name {
        ..... //content
    }
}


```

## 函数指令
```
@function func_name ($para){
    @return $para*2
}


//使用
p {
    width: func_name(5);
}

```