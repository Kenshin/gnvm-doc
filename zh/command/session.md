##### 含义
* 临时设定本地某个已存在的 `Node.js` 为 全局 `Node.js` 。  
  **注意：** 关闭当前 `cmd` 后，自动恢复全局 `Node.js`，当前为 session 环境时，以下 `命令` 无法使用：
  - `gnvm use`
  - `gnvm uninstall`
  - `gnvm install -g`
  - `gnvm update -g`

##### 参数
> 参数不能为空，目前只支持 start, close。

* `start` - 建立 `gns.cmd`。
* `close` - 删除 `gns.cmd`。

##### 参数( `gns` )
* `help` - 显示 `gns` 帮助。
* `run 0.10.24` - 设定 0.10.24 为当前 `cmd` 临时 `Node.js` 版本。
* `clear`- 清除 为当前 `cmd` 临时设定的 `Node.js` 版本。
* `version` - 显示 `gns` 版本信息。

##### 子命令
* 无任何子命令。

##### 用法
```
gnvm session start        :建立 gns.cmd
gnvm session close        :删除 gns.cmd
```

```
gns help                  :显示 gns 帮助
gns run 0.10.24           :设定 0.10.24 为当前 cmd 临时 Node.js 版本
gns clear                 :清除 为当前 cmd 临时设定的 Node.js 版本
gns version               :显示 gns 版本信息
```
