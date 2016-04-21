##### Introduction
* Setter and getter `.gnvmrc` file.

##### Command
> Parameter not empty.

* `INIT` - Initialization `.gnvmrc` file.
* `[props]` - Get `.gnvmrc` props, include: `registry` `noderoot` `globalversion` `latestversion`.
* `registry`
  - `DEFAULT` - `gnvm` built-in variable `Node.js`, url http://nodejs.org/dist/
  - `TAOBAO` - `gnvm` built-in variable `taobao`, url http://npm.taobao.org/mirrors/node
  - `[custom]` - `gnvm` support custome `registry` url.
  - `test` - Validation `registry`.

##### Flag
* Not any Flag.

##### Usage
```
gnvm config                   :Print all propertys from .gnvmrc
gnvm config INIT              :Initialization .gnvmrc file
gnvm config [props]           :Get .gnvmrc props
gnvm config registry [custom] :Custom  is valid url
gnvm config registry DEFAULT  :DEFAULT is built-in variable. value is http://nodejs.org/dist/
gnvm config registry TAOBAO   :TAOBAO  is built-in variable. value is http://npm.taobao.org/mirrors/node
gnvm config registry test     :Validation .gnvmfile registry property
```
