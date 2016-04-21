##### Introduction
* Print `globalversion` and `latestversion` and Fix.  
  **Important:** `gnvm config` only print, not fix feature.

##### Command
> Parameter can be empty or only one. support latest global keywords.

* `latest` - Print `latestversion` value, when value is `unknown`, fix it to global `Node.js` version.
* `global` - Print `globalversion` value, when it is not equal to the value of `registry` (including: `unknown`), prompt usage `gnvm update latest` update `.gnvmrc` latestversion.

##### Flag
* Not any Flag.

##### Usage
```
gnvm node-version            :Show Node.js global and latest version, and fix it
gnvm node-version latest     :Show Node.js latest version, and fix it
gnvm node-version global     :Show Node.js global version, and fix it
```
