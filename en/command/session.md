##### Introduction
* Set any local `Node.js` version to `session` Node.js version.  
  **Importent:**  
    Close current `cmd` Tab(session), auto restore global `Node.js` version.  
    When `session` Environment, this commands not usage:
  - `gnvm use`
  - `gnvm uninstall`
  - `gnvm install -g`
  - `gnvm update -g`

##### Command
> Not empty and only support `start` `close` keywords.

* `start` - Create `gns.cmd`.
* `close` - Remove `gns.cmd`.

##### Command( `gns` )
* `help` - Show `gns` cli command help.
* `run 0.10.24` - Set 0.10.24 is `session` environment.
* `clear`- Quit sesion `Node.js`, restore global `Node.js` version.
* `version` - Show `gns` version.

##### Flag
* Not any Flag.

##### Usage
```
gnvm session start        :Create gns.cmd
gnvm session close        :Remove gns.cmd
```

```
gns help                  :Show gns cli command help
gns run 0.10.24           :Set 0.10.24 is session environment
gns clear                 :Quit sesion Node.js, restore global Node.js version
gns version               :Show gns version
```
