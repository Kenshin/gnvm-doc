##### Introduction
* Search and Print `Node.js` version detail usage `wildcard` mode or `regexp` mode.

##### Command
> Not empty, and only support one parameter.

* `*` - Wildcard , e.g. `gnvm search *.*.*` `gnvm search 0.*.*`  `gnvm search 0.10.*` ,include:
    - `*`
    - `{num}.*.*`
    - `{num}.{num}.*`
* `latest` - Latest `Node.js` version.
* `/<regexp>/` - Regular expressions, e.g. `gnvm search /\.10\./`.

##### Flag
* Not any Flag.

##### Usage
```
gnvm search *.*.*          :Search and Print all Node.js versions detail, consistent with gnvm ls -r -d
gnvm search 0.*.*          :Search and Print 0.0.0  ~ 0.99.99 range Node.js version detail
gnvm search 0.10.*         :Search and Print 0.10.0 ~ 0.10.99 range Node.js version detail
gnvm search /<regexp>/     :Search and Print <regexp> Node.js version detail
gnvm search latest         :Search and Print latest   Node.js version detail
gnvm search 0.10.10        :Search and Print 0.10.10  Node.js version detail
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
