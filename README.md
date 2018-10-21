# Hello World!

[![Powered by Hexo](https://img.shields.io/badge/Powered%20by-Hexo-blue.svg?style=flat-square)](https://hexo.io) [![Travis](https://img.shields.io/travis/h404bi/www.h404bi.com.svg?style=flat-square)](https://travis-ci.org/h404bi/www.h404bi.com) [![build with vscode](https://img.shields.io/badge/build%20with-vscode-blue.svg?style=flat-square)](https://code.visualstudio.com) [![David](https://img.shields.io/david/h404bi/www.h404bi.com.svg?style=flat-square)](https://github.com/h404bi/www.h404bi.com)
 ![Repo size](https://img.shields.io/github/repo-size/h404bi/www.h404bi.com.svg?style=flat-square&colorB=328657)

This repo contains all the source code of h404bi's frigidity [website](https://www.h404bi.com).

You can also see the generated files at [gh-pages](https://github.com/h404bi/www.h404bi.com/tree/gh-pages) branch.

## Playground

**Prerequisites:**  
Git, Nodejs, Yarn

### Clone the source:

``` sh
$ git clone https://github.com/h404bi/www.h404bi.com.git
$ cd www.h404bi.com
```

### Run and play:

``` sh
# Install Hexo dependencies and run dev
$ yarn && yarn dev
# Listening 0.0.0.0:4000
```

### Theme:

The theme is pre-build to use, if you want to change something, launch the dev version of it.

``` sh
$ cd themes/mina
# Install Theme dependencies and launch dev version
$ yarn && yarn dev
# Actually launch webpack watch
```

A seperated `type` theme repository can be found at [h404bi/hexo-theme-type](https://github.com/h404bi/hexo-theme-type).

## License

Content @ [Chawye Hsu](https://www.h404bi.com), All Rights Reserved.
