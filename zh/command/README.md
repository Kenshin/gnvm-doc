功能
---
```
config       Setter and getter .gnvmrc file
use          Use any the local already exists of Node.js version
ls           Show all [local] [remote] Node.js version
install      Install any Node.js version
uninstall    Uninstall local Node.js version and npm
update       Update Node.js latest version
npm          NPM version management
session      Use any Node.js version of the local already exists version by current session
search       Search and Print Node.js version detail usage wildcard mode or regexp mode
node-version Show [global] [latest] Node.js version
reg          Add config property 'noderoot' to Environment variable 'NODE_HOME'
version      Print GNVM version number
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