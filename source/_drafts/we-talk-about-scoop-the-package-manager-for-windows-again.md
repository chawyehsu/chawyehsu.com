---
title: 再谈 Scoop 这个 Windows 下的软件包管理器
draft: true
hidden: true
comments: false
---

![Scoop it!](/uploads/20180213001.png)

在 2015 年的《用 Scoop 改善 Windows Powershell》博文中，我曾经介绍过这个令我眼前一亮的 Windows
软件包管理器。那是我刚开始使用上 Scoop 的时候，回看过去对它的介绍，也确像是一见钟情后的入坑纪实。简单，直接。

那会我很快适应了 Scoop，并一直使用至今。经过这两年多的使用，我渐渐地更加依赖 Scoop 来管理一些软件。在我日常的
Windows 使用中，它带给我的便利，已不仅仅是那时所言的“改善 Windows Powershell”。于是，我想来一篇博文，更新下对
Scoop 的介绍，这个帮助我更好地管理部分软件以及构建出更加好用的开发环境的工具。

<hr>

## Scoop 是什么？

> [http://scoop.sh/](http://scoop.sh/)

这是 Scoop 的官网首页。网站正中央醒目的 Slogan 已表明了它的定位，一个 Windows 下的命令行式的（软件）安装工具。

> A command-line installer for Windows

作为对比，我列举一下常见的不同系统下类似的工具：

| 系统 | 工具 | 范例 | 备注 |
|------|------|------|------|
| Arch Linux | Pacman | pacman -S pyenv | Built-in |
| CentOS/RHEL | yum | yum install python-wheel | Built-in |
| Debian/Ubuntu | apt/apt-get | apt install python3 | Built-in |
| Fedora | dnf | dnf install python-pip | Built-in |
| macOS | Homebrew | brew install python | 3rd-party |
| openSUSE | zypper | zypper install python3-pip | Built-in |
| Windows | Chocolatey | choco install docker | 3rd-party |

这些工具的一个重要的特征是**命令行**下工作。所以很多情况下，安装一个软件时你不再需要浏览器打开
[https://www.python.org/](https://www.python.org/downloads/)
网页，找到并下载安装包双击打开安装。而是直接一句命令，然后等完成就行了。

{% figure right /uploads/20180213002.png "Homebrew" %}

作为一个以桌面环境专长的系统，Windows 自然不会有像 Arch Linux 亦或者 Debian
等以命令行环境起家的 Linux 系统那样，内置有这样的工具。而苹果家的 macOS
这个无论命令行环境还是桌面环境都好使的系统，却也没类似的工具。不过，在用户社区的不断发展下，Homebrew
这个神器从社区中诞生了，弥补了 macOS 的一大“缺陷”。那句充满自信的 Slogan，足以体现出 Homebrew
的地位。（更别提以~~小号~~ Linuxbrew 身份扩散至 Linux 社区……）

> **Homebrew: The missing package manager for macOS**
