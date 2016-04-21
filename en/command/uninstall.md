##### Introduction
* Uninstall local Node.js version.

##### Command
> Parameter not empaty, support Multiple parameter.

* `latest` - Latest `Node.js` .
* `x.xx.xx` - Local exist `Node.js`, support `x86|x64` suffix, e.g. `gnvm uninstall x.xx.xx-x86` .
* `npm` - Uninstall `NPM` .
* `ALL` - Uninstall local all `Node.js` .

##### Flag
* No parameter.

##### Usage
```
gnvm uninstall npm                         :Uninstall npm
gnvm uninstall 0.10.28                     :Uninstall 0.10.28  Node.js version
gnvm uninstall latest                      :Uninstall latest   Node.js version
gnvm uninstall 0.10.26 0.11.2-x86 latest   :Uninstall multiple Node.js version, e.g. 0.10.26 0.11.2-x86 latest
gnvm uninstall ALL                         :Uninstall all      Node.js version
```
