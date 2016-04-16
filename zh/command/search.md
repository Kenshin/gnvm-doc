##### 含义
* 查询 并且 在终端输出 符合查询条件的 `Node.js` 版本详细信息的列表。

##### 参数
> 不能为空，也不能有多个参数。

* `*` - 通配符，例如 `gnvm search *.*.*` `gnvm search 0.*.*`  `gnvm search 0.10.*` 包括：
    - `*`
    - `{num}.*.*`
    - `{num}.{num}.*`
* `latest` - 最新版本的 `Node.js` 。
* `/<regexp>/` - 正则表达式，例如 `gnvm search /\.10\./` 。

##### 子命令
* 不包含任何子命令。

##### 用法
```
gnvm search *.*.*          :查询 全部 Node.js 版本的详细信息， 类似 gnvm ls -r -d
gnvm search 0.*.*          :查询 范围在 [0.0.0  ~ 0.99.99] Node.js 版本的详细信息
gnvm search 0.10.*         :查询 范围在 [0.10.0 ~ 0.10.99] Node.js 版本的详细信息
gnvm search /<regexp>/     :查询 <regexp> Node.js 版本的详细信息
gnvm search latest         :查询 latest   Node.js 版本的详细信息
gnvm search 0.10.10        :查询 0.10.10  Node.js 版本的详细信息
```

```
c:\> gnvm search 5.*.*
Search Node.js version rules [5.x.x] from http://npm.taobao.org/mirrors/node/index.json, please wait.
+--------------------------------------------------+
| No.   date         node ver    exec      npm ver |
+--------------------------------------------------+
1     2016-04-05   5.10.1      x86 x64   3.8.3
2     2016-04-01   5.10.0      x86 x64   3.8.3
3     2016-03-22   5.9.1       x86 x64   3.7.3
4     2016-03-16   5.9.0       x86 x64   3.7.3
5     2016-03-09   5.8.0       x86 x64   3.7.3
6     2016-03-02   5.7.1       x86 x64   3.6.0
7     2016-02-23   5.7.0       x86 x64   3.6.0
+--------------------------------------------------+
```
