##### 含义
* 输出并修正 `globalversion` 与 `latestversion` 的值。  
  **注意：** `gnvm config` 只是输出两者的值，没有修正功能。

##### 参数
> 参数可以为空 或者 一个，只支持 latest global 关键字。
> 参考为空时，同时修改 globalversion latestversion 的值，否则只修正参数对应的值。

* `latest` - 只输出 `latestversion` 的值，当其值为 `unknown` 时，会提示是否设定为全局 `Node.js` 的值。
* `global` - 只输出 `globalversion` 的值，当其值不等于 `registry` 的值（ 包括： `unknown` ），会提示使用 `gnvm update latest` 更新。

##### 子命令
* 不包含任何子命令。

##### 用法
```
gnvm node-version            :输出并修正 globalversion 与 latestversion 的值
gnvm node-version global     :输出并修正 globalversion 的值
gnvm node-version latest     :输出并修正 latestversion 的值
```
