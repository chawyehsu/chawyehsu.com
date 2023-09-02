---
layout: post
title: 测试一下"世界最小的MP3播放器"
date: 2013-11-29 12:28:00
updated: 2013-11-29 12:28:00
draft: true
hidden: true
comments: false
sitemap: false
---

测试一下新发现的“世界最小的 MP3 播放器”：1bit-audio-player，还真是迷你，
文件总共只有 3 个，两个 js 一个 swf，一共 15kb 多一点。

<!--more-->

### 工作原理

该播放器使用 JavaScript，借助 CSS 选择器语法探测页面中的 MP3 链接，然后，将播放器的
Flash 对象代码自动嵌入到每个 MP3 链接后面，在链接后面生成一个播放箭头，点击即可播放。
该播放器最适合对 Web 页面中的 MP3 链接进行预览，因为它的播放界面只有一个箭头，因此，
播放是单向前进式的，你无法后退或者定位到音频的某个点。
