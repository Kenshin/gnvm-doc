功能
---
```
config       配置 .gnvmrc
use          使用某個本地已存在的 Node.js 版本
ls           輸出 [local] [remote] Node.js 版本
install      下載/安裝任意已知版本的 Node.js
uninstall    刪除任意本地已存在的 Node.js
update       下載 Node.js latest 版本並更新到 .gnvmrc 裡面
npm          NPM 下載/安裝/刪除 管理
session      臨時設定本地某個已存在的 Node.js 為 全局 Node.js
search       查詢並且輸出符合查詢條件的 Node.js 版本詳細信息的列表
node-version 輸出 [global] [latest] Node.js 版本
reg          設定 .gnvmrc 屬性值 noderoot 為 環境變數 NODE_HOME，並加入到 Path 中
version      查看 gnvm 版本
```
![功能一覽](http://i.imgur.com/GqkZcjZ.png)

術語
---
* `global`   當前使用的 `Node.js` 。
* `latest`   穩定版本的 `Node.js` 。
* `session`  當前 `cmd` 所對應的環境。（臨時環境）
* `.gnvmrc`  `gnvm`配置文件，無需手動建立，其中保存了 `本地` / `遠程` Node.js 版本信息等。
    - `registry` 下載 `node.exe` 所對應的庫，默認為 [DEFAULT](http://nodejs.org/dist/)，可以更換為 [TAOBAO](http://npm.taobao.org/mirrors/node)，也支持自定義。（**自定義庫的結構需要保持一致。**）
    - `noderoot` 保存了全局 `Node.js` 所在的目錄。（也是 `gnvm.exe` 所在的目錄。）
