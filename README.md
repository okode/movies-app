Movies App
==========

Requirements
------------

* Node 10+
* Npm 6+
* Ionic 4+
* Ionic Lab 1+

```
$ brew update && brew upgrade
$ brew install node
$ npm install -g npm@latest
$ npm install -g ionic@rc
$ npm install -g @ionic/lab@rc semver
```

Created with Ionic CLI version 4.0.0 RC:

```
$ ionic start i4demo blank --type=angular --cordova
```

Preparing
---------

```
$ npm install
$ npm run fetch-plugins
```

Building
--------

```
$ ionic build
```

Running App - Serve
-------------------

```
$ ionic serve
```

Running App - Emulator
----------------------

```
$ cordova platform add [ ios | android ] --nosave
$ ionic cordova emulate [ ios | android ]
```

Running Unit Tests
------------------

```
$ npm run test
```

Running E2E Tests
-----------------

```
$ npm run e2e
```
