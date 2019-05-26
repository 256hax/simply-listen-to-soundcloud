# Release Step
## 1. Test
```
$ cd [PJ directory]
$ electron .
```

## 2. Build for Mac
```
$ electron-packager . simply-listen-to-soundcloud --platform=darwin --arch=x64 --icon=assets/images/icons/icon.icns --overwrite

$ ls -l simply-listen-to-soundcloud-darwin-x64

drwxr-xr-x  3 user  staff       96  5 25 21:34 simply-listen-to-soundcloud.app
```

## 3. Release to GitHub
### Zip
```
$ cd simply-listen-to-soundcloud
$ zip -ry simply-listen-to-soundcloud.app.zip simply-listen-to-soundcloud.app
```

### Deploy Release File
1. Go to [GitHub Releases](https://github.com/256hax/simply-listen-to-soundcloud/releases/)
2. Creat a new release. Then upload "Simply Listen to SoundCloud.app.zip" file.