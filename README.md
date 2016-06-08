# Hello World!

[![Build Status](https://travis-ci.org/h404bi/notes.svg?branch=master)](https://travis-ci.org/h404bi/notes)

This repo contains all the source code of my [blog](https://notes.h404bi.com). You can also see the generated files at [gh-pages](https://github.com/h404bi/notes/tree/gh-pages) branch.

## Deployment

###### Clone the source code:

``` bash
$ git clone https://github.com/h404bi/notes.git notes
$ cd notes
$ git submodule update --init --recursive
```

###### Install dependencies:

``` bash
# Install Hexo
$ npm install hexo-cli -g --no-optional
# Install Grunt
$ npm install grunt-cli -g
# Install Hexo dependencies
$ npm install --no-optional
# Install theme dependencies
$ cd themes/tranquilpeak
$ npm install --no-optional
$ bower install
```

###### Build the theme:

``` bash
$ grunt build
```

###### Run server and dev:

``` bash
$ cd ../..
$ hexo server
```

## License

Unless otherwise noted, [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).
