##### 含義
* 下載/安裝 任意已知版本的 `Node.js` 。（ 下載地址為 `.gnvmrc` -> `registry` 的值。）

##### 參數
> 參數不能為空，支持多個參數。

* `latest` - 最新版本的 `Node.js` 。
* `x.xx.xx` - 任意版本的 `Node.js` 。
* `1.x.x` - 自動識別 `io.js` 。
* `x86|x64` - 默認下載的 `node.exe` 為當前系統匹配的，如：32位 系統，下載 32-bit 版本的 `Node.js`。但增加 `x86` 後，會選擇下載的 `node.exe` ，**此參數只限 `64位系統` 使用。**

##### 子命令
* `-g` - `--global` 會自動執行 `gnvm use` 。 當使用此子命令時，只能有唯一的參數。

##### 用法
```
gnvm install latest                  :下載 latest Node.js 版本。
gnvm install x.xx.xx y.yy.yy         :多個下載。
gnvm install x.xx.xx-x86             :下載 x.xx.xx 32-bit的 Node.js 版本。
gnvm install 1.xx.xx                 :自動識別 io.js 。
gnvm install x.xx.xx --global        :下載後，自動執行 gnvm use 。
gnvm install npm                     :已經不支持 npm 關鍵字，如果想要下載 npm，請使用 gnvm npm 。
```

```
c:\> gnvm install latest 1.0.0-x86 1.0.0-x64 5.0.0
Start download Node.js versions [5.10.1, 1.0.0, 1.0.0-x86, 5.0.0].
5.10.1: 18% [=========>__________________________________________] 4s
 1.0.0: 80% [==========================================>_________] 40s
1.0...: 50% [==========================>_________________________] 30s
 5.0.1: 100% [==================================================>] 20s
End download.
```
