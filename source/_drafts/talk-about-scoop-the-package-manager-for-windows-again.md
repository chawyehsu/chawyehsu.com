---
title: 再谈谈 Scoop 这个 Windows 下的软件包管理器
draft: true
hidden: true
comments: false
---

![Scoop it!](/uploads/20180213001.png)

在 2015 年的《用 Scoop 改善 Windows Powershell》博文中，
我曾经介绍过这个令我眼前一亮的 Windows 软件包管理器。
那是我刚开始使用上 Scoop 的时候，回看过去对它的介绍，
也确像是一见钟情后的入坑纪实。简单，直接。

那会我很快适应了 Scoop，并一直使用至今。经过这两年多的使用，
我渐渐地更加依赖 Scoop 来管理一些软件。在我日常的 Windows 使用中，
它带给我的便利，已不再仅仅是那时所言的“改善 Windows Powershell”。
于是，我想来一篇博文，更新下对 Scoop 的介绍与体会，
这个帮助我构建出更加美好的开发环境与更好地管理部分软件的工具。
虽然感觉就现在的 Scoop 而言，它确实还是挺小众的。

<hr>

## 软件包管理器

> [http://scoop.sh/](http://scoop.sh/)

这是 Scoop 的官网首页。网站正中央醒目的 Slogan 已表明了它的定位，
一个 Windows 下的命令行式的（软件）安装工具。

> A command-line installer for Windows

虽然 Scoop 的作者在项目的 GitHub Wiki 中谈到，
Scoop 只是一个安装工具（installer），不应该被称为包管理器（package manager）。
但是对于使用者而言，它与我们一般认为的软件包管理工具其实很是相似。

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

这些工具的一个重要的特征是在终端下以**命令行**形式工作。
所以很多情况下，安装一个软件时你不再需要使用浏览器打开
[https://www.python.org/](https://www.python.org/downloads/)
网页，找到并下载安装包，双击安装程序。而是直接一句命令，然后等完成就行了。

{% figure right /uploads/20180213002.png "Homebrew" %}

作为一个以桌面环境专长的系统，Windows 自然不会有像 Arch Linux 亦或者 Debian
等以命令行环境起家的 Linux 系统那样，内置有这样的工具。不过，苹果家的 macOS
这个无论命令行环境还是桌面环境都好使的系统，却也没类似的工具。
但在用户社区的不断发展下，[Homebrew](https://brew.sh/) 这个神器从社区中诞生，
弥补了 macOS 的一大“缺陷”。那句充满自信的 Slogan，足以体现出 Homebrew
的地位。（更别提以~~小号~~ Linuxbrew 身份扩散至 Linux 社区……会不会有
Windowsbrew/Winbrew 呢哈哈……）

> Homebrew: The **missing** package manager for macOS

回到 Windows 这边厢。用户的需求与社区的发展必然也会催生类似的工具。
在产生的这为数不多的几种工具中，巧克力（Chocolatey）是目前最为出名，
相信也是用户数最为多的一个。从最初的开源项目，到现在的独立公司商业项目
（仍开源），收获近 6000 个软件包与近 3 亿次包安装次数（2018 年 5 月官网数据）。
甚至在 Windows 10 系统开始集成的官方“包管理器”（这里打引号是因为我觉得
它已经超出了包管理器的基本范畴，更像是一个聚合物，一个超集）—— [OneGet] 都
提供了对 Chocolatey 源的支持，你可以直接用 OneGet 安装 Chocolatey 的软件包。

但就像 NPM 之后的 Yarn 那样，轮子还是会有人重新造的。在 Chocolatey 之后的
2013 年，[lukesampson](https://github.com/lukesampson) 开发了 Scoop。
我了解过但没并用过 Chocolatey，所以接下来我只能根据我对 Chocolatey 的短浅认识，
来说一说我为什么一开始就选择用上了 Scoop。

## Why Scoop

<p style="position:relative;padding-bottom:56.25%;">
<iframe style="position:absolute;width:100%;height:100%" src="https://www.youtube.com/embed/a85QLUJ0Wbs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></p>

上方是 Scoop 刚发布时（我想也是唯一）的介绍视频，观看要能访问 Youtube。

如上文说的我对 Scoop 的“一见钟情”，这里我换个表达：第一感觉。很多情况下
第一感觉确实很能影响一些事情，不管人还是物。就从上面的视频里拿出来说一下，
Scoop 的安装说明真的很直截了当，有且仅有那一行命令，没有任何选择余地。
就像 Homebrew 那样，将命令粘贴至终端回车就好了。我也看过 Chocolatey 的
安装说明[^1]，虽然也提供了无脑一行命令的安装方式，但看到 More Install Options
我还是会研究一番看看怎么安装最优最合适，然后就不由自主地陷进去了。
这里有个趣闻，Chocolatey 的创始人曾经在 Scoop 的 GitHub 项目下提 issue[^2]
询问 Scoop 能否整合 Chocolatey，并表示 Scoop 非常**利落**。

上面是第一感观。第二个是 Scoop 跟 Chocolatey 对于管理员权限安装的部分
的不同处理方式，直接让我倾向于先入手了 Scoop。Chocolatey 的安装脚本默认要求
管理员权限安装，同时非管理员安装默认路径是 `C:\ProgramData\chocoportable`，
这对于非高权限用户来说不太友好（比如没有管理员权限的工作机安装会比较折腾），
而 Scoop 默认仅需普通用户权限，安装路径是 `%USERPROFILE%\scoop` 则显得比较清新，
不过这都是可以根据需求修改的了。

{% figure left /uploads/20180506001.png "Want some Chocolatey?" %}

关于 Chocolatey 默认管理员权限安装的原因，应该是比较明显的：
Chocolatey 需要能处理安装更多的软件包，比如 Flash Player Plugin，
VirtualBox，以及 Windows 的各种 KB 补丁。因为默认管理员，
所以很多只能以管理员身份安装到高权限目录的软件 Chocolatey 就能比较方便地处理了。
而 Scoop 的处理方式则反过来，默认普通用户权限。软件包能限当前用户，
不全局安装的就不全局安装。如果需要全局安装则自行利用 `-g` 参数提升为管理员权限安装。

这极大地方便了低权限用户，同时用户目录安装不污染系统目录，比较讨喜“绿色用户”。
我觉得 Chocolatey 才更像是命令行式软件安装工具（Installer），通过命令行来执行
各种软件的安装。而 Scoop 在我看来优先解压包体的理念，反而更有 Homebrew
那种装瓶（bottle）与倾倒（poured）的感觉[^3]。

第三个就是软件包（package）及其仓库。二者在这一部分的不同设计，
让我决定了先放弃尝试 Chocolatey。首先是关于软件包的定义，Chocolatey 用的是
`.ps1` 脚本，Scoop 用的是 json。乍一看你便会像 Chocolatey 作者对 Scoop
的评价那样：

> this is super neat...

另一个是 Scoop 有用户软件包仓库的概念，官方仓库里没有你想用的软件包，
又或者你想自定义一些软件包，那么可以自己建一个仓库，存放自己的软件包定义文件。
在实际的使用体验上，相信也会更加喜欢 Scoop 这样的设计，它更接近于 Homebrew：
软件包 manifest -> Formula，仓库 bucket -> tap。

剩下的就再通过上面的视频介绍自行体会一下吧。

## How Scoop

[^1]: [https://chocolatey.org/install#more-install-options]
[^2]: [https://github.com/lukesampson/scoop/issues/2]
[^3]: [https://github.com/Homebrew/brew/blob/master/docs/Bottles.md]

[OneGet]: https://github.com/OneGet/oneget
[https://chocolatey.org/install#more-install-options]: https://chocolatey.org/install#more-install-options
[https://github.com/lukesampson/scoop/issues/2]: https://github.com/lukesampson/scoop/issues/2
[https://github.com/Homebrew/brew/blob/master/docs/Bottles.md]: https://github.com/Homebrew/brew/blob/master/docs/Bottles.md
