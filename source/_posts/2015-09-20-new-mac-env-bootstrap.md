title: Newbie Mac Bootstrap
date: 2015-09-20 17:28:19
tags: [mac]
toc: true
---
入坑 Mac OS X，写点 note (nonsense) 以备玩坏系统重装时翻查。

## Command Line Tools for Xcode
OS X 系统不像 Ubuntu 等发行版，系统默认是不包含编译工具链的（因为不是每位用户都需要吧，人性化？）。所以在使用时如果执行到含有诸如 gcc、make 等命令时，就会出现以下情况：

{% figure right /uploads/20150810021812.png "提示需要命令行工具" %}

这时就需要安装苹果提供的命令行工具包（Command Line Tools，下称 CLT）了。安装 CLT 有几种方法：
 ### 1. 通过 Xcode 安装
 `for Xcode` 嘛，当然能通过 Xcode 安装了，只不过没有安装 Xcode 亦可使用。所以如果你有安装 Xcode 的话，直接通过 Xcode 安装就好了。（我自己并没有安装 Xcode，因为暂无打算学习 Mac 相关的开发，所以私以为没必要耗费几个 G 的硬盘空间塞下 Xcode 吧， MacBook 的硬盘寸寸金啊。。。）。
 ### 2. 通过终端安装
 ``` sh
 $ xcode-select install
 ```
 或者输入 gcc 触发前文所提到的情况（见前文图）亦可。
 ### 3. 通过离线安装包安装
 如果用前面的方法安装不成功的话，可到 Apple 下载中心获取离线安装包进行安装。（认准苹果官网）
 > [https://developer.apple.com/downloads](https://developer.apple.com/downloads) （需要使用 AppleID 登录）

安装 CLT 后就可以使用工具链编译安装软件了，这是 Bootstrap A New Mac 的第一步。

## Where is the package manager of OS X?
用 Mac 之前我还真没想过 OS X 有没有包管理工具。初次用了一会儿后，总觉得好像少了些什么，又说不出来。后在 Win 机上 Xshell 管理 VPS 时，才猛然想起：OS X 下用什么管理软件包？！Where is the package manager of OS X? 检索后才知道 OS X 不止默认不带 toolchains，还没有 package manager。带着使用 Linux 发行版心态的我不免有点失望。

### Homebrew
官方没有社区有。强大的 Mac 社区造就了各种易用的工具。软件包管理工具就各式各样。其中最出名的两个是 **[Macport](https://www.macports.org)** 和 **[Homebrew](http://brew.sh)**。二者有着截然不同的理念，并且越来越多用户选择了 Homebrew。下面进行 Bootstrap A New Mac 的第二步。

``` sh
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
<small>OS X 自带 ruby，难怪 ruby 社区一股 Macbook 风气。</small>

然后就可以像用 `apt-get install/update` 那样 `brew install/update` 了，更多用法参见 [Doc](https://github.com/Homebrew/homebrew/tree/master/share/doc/homebrew#readme)。

### Homebrew-Cask
介绍了 Homebrew 就不得不说 **[Caskroom](http://caskroom.io/)** 了。Homebrew 掌管了各种 CLI 软件包的管理，App Store 提供各种 GUI 应用，这 Cask 又是什么？Cask 其实是 Homebrew 的一个扩展，能让 brew 支持安装和管理 GUI 应用。能在 App Store 获取到的应用当然最好在上面下载安装了，但有些应用程序是没有上架 App Store 的（比如 IntelliJ IDEA），得去程序的官网各种点击下载安装。于是不甘这样的 Mac 社区 Geek 们搞了个 Homebrew-Cask，然后就能打开终端一句指令愉快地安装 GUI 应用了，比如：`brew cask install intellij-idea-ce`。安装 Cask 只需：

``` sh
$ brew install caskroom/cask/brew-cask
```
*题外话：Cask 开发者们最近在 GitHub 上热论着一场改革[^1]，说是要改变 Cask 目前的行为，以更贴合 regular usage，不过不能完美过渡的话会不会让用户感觉混乱。。*

[^1]:[Homebrew-Cask issue #13201](https://github.com/caskroom/homebrew-cask/issues/13201)
