##### 含义
* 使用某个本地已存在的 `Node.js` 版本。

##### 参数
> 不能为空，也不能有多个参数。

* `latest` - 最新版本的 `Node.js` 。
* `x.xx.xx` - 任意版本的 `Node.js` ，支持 `x86|x64` 后缀，如 `gnvm use x.xx.xx-x86` 。

##### 子命令
* 不包含任何子命令。

##### 用法
```
gnvm use x.xx.xx      :使用 x.xx.xx Node.js
gnvm use latest       :使用 latest  Node.js
gnvm use x.xx.xx-x86  :使用 x.xx.xx-x86 Node.js
```
