# Hello World!

[![Build Status](https://travis-ci.org/h404bi/h404bi.com.svg?branch=master)](https://travis-ci.org/h404bi/h404bi.com)  
This repo contains all the source code of my [site](https://h404bi.com). 
You can also see the generated files at [gh-pages](https://github.com/h404bi/h404bi.com/tree/gh-pages) branch.

## Playground

**Note: Currently, the theme files is privated and can't be cloned.**

### Clone the source code:

``` bash
$ git clone https://github.com/h404bi/h404bi.com.git
$ cd h404bi.com
$ git submodule update --init --recursive
```

### Prepare to build:

``` bash
$ npm install yarn hexo-cli gulp -g --no-optional
# Install Hexo dependencies
$ yarn
# Install theme dependencies
$ cd themes/type && yarn
```

### Build the theme:

``` bash
$ gulp
# or gulp dev
```

### Run and play:

``` bash
$ cd ../..
$ yarn start
# listen 0.0.0.0:4001
```

## License

Unless otherwise noted, MIT(Code) & [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)(other contents).
