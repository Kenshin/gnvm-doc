##### 含義
* 配置 `.gnvmrc`。

##### 參數
> 不能為空。

* `INIT` - 初始化 `.gnvmrc`。（ 當不存在`.gnvmrc`時，`gnvm`會自動建立它，通常情況下，無需使用此命令。 ）
* `[props]` - 獲取 `.gnvmrc` 中的各個屬性值，包括：`registry` `noderoot` `globalversion` `latestversion`。
* `registry`
  - `DEFAULT` - `gnvm` 內置了 `Node.js` 官網地址 http://nodejs.org/dist/
  - `TAOBAO` - `gnvm` 內置了 `淘寶鏡像` 地址 http://npm.taobao.org/mirrors/node
  - `[custom]` - `gnvm` 支持自定義 `registry`，自定義的 `url` 結構必須與官網保持一致。
  - `test` - 驗證 `registry` 結構是否正確，連通性等因素。（ 多用於無法使用 `gnvm instal` `gnvm search` 時。 ）

##### 子命令
* 不包含任何子命令。

##### 用法
```
gnvm config                   :輸出 .gnvmrc 全部的屬性值
gnvm config INIT              :初始化 .gnvmrc
gnvm config [props]           :輸出 .gnvmrc 屬性，包括： registry noderoot globalversion latestversion
gnvm config registry [custom] :自定義 url 地址
gnvm config registry DEFAULT  :內建屬性，默認值為 http://nodejs.org/dist/
gnvm config registry TAOBAO   :內建屬性，值為     http://npm.taobao.org/mirrors/node
gnvm config registry test     :驗證結構是否正確，連通性等因素
```
