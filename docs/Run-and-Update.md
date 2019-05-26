## Run app command
```
$ cd [PJ directory]
$ electron .
```

## Enable Debug Mode
Uncomment following lines in main.js. Search "debug".
1. "mainWindow.webContents.openDevTools()"
2. ",open_devtools: process.env.NODE_ENV !== 'production',"

```
$ vi src main.js
```

## npm update command
Install to local(PJ directory).
```
$ cd [PJ directory]
$ npm install -g electron
$ npm install -g electron-packager
```

Install to grobal(npm grobal).
```
$ npm outdated -g
$ npm install -g electron
$ npm install -g electron-packager
```

Install and write to package.json
```
$ npm install --save electron
```

## GitHub Repository information (check Repository size)
https://api.github.com/repos/256hax/simply-listen-to-soundcloud
