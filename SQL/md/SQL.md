# SQL

资料来源

[PJC私房菜](https://pjchender.github.io/2018/05/30/sql-sql-query-%E5%B8%B8%E7%94%A8%E6%8C%87%E4%BB%A4/)



## 基本知识
- SQL不区分大小写，但建议大写方便阅读


## SQL常用指令
* DDL数据定义语言
    * CREATE DATABASE - 创建新数据库
    ```
    CREATE DATABASE dbname;
    ```
    * ALTER DATABASE - 修改数据库
    * DROP DATABASE - 删除数据库
    ``` 
    DROP DATABASE database_name
    ```
    * TRUNCATE DATABASE - 清空表内数据
    ```
    TRUNCATE TABLE table_name
    ```
    * CREATE TABLE - 创建新表
    ```
    CREATE TABLE table_name
    (
        column_name1 data_type(size) [constraint_name],
        column_name2 data_type(size) [constraint_name],
        column_name3 data_type(size) [constraint_name],
    ....
    
    //data_type:(varchar,integer,decimal,date...)
    //constraint_name（约束）:NOT NULL,UNIQUE,PRIMARY KEY,FOREIGN KEY,CHECK,DEFALUT
    );
    ```
    * ALTER TABLE - 变更（改变）数据库表
    ```
    //增加列
    ALTER TABLE table_name ADD column_name datatype
    
    //删除列
    ALTER TABLE table_name DROP COLUMN column_name
    
    //改变列的值类型
    //mysql,oracle
    ALTER TABLE table_name MODIFY COLUMN column_name datatype

    //ms access,sql server
    ALTER TABLE table_name ALTER COLUMN column_name datatype
    ```
    * DROP TABLE - 删除表
    ```
    DROP TABLE table_name
    ```
    * CREATE INDEX - 创建索引（搜索键）
    ```
    CREATE INDEX index_name ON table_name (column_name)
    
    //唯一值索引
    CREATE UNIQUE INDEX index_name ON table_name (column_name)
    ```
    * DROP INDEX - 删除索引
    ```
    //mysql
    ALTER TABLE table_name DROP INDEX index_name
    ```

* DML数据操作语言
    * INSERT INTO 添加数据
    * DELETE 删除数据
    * UPDATE 修改数据
    * SELECT 查找数据
    

### 普通查找

* SELECT * FROM 查找并返回指定列
```
SELECT col1,col2 FROM table1;
```
### 条件查找(DISTINCT/WHERE)

* SELECT DISTINCT * FROM (选出不重复的列)
```
SELECT DISTINCT col1,col2 FROM table1;
```


* SELECT * FROM * WHERE (带条件的选择)
```
SELECT col1,col2 FROM table1 WHERE condictions

//条件操作符 condiction operators
1, > < = >= <=
2, 不等于<> !=
3, AND OR
```

* SELECT * FROM * WHERE * BETWEEN * AND * (在两个值之间的值)
```
SELECT col1,col2 FROM table1 WHERE col BETWEEN low_value AND high_value

//等同于 最低值<目标值<最大值
```
### subquery 子句查找
在WHERE中用（）包住子句
```
SELECT * FROM * WHRER (SELECT * FROM *)
```

### 范围查找(BETWEEN AND/IN)

* NOT BETWEEN * AND * (与上面相反)

* SELECT * FROM * WHERE * IN * (替代多个or)
```
SELECT col1,col2 FROM table1 WHERE col IN (value1,value2,value3)


//IN可以接受select返回的结果
SELECT col FROM table1 WHERE col IN (SELECT col1 FROM table2)
```
* NOT IN * (与上面相反)

* SELECT * FROM * WHERE * IS NULL (是空值)

### 模糊查找(LIKE/ILIKE)

* SELECT * FROM * WHERE * LIKE *(模糊比对)
```
//LIKE,NOT LIKE区分大小写,ILIKE, NOT ILIKE不区分大小写

SELECT col1,col2 FROM table1 WHERE col LIKE %value_;
```
#### 模糊查找通配符
*  % 表示多个任意字符
*  _ 表示单个任意字符
* [] 表示字符列中任意单一字符
* [^ ],[! ] 表示非


### 限制输出(LIMIT)

* SELECT * FROM * LIMIT * (输出指定数量)




### 排序(ORDER BY)

* SELECT * FROM * ORDER BY * <ASC|DESC> (指定排序)
```
SELECT col1,col2.. FROM table ORDER BY col1 ASC
//默认ASC排序,顺序
```



### 别名(AS))

* SELECT * AS * FROM * 
```
SELECT col AS name FROM table

SELECT col1, SUM(amount) AS total_amount FROM table

SELECT col1, col2 FROM table INNER JOIN col AS name ON ...
```



### 分组(GROUP BY)

* SELECT * FROM * GROUP BY *
```
SELECT col FROM table GROUP BY col
//选择单一栏效果等同于SELECT DISTINCT

//多用于选择多栏搭配聚合函数使用
SELECT col1, SUM(col2) FROM table GROUP BY col1 （ORDER BY ...）

```
#### 分组条件筛选(HAVING)
* SELECT * FROM * GROUP BY * HAVING *
```
//HAVING相当于WHRER，只是位置不同
```




## JION合并
## 几种合并
* JOIN/INNER JOIN
* OUTTER JOIN
* LEFT [OUTER] JOIN
* RIGHT [OUTER] JOIN
* UNION


