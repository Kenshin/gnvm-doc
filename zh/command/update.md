##### 含义
* 下载 `Node.js` latest 版本并更新到 `.gnvmrc` 里面。

##### 参数
> 参数不能为空，目前只支持 latest。

* `latest` - 最新版本的 `Node.js` 。

##### 子命令
* `-g` - `--global` 会自动执行 `gnvm use` 。（ 当使用此子命令时，只能有唯一的参数。 ）

##### 用法
```
gnvm update latest       :下载 Node.js latest version 并更新到 .gnvmrc
gnvm update latest -g    :下载 Node.js latest version 并更新到 .gnvmrc，然后自动执行 gnvm use latest
```
