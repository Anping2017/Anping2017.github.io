# LESS笔记
资料来源：

[LESS中文网](https://less.bootcss.com/)

[LESS更详细教程](https://www.bootcss.com/p/lesscss/)

[LESS英文官网](http://lesscss.org/)

[LESS教程W3Cschool](https://www.w3cschool.cn/less/)


## 安装

node js中安装
```
npm install -g less

//使用
>lessc styles.less styles.css
```

浏览器中使用
```
<link rel="stylesheet/less" type="text/css" href="styles.less" />
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.11.1/less.min.js" ></script>
```


## 基本知识

### 注释
除css注释/* */外,还支持//




### 作用域
同js一样,变量向父级查找
```
@var: red;

#page {
  @var: white;
  #header {
    color: @var; // white
  }
}

```



### import导入外部less
```
@import "lib.less";
@import "lib";
```

### 嵌套（nesting）
```
//嵌套将会将父级和祖级元素添加到前面
#header {
    color:black;
    .logo {
        color:red;
        tr {
            color:yellow;
        }
    }
}
```

### 父级选择器
```
a {
    color:blue;
    &:hover {
        color:green;
    }
    
    & + & {  //a + a
        color:white;
    }
    
    &-children {  //a-children
        color:black;
    }
}
```

### 冒泡
```
.component {
    width:300px;
    color:white;
    @media (min-width: 768px) {  // 等于@media>.component
        width:600px;
    }
}

```

### 运算
支持+,-,*,/运算,单位参与换算,当无法换算时,取消单位计算




### 转义
转义中的文字将会原样输出,不会进行计算和转化
```
@data: ~"min-width:640px";
//less 3.5+
@min768: (min-width: 768px);
```

### 命名空间
命名空间是在某一样式下声明的mixin
```
.bundle {
    mixin(){
        ...
    }
}

//调用
.bundle>mixin()
```


## 语言拓展

### 变量
```
//声明
@width: 10px;


//在属性值中使用变量
#header {
    width:@width;
}


==== 插值语法 ====

//选择器中使用变量
@my-selector: banner;

.@{my-selector} {
    width:100px;
}

//URL中使用变量
@images: "../img";

body {
    background:url("@{images}/white-sand.png");
}
```


### Mixins 混入样式
Mixin将一个样式集，“混入”另一个样式中
```
.borderd {
    border-top:2px;
}
#main a {
    color:white;
    .borderd();
}
```

#### 带参数的混入样式
```
.border-radius(@radius){
    border-radius:@radius;
}

//调用
header {
    .border-radius(4px);
}
```

#### 参数可带默认值,可多个,可覆盖,@arguments 
```
.border-radius (@radius: 5px,@color:yellow) {
    ....
    
    //@arguments 变量包含所有参数的值
}

//调用
header {
    .border-radius; //直接调用
    .border-radius(2px) //部分覆盖
    
}
```


#### 不带参数(隐藏混入)
```
// 集合将被隐藏,不会暴露到css中
.wrap(){
    text-wrap:wrap;    
}


//调用
pre {
    .wrap
}
```

### 模式匹配
```
//我们可以给多个样式匹配同一指定
.mixin (dark, @color) {  //只接受dark为首参
  color: darken(@color, 10%);
}
.mixin (light, @color) {  //只接受light为首参
  color: lighten(@color, 20%);
}
.mixin (@_, @color) {  //接受任意值
  display: block;
}


```
### 继承(Extend)
```
.inline{
    width:100px;
}

nav ul {
    &:extend(.inline);
    color:white;
}
```

### 合并(merge)
```
1,逗号合并(使用+)
.myfunc() {
  box-shadow+: 5px 5px 5px grey;
}
.class {
  .myfunc();
  box-shadow+: 0 0 5px #f78181;
}
//  结果box-shadow: 5px 5px 5px grey, 0 0 5px #f78181;


2,空格合并(使用 + 或 +_)
.mixin() {
  transform+_: scale(1);
}
.class {
  .mixin();
  transform+_: rotate(2deg);
}
//结果:  transform: scale(1) rotate(2deg);

```


### 导引(Guards)
LESS通过导引混合而非if/else语句来实现条件判断，因为前者已在@media query特性中被定义。
```
.mixin (@a) when (lightness(@a) >= 50%) {
  background-color: black;
}

.mixin(#ddd);


//导引中可用的全部比较运算有： > >= = =< <。
//注意a=b，等同于js中a==b
//此外，关键字true只表示布尔真值,除去关键字true以外的值都被视示布尔假
//使用not关键字表示非


//导引序列使用逗号‘,’—分割,表示&&
.mixin (@a) when (@a > 10), (@a < -10) { ... }

//参数比较运算
.max (@a, @b) when (@a > @b) { width: @a }


//is*函式检验是否为某数据类型
.mixin (@a) when (isnumber(@a)) and (@a > 0) { ... }


//CSS Guards(略)
.style when (@usedScope=mixin) 
```

### 循环
```
.cont(@count) when (@count > 0) {
  .cont((@count - 1));
  width: (25px * @count);
}
div {
  .cont(7);
}
```


### 映射（Maps）
从 Less 3.5 版本开始，你还可以将混合（mixins）和规则集（rulesets）作为一组值的映射（map）使用。
```
#colors() {
  primary: blue;
  secondary: green;
}

.button {
  color: #colors[primary];
  border: 1px solid #colors[secondary];
}
```

### JavaScript 表达式引入
```
//使用反引号表示
@var: `"hello".toUpperCase() + '!'`;
```


## 内置函数
[函数手册](https://less.bootcss.com/functions/#logical-functions)
```
@width: 0.5;
percentage(@width); //50%
```


#### color函数
```
lighten(@color, 10%);     // return a color which is 10% *lighter* than @color
darken(@color, 10%);      // return a color which is 10% *darker* than @color

saturate(@color, 10%);    // return a color 10% *more* saturated than @color
desaturate(@color, 10%);  // return a color 10% *less* saturated than @color

fadein(@color, 10%);      // return a color 10% *less* transparent than @color
fadeout(@color, 10%);     // return a color 10% *more* transparent than @color
fade(@color, 50%);        // return @color with 50% transparency

spin(@color, 10);         // return a color with a 10 degree larger in hue than @color
spin(@color, -10);        // return a color with a 10 degree smaller hue than @color

mix(@color1, @color2);    // return a mix of @color1 and @color2
```

#### Math 函数
```
round(1.67); // returns `2`
ceil(2.4);   // returns `3`
floor(2.6);  // returns `2`
percentage(0.5); // returns `50%`

```