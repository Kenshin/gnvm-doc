##### 含义
* 配置 `.gnvmrc`。

##### 参数
> 不能为空。

* `INIT` - 初始化 `.gnvmrc`。（ 当不存在`.gnvmrc`时，`gnvm`会自动建立它，通常情况下，无需使用此命令。 ）
* `[props]` - 获取 `.gnvmrc` 中的各个属性值，包括：`registry` `noderoot` `globalversion` `latestversion`。
* `registry`
  - `DEFAULT` - `gnvm` 内置了 `Node.js` 官网地址 http://nodejs.org/dist/
  - `TAOBAO` - `gnvm` 内置了 `淘宝镜像` 地址 http://npm.taobao.org/mirrors/node
  - `[custom]` - `gnvm` 支持自定义 `registry`，自定义的 `url` 结构必须与官网保持一致。
  - `test` - 验证 `registry` 结构是否正确，连通性等因素。（ 多用于无法使用 `gnvm instal` `gnvm search` 时。 ）

##### 子命令
* 不包含任何子命令。

##### 用法
```
gnvm config                   :输出 .gnvmrc 全部的属性值
gnvm config INIT              :初始化 .gnvmrc
gnvm config [props]           :输出 .gnvmrc 属性，包括： registry noderoot globalversion latestversion
gnvm config registry [custom] :自定义 url 地址
gnvm config registry DEFAULT  :内建属性，默认值为 http://nodejs.org/dist/
gnvm config registry TAOBAO   :内建属性，值为     http://npm.taobao.org/mirrors/node
gnvm config registry test     :验证结构是否正确，连通性等因素
```
