##### 含義
* 下載 `Node.js` latest 版本，並更新到 `.gnvmrc` 裡面。

##### 參數
> 參數不能為空，目前只支持 latest。

* `latest` - 最新版本的 `Node.js` 。

##### 子命令
* `-g` - `--global` 會自動執行 `gnvm use` 。（ 當使用此子命令時，只能有唯一的參數。 ）

##### 用法
```
gnvm update latest       :下載 Node.js latest version 並更新到 .gnvmrc
gnvm update latest -g    :下載 Node.js latest version 並更新到 .gnvmrc，然後自動執行 gnvm use latest
```
