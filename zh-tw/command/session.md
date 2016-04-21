##### 含義
* 臨時設定本地某個已存在的 `Node.js` 為 全局 `Node.js` 。  
  **注意：** 關閉當前 `cmd` 後，自動恢復全局 `Node.js`，當前為 session 環境時，以下 `命令` 無法使用：
  - `gnvm use`
  - `gnvm uninstall`
  - `gnvm install -g`
  - `gnvm update -g`

##### 參數
> 參數不能為空，目前只支持 start, close。

* `start` - 建立 `gns.cmd`。
* `close` - 刪除 `gns.cmd`。

##### 參數( `gns` )
* `help` - 顯示 `gns` 幫助。
* `run 0.10.24` - 設定 0.10.24 為當前 `cmd` 臨時 `Node.js` 版本。
* `clear`- 清除 為當前 `cmd` 臨時設定的 `Node.js` 版本。
* `version` - 顯示 `gns` 版本信息。

##### 子命令
* 無任何子命令。

##### 用法
```
gnvm session start        :建立 gns.cmd
gnvm session close        :刪除 gns.cmd
```

```
gns help                  :顯示 gns 幫助
gns run 0.10.24           :設定 0.10.24 為當前 cmd 臨時 Node.js 版本
gns clear                 :清除 為當前 cmd 臨時設定的 Node.js 版本
gns version               :顯示 gns 版本信息
```
