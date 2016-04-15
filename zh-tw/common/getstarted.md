入門指南
---
> `gnvm.exe` 是一個單文件 exe，無需任何配置，直接使用。

**.gnvmrc**

```
globalversion: 5.0.1
latestversion: 5.10.1
noderoot: /Users/kenshin/Work/28-GO/01-work/src/gnvm
registry: http://npm.taobao.org/mirrors/node/
```

**更換更快的庫 registry**
  > `gnvm.exe` 內建了 [DEFAULT](http://nodejs.org/dist/) 和 [TAOBAO](http://npm.taobao.org/mirrors/node) 兩個庫。

```
gnvm config registry TAOBAO
```

**安裝 多個 Node.js**
  > 安裝任意版本的 Node.js 包括： 自動匹配 `latest` / `io.js` version 以及 選擇 32 / 64 位，例如 `x.xx.xx-x64` 。

```
gnvm install latest 1.0.0-x86 1.0.0-x64 5.0.0
```

**卸載本地任意 Node.js 版本**
```
gnvm uninstall latest 1.0.0-x86 1.0.0-x64 5.0.0
```

**切換本地存在的任意版本 Node.js**
```
gnvm use 5.10.1
```

**列出本地已存在的全部 Node.js 版本**
```
c:\> gnvm ls
5.1.1 -- latest
1.0.0
1.0.0 -- x86
5.0.0 -- global
```

**更新本地的 Node.js latest 版本**
```
gnvm update latest
```

**安裝 NPM**
  > `gnvm` 支持安裝 `npm`, 例如：下載最新版的 npm version ，使用 `gnvm npm latest` 。

```
gnvm npm latest
```

**查詢 Node.js 版本**
  > 可以使用關鍵字 `*` 或者 正則表達式 `/regxp/`，例如： `gnvm search 5.*.*` 或者 `gnvm search /.10./` 。

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