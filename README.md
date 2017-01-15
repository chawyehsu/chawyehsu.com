# Hello World!

[![Build Status](https://travis-ci.org/h404bi/h404bi.com.svg?branch=master)](https://travis-ci.org/h404bi/h404bi.com)  
This repo contains all the source code of my [site](https://h404bi.com). 
You can also see the generated files at [gh-pages](https://github.com/h404bi/h404bi.com/tree/gh-pages) branch.

## Playground

### Clone the source code:

``` bash
$ git clone https://github.com/h404bi/h404bi.com.git
$ cd h404bi.com
$ git submodule update --init --recursive
```

### Prepare to build:

``` bash
$ npm install hexo-cli gulp -g --no-optional
# Install Hexo dependencies
$ yarn
# Install theme dependencies
$ cd themes/type && yarn
```

### Build the theme:

``` bash
$ gulp
```

### Run and play:

``` bash
$ cd ../..
$ npm start
```

## License

Unless otherwise noted, [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).
