---
layout: post
title: 双引导解决VirtualBox与Hyper-V共存问题
date: 2014-05-19 22:04:00
updated: 2014-05-19 22:04:00
draft: true
hidden: true
comments: false
---

### 问题描叙

因为WindowsPhone开发需要用到基于Hyper-V的Windows Phone Emulator，所以开启了Win8自
带的Hyper-V虚拟机。而有多需求的我又安装了VirtualBox虚拟机来运行Linux和WinXP。
Hyper-V完全不能与VMware共存所以选了能与之“半共存”的VirtualBox，但由于基于hypervisor
的Hyper-V太过“霸道”，一开机就会始终占据着hypervisor，即使开机后没打开Hyper-V，
Hyper-V也是“在后台始终虚拟着一些东西”，这就造成了与VMware不共存，以及造成VirtualBox
“半废”：WinXP还是能打开的，简单软件也能用，但遇到需要VT-x指令集，和嵌套分页硬件虚拟
化的软件（如SQLserver）时就傻逼了，至于Linux就完全不能了。

<!--more-->

### 解决方法

找遍了度娘和谷哥，只有一种方法能够解决这个共存问题：设置双引导。方法如下：`Win+X`
调出菜单，选择**命令提示符(管理员)**，依次敲入以下代码中的命令：

```
C:\Windows\system32>bcdedit /set {current} hypervisorlaunchtype off
操作成功完成。

C:\Windows\system32>bcdedit /copy {current} /d "Windows 8.1 with Hyper-V"
已将该项成功复制到 {a7deccee-ce33-11e3-bea9-a1553aac30e7}。

C:\Windows\system32>bcdedit /set {a7deccee-ce33-11e3-bea9-a1553aac30e7} hypervis
orlaunchtype auto
操作成功完成。
```

注意：第三行命令中的`{a7deccee-ce33-11e3-bea9-a1553aac30e7}`是根据第二行给出的，
请自行替换。原理：禁用当前环境的hypervisor，然后拷贝当前引导副本，再开启此副本的
hypervisor。最后开机会显示双引导如下图：

我默认选择的是禁用hypervisor的引导，因为相对比较常用这一个，若需求不同可自行修改默
认引导。另外此方法同样适用于安装有Android GenyMotion虚拟机同时又需要使用Hyper-V的
童鞋。算是勉强缓解一下需求了。就酱紫吧。
