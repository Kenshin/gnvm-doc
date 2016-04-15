GNVM - 使用 Go 語言編寫的 Node.js 多版本管理器  
================================  
`GNVM` 是一個簡單的 `Windows` 下 Node.js 多版本管理器，類似的 `nvm` `nvmw` `nodist` 。  
```
c:\> gnvm install latest 1.0.0-x86 1.0.0-x64 5.0.0
Start download Node.js versions [5.10.1, 1.0.0, 1.0.0-x86, 5.0.0].
5.10.1: 18% [=========>__________________________________________] 4s
 1.0.0: 80% [==========================================>_________] 40s
1.0...: 50% [==========================>_________________________] 30s
 5.0.1: 100% [==================================================>] 20s
End download.

c:\> gnvm ls
5.1.1 -- latest
1.0.0
1.0.0 -- x86
5.0.0 -- global

c:\> gnvm use latest
Set success, current Node.js version is 5.10.0.

c:\> gnvm update latest
Update success, current Node.js latest version is 5.10.0.
```

特色
---
* 單文件，不依賴於任何環境。
* 下載即用，無需配置。
* 彩色日誌輸出。
* 支持多線程下載。
* 內置 [TAOBAO](http://npm.taobao.org/mirrors/node)，方便切換，也支持自定義。
* 支持 `NPM` 下載/安裝/配置。

主頁
---
[![Website](https://img.shields.io/badge/website-gnvm.ksria.com-1DBA90.svg)](http://ksria.com/gnvm)

文檔
---
[English](https://github.com/kenshin/gnvm/blob/master/README.en.md) | [繁體中文](https://github.com/kenshin/gnvm/blob/master/README.tw.md)

功能
---
![功能一覽](http://i.imgur.com/GqkZcjZ.png)

許可
---
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)
