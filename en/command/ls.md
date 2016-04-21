##### Introduction
* Show local/remot all `Node.js` versions.

##### Command
* No any parameter.

##### Flag
* `-r` - Print remote `Node.js` all version list.
* `-d` - Print remote `Node.js` all `detail version` list.
* `-i` - Print remote `IO.js` all version list. ( add `-d`, print all details version. )
* `-l` - Print maximum number of rows, default is `all`, e.g. `-l 20` print `20` rows.

##### Usage
```
gnvm ls                  :Print local  Node.js version list.
gnvm ls -r               :Print remote Node.js version list.
gnvm ls -r -d            :Print remote Node.js details version list.
gnvm ls -r -i            :Print remote io.js   version list.
gnvm ls -r -d -i         :Print remote io.js   details version list.
gnvm ls -r -d --limit=15 :Print remote Node.js maximum number of rows is 15
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
