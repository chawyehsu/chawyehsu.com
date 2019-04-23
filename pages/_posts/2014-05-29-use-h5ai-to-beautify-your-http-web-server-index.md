---
layout: post
title: 用h5ai来美化你的网站目录索引吧！
date: 2014-05-29 16:49:00
updated: 2014-05-29 16:49:00
draft: true
hidden: true
comments: false
---

一般来说，大多数的网站并不会或不希望让用户浏览到网站的目录。要是一个网站被用户浏览
到了其目录，知道其目录下的所有文件的话，则会被白帽子判存在“目录遍历漏洞”的。但有些
时候，一些网站会仅作为展示文件和共享文件的一个空间。这时，若将网站目录设置成可浏览，
则会显得更加方便。

<!--more-->

一般服务器会使用Apache作WebServer，像我在本地是用WAMP来搭建开发用的环境。在本地开
发时为了方便找文件，所以根目录一般会不放置index文件，让目录变成可浏览。而Apache默
认的目录列表和索引页面实在是不怎么好看（当然看久了可能就麻木了呵），而且功能非常地
有限：

于是就来推荐一款具有Microsoft的Modern风格的WebServer索引美化应用————h5ai。
博主百度了一下，貌似谈到h5ai的并不多，只有屈指可数的几个网页而已，看来好像
没什么人知道呵。。。

### h5ai

> A modern HTTP web server index:  
> h5ai makes browsing directories on HTTP web servers more pleasant. Directory listings get styled in a modern way and browsing through the directories is enhanced by different views, a breadcrumb and a tree overview. Initially h5ai was an acronym for HTML5 Apache Index but now it supports other web servers too.

正如它的官网所表述的：h5ai是一款Modern风格的WEB服务器索引，它能让WEB服务器的目录用
户浏览起来觉得更舒适，并且提供了原有索引没有的多种视图更换、面包屑导航，目录树等（
还有好玩的二维码噢！），并支持多种文件的在线预浏览。h5ai起初仅支持基于Apache的HTML5
索引，但如今已经支持其他后端Server了，如Nginx，Lighttpd和Cherokee，而且兼容目前所有
主流的浏览器包括Chrome，Firefox，Safari，Opera和IE9+等。

这里给出两个demo：

- ① [官网的DEMO](https://larsjung.de/h5ai/sample/)
- ② [博主搭建的DEMO](http://demo.ihanabi.com/h5ai/)

### 安装快捷简单

h5ai的官网是 [https://larsjung.de/h5ai/](https://larsjung.de/h5ai/)，可前往下载最新
版本使用。它需要`PHP5.2.1`以上的版本，安装起来非常简单。只需把下载的压缩包解压出来
`_h5ai`文件夹，放到你的WEB服务器根目录下，并做一点点配置就可以访问使用了。（其实
h5ai并不要求Server开启目录可浏览，像Nginx不开autoindex也是可以用的）

![](https://ww4.sinaimg.cn/large/72eabe3fgw1egv97ecztsj21070ox77c.jpg)

**Apache** 的安装：在`httpd.conf`或者任意目录下的`.htaccess`文件中加入以下代码

```
DirectoryIndex  index.html  index.php  /_h5ai/server/php/index.php
```

**Nginx** 的安装：在配置文件`nginx.conf`中加入以下代码

```
index  index.html  index.php  /_h5ai/server/php/index.php;
```

**Lighttpd** 的安装：在配置文件`lighttpd.conf`中加入以下代码

```
index-file.names += ( "index.html", "index.php", "/_h5ai/server/php/index.php" )
```

然后就能使用了！而后更多个性化的配置则可在`_h5ai/conf/options.json`文件中自行配置。
另外，h5ai本身是托管在了 [Github](https://github.com/lrsjng/h5ai) 上的，有什么建议，
需求或问题都可以去发个issue什么的。
