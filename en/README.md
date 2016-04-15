GNVM - Node.js version manager on Windows by Go  
================================  
`GNVM` is simple multiple Node.js version manager by Go, like `nvm` `nvmw` `nodist`.  
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

Characteristic
---
* Single file, not dependent on any environment.
* Direct use, no configuration.
* Color stdout.
* Support multiple download.
* Built-in [TAOBAO] (http://npm.taobao.org/mirrors/node), convenient switching, also support custom.
* Support `NPM` download / install.

Website
---
[![Website](https://img.shields.io/badge/website-gnvm.ksria.com-1DBA90.svg)](http://ksria.com/gnvm)

Document
---
[English](https://github.com/kenshin/gnvm/blob/master/README.en.md) | [繁體中文](https://github.com/kenshin/gnvm/blob/master/README.tw.md)

Feature
---
![Feature](http://i.imgur.com/GqkZcjZ.png)

Licenses
---
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)
