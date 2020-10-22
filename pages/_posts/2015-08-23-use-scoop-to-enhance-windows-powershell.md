---
layout: post
title: 用 Scoop 改善 Windows Powershell
date: 2015-08-23 23:19:11
updated: 2015-09-04 17:19:38
assets:
  cover: ../_assets/uploads/2018/12/20181225013.png
---

**[关于 Scoop 的新文章](/blog/2018/05/talk-about-scoop-the-package-manager-for-windows-again)** {style="text-align:center"}

## 一本道
软件包管理工具想必大家已经很清楚并且使用过。Debian/ Ubuntu 的 apt-get，
Arch Linux 的 Pacman，就连本身并无自带包管理工具的 Mac 都有了 Macports
和极其好用的 Homebrew。至于 Windows 下，
Geek 们也生产出各式各样的工具以贴合他们的 \*nix 使用习惯。
其中软件包管理工具中比较出名的就是 **[chocolatey]** 了。

然而本文并不细谈 chocolatey，而谈的是一个叫做 **[Scoop](http://scoop.sh/)** 
工具。官网上的描述是“A command-line installer for Windows”，其实说白了，
就是和 chocolatey 同属一种东西，也就是 Windows 下的软件包管理工具，
但其并没有 chocolatey 出名与强大。

那我为什么要用 Scoop 而不是 chocolatey？一正是 chocolatey 够强大，
但其实我一开始并没打算折腾 Powershell，因为已经在用 Git Bash / MSYS2，
所以我无需使用太过庞大的工具；二是 scoop 有吸引我的地方，它能把 Powershell 
弄得看起来像 Linux shell 的样子，这也是为什么我要折腾 PS 的促因。

<div class="gad">
  <adsbygoogle ad-layout="in-article" ad-format="fluid" ad-slot="8422573867"/>
</div>

看 Scoop 主页的 Demo 视频，你会发现视频里的 PS 用起来很简约，
而又是更方便了，不仅能安装运行各种 GNU 工具（`curl`、`vim` 等），
而且 `$PS1` 看起来像是 Linux 下的终端，还能显示 git 仓库的分支信息，
简直 Geek 范十足。虽说已有 MSYS2 这种更集成的 \*nix 环境，
但既然看到了 Scoop 又挺不错的于是就折腾下呗。
毕竟是 Windows 内置的嘛，还能 Win + R powershell 快速打开，
有时候打下指令（`ipconfig`、`nslookup` 什么的）还是会用到的呢。

![配置 Scoop 后的样子](../_assets/uploads/2015/08/20150823002.png "配置 Scoop 后的样子")

## 正题
1. 确保你已安装 Powershell 3（其实 Windows7+ 应该都已经集成了），
然后 WIn + R 输入 powershell 打开 PS，一句命令安装 scoop：
   ``` powershell
   iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
   ```

2. 安装完成后输入 `scoop help`，如果报错则需要允许 PS 提供脚本执行权限，执行：
   ``` powershell
   set-executionpolicy unrestricted -s cu
   ```

3. 然后就可以像 apt-get 那样 `install/uninstall` 软件包了：
   ``` powershell
   scoop install pkgname
   ```
   用 scoop 安装软件包时不会弹出 UAC 要求提权，
   因为软件包是安装在当前用户的 `appdata` 下的，
   并通过 shims path 管理调用执行文件，
   而不是将每个执行文件的路径都加到 path 中。

4. 开始美化控制台显示样式（★）
   首先 `scoop install concfg` 安装 `concfg`，
   然后导入 Solarized 主题`concfg import solarized small`
   （concfg 支持多种主题，详见 [concfg/presets]），
   期间会提示你替换了哪些控制台（其实也就 `CMD` 和 `PS`）的样式。
   然后 `scoop install pshazz` 安装 `pshazz`，
   当安装完后马上就能看到 shell prompt 发生变化了，
   而且 cd 到一个 git 仓库还能看到分支信息，还支持 git auto-completion 呢。

5. 然后还可以安装使用 `touch`、`curl`、`vim` 等更多的 GNU 命令行工具。
scoop 官方的 Packages 是 [bucket]，
如果里面没有你想安装的工具你还可以[自定义 bucket] 或 [创建一个 package]。

6. 最后还能用 scoop 进行开发语言环境的[多版本控制]呢，
比如 `scoop install python27 python` 同时安装 Py2.7 和 Py3，
然后 `scoop reset python27` 选择 Py2.7，`scoop reset python` 则设置为 Py3。

至于更详尽的使用方法请 `scoop help` 或访问 [Scoop Wiki] 咯。

总结：所以说这种人就只能为他们的这种“如此难以伺候”而不断地折腾自己的电脑，
折腾自己。这就是所谓“生命不息，折腾不止”吧哈哈哈。。。卒

[chocolatey]: https://chocolatey.org/
[concfg/presets]: https://github.com/lukesampson/concfg/tree/master/presets
[bucket]: https://github.com/lukesampson/scoop/tree/master/bucket
[自定义 bucket]: https://github.com/lukesampson/scoop/wiki/Buckets#creating-your-own-bucket
[创建一个 package]: https://github.com/lukesampson/scoop/wiki/Creating-an-app-manifest
[多版本控制]: https://github.com/lukesampson/scoop/wiki/Switching-Ruby-and-Python-Versions
[Scoop Wiki]: https://github.com/lukesampson/scoop/wiki
