##### 含義
* 刪除 任意本地已存在的 `Node.js` 。

##### 參數
> 參數不能為空，支持多個參數。

* `latest` - 最新版本的 `Node.js` 。
* `x.xx.xx` - 本地存在的 `Node.js` ，支持 `x86|x64` 後綴，如 `gnvm uninstall x.xx.xx-x86` 。
* `npm` - 刪除 `NPM` 。
* `ALL` - 刪除本地全部 `Node.js` 。（ 慎用 ）

##### 子命令
* 無任何子命令。

##### 用法
```
gnvm uninstall npm                         :刪除 npm
gnvm uninstall 0.10.28                     :刪除 0.10.28  Node.js
gnvm uninstall latest                      :刪除 latest   Node.js
gnvm uninstall 0.10.26 0.11.2-x86 latest   :同時刪除 0.10.26 0.11.2-x86 latest
gnvm uninstall ALL                         :刪除本地全部的 Node.js
```
