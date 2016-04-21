Feature
---
```
config       Setter and getter .gnvmrc file
use          Use any the local already exists of Node.js version
ls           Show all [local] [remote] Node.js version
install      Install any Node.js version
uninstall    Uninstall local Node.js version and npm
update       Update Node.js latest version
npm          NPM version management
session      Set any local Node.js version to session Node.js version
search       Search and Print Node.js version detail usage wildcard mode or regexp mode
node-version Show [global] [latest] Node.js version
reg          Add config property [noderoot] to Environment variable [NODE_HOME]
version      Print GNVM version number
```
![Feature](http://i.imgur.com/E7MvvQv.png)

Definitions
---
* `global`   current `Node.js` version.
* `latest`   latest `Node.js` version.
* `session`  current `cmd` Environment.( Temporary environment )
* `.gnvmrc`  `gnvm`configure file, can be auto created and it saved local/remote Node.js version information.
    - `registry` `node.exe` download URL, default is [DEFAULT](http://nodejs.org/dist/), can be choose [TAOBAO](http://nodejs.org/dist/), and support custom `url`.
    - `noderoot` save global Node.js path.
