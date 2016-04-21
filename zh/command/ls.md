##### 含义
* 查看 本地/远程（registry）全部的 `Node.js` 版本。

##### 参数
* 不包含任何参数。

##### 子命令
* `-r` - 在终端输出 远程 `Node.js` 全部版本的列表。
* `-d` - 在终端输出 远程 `Node.js` 全部 `详细版本` 的列表。
* `-i` - 在终端输出 远程 `IO.js` 全部版本的列表。( 加入 `-d` 则是全部版本的详细列表。)
* `-l` - 在终端输出 列表的行数，默认为 `全部`，可以指定最大行数，如 `-l 20` 输出 `20行` 。

##### 用法
```
gnvm ls                  :输出 本地 Node.js 全部版本的列表
gnvm ls -r               :输出 远程 Node.js 全部版本的列表
gnvm ls -r -d            :输出 远程 Node.js 全部   详细版本 的列表
gnvm ls -r -i            :输出 远程 io.js   全部版本的列表
gnvm ls -r -d -i         :输出 远程 io.js   全部   详细版本 的列表
gnvm ls -r -d --limit=15 :输出 远程 Node.js 前15个 详细版本 的列表
```

```
c:\> gnvm ls -r -d
Read all Node.js version list from http://npm.taobao.org/mirrors/node/index.json, please wait.
+--------------------------------------------------+
| No.   date         node ver    exec      npm ver |
+--------------------------------------------------+
  1     2016-04-05   5.10.1      x86 x64   3.8.3
  2     2016-04-01   5.10.0      x86 x64   3.8.3
  3     2016-03-22   5.9.1       x86 x64   3.7.3
  4     2016-03-16   5.9.0       x86 x64   3.7.3

  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  260   2011-08-26   0.1.16      [x]       [x]
  261   2011-08-26   0.1.15      [x]       [x]
  262   2011-08-26   0.1.14      [x]       [x]
+--------------------------------------------------+
```

```
c:\> gnvm ls -r -i -d -limit=4
Read all Node.js version list from http://npm.taobao.org/mirrors/iojs/index.json, please wait.
+--------------------------------------------------+
| No.   date         node ver    exec      npm ver |
+--------------------------------------------------+
  1     2015-09-15   3.3.1       x86 x64   2.14.3
  2     2015-09-02   3.3.0       x86 x64   2.13.3
  3     2015-08-25   3.2.0       x86 x64   2.13.3
+--------------------------------------------------+
```
