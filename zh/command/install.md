##### 含义
* 下载/安装 任意已知版本的 `Node.js` 。（ 下载地址为 `.gnvmrc` -> `registry` 的值。）

##### 参数
> 参数不能为空，支持多个参数。

* `latest` - 最新版本的 `Node.js` 。
* `x.xx.xx` - 任意版本的 `Node.js` 。
* `1.x.x` - 自动识别 `io.js` 。
* `x86|x64` - 默认下载的 `node.exe` 为当前系统匹配的，如：32位 系统，下载 32-bit 版本的 `Node.js`。但增加 `x86` 后，会选择下载的 `node.exe` ，**此参数只限 `64位系统` 使用。**

##### 子命令
* `-g` - `--global` 会自动执行 `gnvm use` 。 当使用此子命令时，只能有唯一的参数。

##### 用法
```
gnvm install latest                  :下载 latest Node.js 版本
gnvm install x.xx.xx y.yy.yy         :多个下载
gnvm install x.xx.xx-x86             :下载 x.xx.xx 32-bit的 Node.js 版本
gnvm install 1.xx.xx                 :自动识别 io.js
gnvm install x.xx.xx --global        :下载后，自动执行 gnvm use
gnvm install npm                     :已经不支持 npm 关键字，如果想要下载 npm，请使用 gnvm npm
```

```
c:\> gnvm install latest 1.0.0-x86 1.0.0-x64 5.0.0
Start download Node.js versions [5.10.1, 1.0.0, 1.0.0-x86, 5.0.0].
5.10.1: 18% [=========>__________________________________________] 4s
 1.0.0: 80% [==========================================>_________] 40s
1.0...: 50% [==========================>_________________________] 30s
 5.0.1: 100% [==================================================>] 20s
End download.
```
