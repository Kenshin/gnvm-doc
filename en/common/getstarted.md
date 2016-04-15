Getting Started
---
> `gnvm.exe` is a single exe file, don't need to configure, direct usage.

**.gnvmrc**

```
globalversion: 5.0.1
latestversion: 5.10.1
noderoot: /Users/kenshin/Work/28-GO/01-work/src/gnvm
registry: http://npm.taobao.org/mirrors/node/
```

**Change fast registry**
  > `gnvm.exe` built-in [DEFAULT](http://nodejs.org/dist/) and [TAOBAO](http://nodejs.org/dist/) two registry.

```
gnvm config registry TAOBAO
```

**Install multiple Node.js**
  > Install any Node.js version include: automatic recognition of `latest` version, `io.js` version and specified arch, e.g. `x.xx.xx-x64`.

```
gnvm install latest 1.0.0-x86 1.0.0-x64 5.0.0
```

**Uninstall local Node.js version**
```
gnvm uninstall latest 1.0.0-x86 1.0.0-x64 5.0.0
```

**Usage any local Node.js version**
```
gnvm use 5.10.1
```

**List all local Node.js versions**
```
c:\> gnvm ls
5.1.1 -- latest
1.0.0
1.0.0 -- x86
5.0.0 -- global
```

**Update local Node.js latest version**
```
gnvm update latest
```

**Install npm**
  > `gnvm` support install `npm`, download npm latest version, usage `gnvm npm latest`.

```
gnvm npm latest
```

**Search Node.js version from .gnvmrc registry**
  > you can usage `*` or `/regxp/`, e.g. `gnvm search 5.*.*` or `gnvm search /.10./` .

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