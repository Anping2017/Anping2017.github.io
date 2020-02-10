```js
//复习大纲
```





# HTML总复习



## 1. 基础结构



### 1.1 HTML5 基本文档结构

```html
<!DOCTYPE html>
<html lang="en">
	<head>
        <!--必需的标签-->
		<meta charset="utf-8">
		<title>html</title>
		<meta name="viewport" content="width=device-width,initial-scale=1.0">
	</head>
    <body>
    	<header>
			<h1>title</h1>
		</header>
		<nav>
        	<ul>
                <li>nav list</li>
            </ul>
        </nav>
		<section>
			<article>
            	<h2>header 2</h2>
                <p>content</p>
            </article>
		</section>
		<footer>
		</footer>	
    
    </body>
	</html>
```

### 1.1 head常用标签

### **必需的标签**

```html
<!-- 字符集 -->
<meta charset="utf-8">

<!-- 标题 -->
<title>html</title>

<!-- 移动端 -->
<meta name="viewport" content="width=device-width,initial-scale=1.0">
```

###  **常用的标签**

+ #### \<base\>

  ```<base href="url" target="_blank">```

+ #### \<meta\>

  + http-equiv属性:生成一个http域
    + refresh
  + name:关键字
    + generator
    + keywords
    + description
    + author
  + content:上面两项指定的内容



### 1.2 body常用标签

+ #### 段落

  + 块元素`div`,`p`,`h1~h6`
  + 行内元素`span`
  + 结构语义化元素`header`,`nav`,`section`,`article`,`footer`,`details`,`summary`

+ #### 文本

  + `em`句子划重点
  + `strong`全文划重点
  + `b`加粗引起注意
  + `i`字体图标
  + `q`短引文
  + `blockquote`长引文
  + `cite`引文出处
  + `address`作者联系方式,邮箱
  + `time`日期
  + `code`代码块
  + `pre`预格式,长代码块
  + `abbr`缩写
  + `dnf`术语
  + `figure`独立多媒体内容`figurecaption`内容标题

+ #### 链接

  + `<a href="#">link</a>`

  + 锚点

    + ```html
      <h3 id="demo">创造锚点</h3>
      <a href="#demo">指向锚点</a>
      ```

+ #### 图片

  + `<img src="1.jpg" alt="text">`

  + 图片链接`<a href="#"><img src="1.jpg" alt="text"></a>`

  + **图片语义化figure**

    + ```html
      <firgure>
      	<img src="" alt="">
          <figcaption>content</figcaption>
      </firgure>
      ```

      

+ #### 列表list

  + ul,ol
  + dl>dt>dd

+ #### 表格table

  + ```html
    <!--普通表格-->
    <table>
    	<td>
        	<tr>row1,cell1</tr>
            <tr>row1,cell2</tr>
        </td>
        <td>
        	<tr>row2,cell1</tr>
            <tr>row2,cell2</tr>
        </td>
    </table>
    ```

+ #### 表单form

  + ```html
    <!--普通表单-->
    <form auction="#" method="get">
        <!--label第一种用法-->
    	<label for="name">name:</label>
        <input type="text" name="name" id="name">
       
        <!--label第二种用法-->
        <label><input type="radio" name="gender" value="male">male</label>
        <label><input type="radio" name="gender" value="female">female</label>
        
        <button type="submit">submit</button>
    </form>
    ```



## 1.3 重点介绍

### 表格

* 合并单元格

  * colspan, rowspan

* 特殊风格的表格

  * 带标题的表格caption

  * 带表头的表格(标题加粗) th

  * 结构化的表格(有表头和表尾) thead,tbody,tfoot

  * ```html
    <table>
        <!--大标题-->
        <caption>Title</caption>
        <thead>
        	<tr>
                <!--标题行-->
            	<th>thead</th>
                <th>thead2</th>
            </tr>
        </thead>
        <tbody>
        	<tr>
            	<td>tbody</td>
                <td>tbody2</td>
            </tr>
        </tbody>
        <!-- tfoot可省略-->
        
    </table>
    ```

* 表格需要清除的默认样式

  * th,td的margin和padding
  * table的border-collaspse: collapse(是否合并边框,默认双线,合并后单线)
  * table的border-spacing:0(设置行与单元格的间距
  * [表格相关的CSS样式](https://www.w3school.com.cn/cssref/index.asp#table)





# HTML5-----待续