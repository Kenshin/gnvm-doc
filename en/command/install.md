##### Introduction
* Install any Node.js version.

##### Command
> Parameter not empaty, support Multiple parameter.

* `latest` - latest `Node.js`.
* `x.xx.xx` - Any `Node.js`.
* `1.x.x` -  Assign `io.js`.
* `x86|x64` - Assign arch version.

##### Flag
* `-g` - `--global` download complete after auto execute  `gnvm use`.

##### Usage
```
gnvm install latest                  :Download latest Node.js version from .gnvmrc registry
gnvm install x.xx.xx y.yy.yy         :Multiple Node.js version download
gnvm install x.xx.xx-x86             :Assign arch  version, suffix include: x86 and x64
gnvm install 1.xx.xx                 :Assign io.js version
gnvm install x.xx.xx --global        :Download and auto invoke 'gnvm use x.xx.xx'
gnvm install npm                     :Not logger support command, please usage 'gnvm npm x.xx.xx'. See 'gnvm help npm'
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
