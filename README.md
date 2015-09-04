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
$ npm install
$ cd themes/tranquilpeak
$ npm install
$ bower install
```

###### Build the theme:

``` bash
$ grunt buildProd
```

###### Generate and run server:

``` bash
$ cd ../..
$ hexo generate
$ hexo server
```

## License

Unless otherwise noted, [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).
