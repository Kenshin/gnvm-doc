##### 含義
* 輸出並修正 `globalversion` 與 `latestversion` 的值。  
  **注意：** `gnvm config` 只是輸出兩者的值，沒有修正功能。

##### 參數
> 參數可以為空 或者 一個，只支持 latest global 關鍵字。
> 參考為空時，同時修改 globalversion globalversion 的值，否則只修正參數對應的值。

* `latest` - 輸出 `latestversion` 的值，當其值為 `unknown` 時，會提示是否設定為全局 `Node.js` 的值。
* `global` - 輸出 `globalversion` 的值，當其不等於 `registry` 的值（ 包括： `unknown` ），會提示是否從 `registry` 更新。

##### 子命令
* 不包含任何子命令。

##### 用法
```
gnvm node-version            :輸出並修正 globalversion 與 latestversion 的值
```
