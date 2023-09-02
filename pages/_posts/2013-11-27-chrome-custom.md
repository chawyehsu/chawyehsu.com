---
layout: post
title: "[chrome样式]分享博主目前使用的Custom样式"
date: 2013-11-27 14:09:00
updated: 2013-11-27 14:09:00
draft: true
hidden: true
comments: false
sitemap: false
---

当前的博客主题(Banri)的CSS也采用了这个样式的一部分,那么下面直接就贴代码吧，囧rz

<!--more-->

```css
{font-family:Comic Sans MS, "Microsoft Yahei" !important;}
{text-shadow: silver 0px 1px 1px !important;}
a { -webkit-transition: all 250ms; }
a em{ text-decoration:none !important }
a:hover {
    text-decoration: none !important;
    color: white !important;
    background-color: #39F !important;
    -webkit-border-radius: 2px;
    -webkit-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    -webkit-transition: all 250ms;
}
::-webkit-scrollbar {
    width: 9px;
    height: 9px;
}
::-webkit-scrollbar-track-piece { background-color: transparent; }
body::-webkit-scrollbar-track-piece { background-color: white; }
::-webkit-scrollbar-track-piece:no-button {}
::-webkit-scrollbar-thumb {
    background-color: #CCC;
    border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover { background-color: #0CF;}
::-webkit-scrollbar-thumb:active { background-color: #3994EF; }
::-webkit-scrollbar-button:vertical { width: 9px; }
::-webkit-scrollbar-button:horizontal { width: 9px; }
::-webkit-scrollbar-button:vertical:start:decrement { background-color: white; }
::-webkit-scrollbar-button:vertical:end:increment { background-color: white; }
::-webkit-scrollbar-button:horizontal:start:decrement { background-color: white; }
::-webkit-scrollbar-button:horizontal:end:increment { background-color: white; }
```

效果如下图：
