##### 含义
* 删除 任意本地已存在的 `Node.js` 。

##### 参数
> 参数不能为空，支持多个参数。

* `latest` - 最新版本的 `Node.js` 。
* `x.xx.xx` - 本地存在的 `Node.js` ，支持 `x86|x64` 后缀，如 `gnvm uninstall x.xx.xx-x86` 。
* `npm` - 删除 `NPM` 。
* `ALL` - 删除本地全部 `Node.js` 。（ 慎用 ）

##### 子命令
* 无任何子命令。

##### 用法
```
gnvm uninstall npm                         :删除 npm
gnvm uninstall 0.10.28                     :删除 0.10.28  Node.js
gnvm uninstall latest                      :删除 latest   Node.js
gnvm uninstall 0.10.26 0.11.2-x86 latest   :同时删除 0.10.26 0.11.2-x86 latest
gnvm uninstall ALL                         :删除本地全部的 Node.js
```
