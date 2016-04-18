##### Introduction
* Print `globalversion` and `latestversion` and Fix.  
  **Important:** `gnvm config` only print, not fix feature.

##### Command
> Parameter can be empty or only one. support latest global keywords.

* `latest` - Print `latestversion` value, when value is `unknown`, fix it to global `Node.js` version.
* `global` - Print `globalversion` value, when it is not equal to the value of `registry` (including: `unknown`), it will prompt whether the update from the `registry`.

##### Flag
* Not any Flag.

##### Usage
```
gnvm node-version            :Print globalversion and latestversion, and Fix
```
