Hexo theme, Type!
=================

> TYPE, a concise Hexo theme, focus on typography, heavily inspired by 
> [Daniel Eden's website](https://daneden.me).

[![hexo](https://img.shields.io/badge/hexo-%3E%3D3.0-blue.svg?style=flat-square)](https://hexo.io) [![GitHub release](https://img.shields.io/github/release/h404bi/hexo-theme-type.svg?style=flat-square)](https://github.com/h404bi/hexo-theme-type) [![license](https://img.shields.io/github/license/h404bi/hexo-theme-type.svg?style=flat-square)](LICENSE)

Installation
------------

**NOTICE:** This theme design for hexo site in sub-directory. If your hexo site is in root directory, do your own changes to make it be compatible.

**Install**

``` sh
$ git clone https://github.com/h404bi/hexo-theme-type.git themes/type
```

**Enable**

Modify `theme` setting in your hexo instance `_config.yml` to `type`.

**Update**

``` sh
$ cd themes/type
$ git pull
```

Configuration
-------------

```
# Menu
menu:
  Blog: /blog
  Links: /blog/links.html
  Guestbook: /blog/guestbook.html

force_serif: false
night_mode:
  auto: true
  force: false

# Third-party services
baidu_push: true
disqus_shortname: 
google_analytics_id: 
```

Features
-----------

1. Just blank-leaving, Keep It Simple Stupid.
2. Sans-Serif & Serif fonts toggling by config `force_serif` variable (Default is Sans-Serif).
3. Black(Day) & White(Night) mode, Smooth toggling by config `night_mode` variables (Default is White).
4. Responsive `<figure>` tag design, better images typography layout (with [hexo-tag-figure](https://github.com/h404bi/hexo-tag-figure) plugin).

Development
-----------

```sh
$ cd themes/type
$ yarn && yarn dev
```

License
-------

MIT
