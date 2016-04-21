功能
---
```
config       配置 .gnvmrc
use          使用某个本地已存在的 Node.js 版本
ls           输出 [local] [remote] Node.js 版本
install      下载/安装任意已知版本的 Node.js
uninstall    删除任意本地已存在的 Node.js
update       下载 Node.js latest 版本并更新到 .gnvmrc 里面
npm          NPM 下载/安装/删除 管理
session      临时设定本地某个已存在的 Node.js 为 全局 Node.js
search       查询并且输出符合查询条件的 Node.js 版本详细信息的列表
node-version 输出 [global] [latest] Node.js 版本
reg          设定 .gnvmrc 属性值 noderoot 为 环境变量 NODE_HOME，并加入到 Path 中
version      查看 gnvm 版本
```
![功能一览](http://i.imgur.com/GqkZcjZ.png)

术语
---
* `global`   当前使用的 `Node.js` 。
* `latest`   稳定版本的 `Node.js` 。
* `session`  当前 `cmd` 所对应的环境。（临时环境）
* `.gnvmrc`  `gnvm`配置文件，无需手动建立，其中保存了 `本地` / `远程` Node.js 版本信息等。
    - `registry` 下载 `node.exe` 所对应的库，默认为 [DEFAULT](http://nodejs.org/dist/)，可以更换为 [TAOBAO](http://npm.taobao.org/mirrors/node)，也支持自定义。（**自定义库的结构需要保持一致。**）
    - `noderoot` 保存了全局 `Node.js` 所在的目录。（也是 `gnvm.exe` 所在的目录。）
