---
layout: post
title: Minecraft Modding 简史
date: 2017-02-21 00:02:45
updated: 2017-02-22 13:22:19
keywords: Minecraft,Modding,简史,历史
description: 这是目前网络上为数不多的,能让一些在 Minecraft 非早期就加入社区的玩家,相对清晰地了解至今整个 Minecraft Modding 历程的文章
---

## 前言

本文是 Minecraft 文章 A Brief History of Minecraft Modding 的译文版本，原文作者 Aaron Mills，原文于 2015 年 6 月 3 日发布在 Packt 出版社网站 PacktPub 上。[^1]

This article is a zh_CN translation of the Minecraft article "A Brief History of Minecraft Modding", which was originally published on PacktPub at June 03rd, 2015, the original author is Aaron Mills.

挺早前就看过这篇文章，作者作为一位过来人为我们不简略地叙述了一遍 Minecraft Modding 的已有“简史”。至少这是目前网络上为数不多的，能让像我这样的一些在 Minecraft 非早期就加入社区的玩家，相对清晰地了解至今整个 Minecraft Modding 历程的文章了。很是喜欢，当时就有翻译下来的打算，现在填坑了。原文发布于 2015 年年中，时间节点也就到这个点。所以社区其后的发展，比如 Spigot、Sponge 的活跃等就没有提及。译文对比原文，加入了一些可能有助于内容理解的链接引用。

## 正文

{% figure center /uploads/20170222001.png "cover from PacktPub" %}

几乎从 Minecraft 诞生以来，modding 就一直在进行着。在过去的那段时间里，Minecraft modding 已经经过了数次变革，或者说，走过了数个“时代”。那些早期的日子以及早期的 mods，与现在比起来，有着巨大的区别。我初次涉足 modding 社区是在 Minecraft 的 Beta 中期阶段，所以在这之前发生的所有事情都是第二手的见闻。不过正如接下来我们将探讨的那样，虽然在时间的流沙中，大量的印记已经丢失，但是沿途重要的驿站却被记住了。

这些年来，Minecraft 经历了数个发展阶段[^2]。有趣的是，Minecraft Modding 的各个“时代”也正正对应着这些发展阶段。在 Classic 阶段，Minecraft 生存模式以{% ruby 生存测试|Survival Test %}的形式首次出现，接着再次出现在了 Indev 阶段，随后到了 Infdev 阶段，在经过 Alpha 和 Beta 阶段后才到达{% ruby 正式版本|Release %}。而这一切便从 Classic 开始。

Classic 在 2009 年 5 月开始发行，其开发持续到了当年 9 月。Classic 阶段引入了生存模式与多人模式。在 Minecraft 历史上的这一时期，当时的 modding 正处于起步阶段。一方面，随着数个不同的服务端 mods 的出现，服务端 modding 在这一阶段开始繁荣起来。（后面我们会谈及 Bukkit，而这些 mods 是 Bukkit 的前身）这些 mods 的目的，普遍是提供给服务器管理员更多的工具来维护他们的服务器。而在另一方面，以增加新内容为目的的客户端 mods，直到 Alpha 阶段才真正开始出现。

Alpha 在 2010 年 6 月开始发行，并在这一年的余下时间里持续。Alpha 阶段之前，从 Indev 到 Infdev，没有太多的证据表明这一时期出现有 mods，可能是 Indev 和 Infdev 阶段缺少多人模式的缘故。Alpha 阶段重新加入了多人模式，这一时期里，简单的客户端 mods 首次出现了。最初的这些 mods 只是对已有内容进行简单的修改：加入高清材质的支持、增加新类型的箭、修复 bug、修改指南针等等，简单且小巧。

然而，随着 Minecraft Coder Pack[^3]（后改名为 Mod Coder Pack，即俗称的 MCP）的问世，一切开始发生变化。（MCP 的一位主要创始人，Michael 'Searge' Stoyke，现正在 Mojang 工作。）2010 年年中的某个时候，第一个 MCP 版本 Alpha 1.1.2_01 发布。Minecraft 的代码是混淆过的，虽然很容易被反编译。混淆的意即把代码中所有有意义名字和单词替换成人类不可读的无意义字词。这对于人类来说很难受，但对计算机来说却仍然感觉良好。MCP 正是通过映射有意义的名字到代码中，使得 modding 变得相比以往更加容易。

与此同时，服务端 mod hMod[^4] 正在另一边厢里完全独立地发展着，为服务器管理员提供一些简单而又必不可少的工具。可是，hMod 遇到了主要开发者“玩失踪”的问题。这一情况最终造成了 Bukkit[^5] 的诞生，一个全新设计的服务器 mod，支持“{% ruby 插件|plugins %}”并且可以完成一切 hMod 不能完成的事。创造 Bukkit 的一行人最后也被招安到了 Mojang：Nathan 'Dinnerbone' Adams，Erik 'Grum' Broes，Warren 'EvilSeph' Loo，以及 Nathan 'Tahg' Gilbert。Bukkit 而后成为了可能是有史以来最受欢迎的 Minecraft mod。事实上许多人认为，Minecraft 在线服务器普及的主要原因，就是因为 Bukkit 的出现。然而，一段时期内，它与客户端 mod 在很大程度上不兼容。

客户端方面不甘落后，在{% ruby 这一|2010 %}年的年底迎来了另一重大发展：Risugami 的 ModLoader[^6]。ModLoader 是变革性的。在 ModLoader 出现以前，如果你想使用两个 mods，你就需要自己逐行手动合并它们的代码。因为在不编辑 Minecraft 的基础代码的情况下，许多共同的任务不能一起完成，比如增加新方块和新物品。而 ModLoader 通过建立一个框架来改变了这种情况，那些简单的 mods 可以{% ruby 钩入|hook into %} ModLoader 的代码中，执行一些此前需要修改基础代码的共同任务。简单的 ModLoader 最后没有在其原有范围外继续进行扩展。不过，它却将 modding 带入了一个新的时代。

Minecraft Beta 在 2010 年的圣诞节前开始发行并持续到了 2011 年，许多人称这一时期是 modding 的“黄金时代”。Beta 阶段涌现了许多在今天仍被认可且熟悉的 mods，其中包括我的 mod，Railcraft（铁路 RC）[^7]。在这一时期，IndustrialCraft（工业 IC）[^8]、Buildcraft（建筑 BC）[^9]、Redpower（红石力量 RP）[^10]以及 Better than Wolves（比狼好 BTW）[^11]也都迎来了开端。它们都是些往 Minecraft 中加入许多新方块和新特性的主要 mods。此外，最近进行重制的巨型 mod，Aether（以太）[^12][^13]，也是在 Minecraft Beta 阶段开始发布的。这些 mods 与其它更多 mods 一起，算是重新定义了“Minecraft Mods”。以一个全新的高度存在着，它们有时候彻底改变了游戏。可是这仍有缺陷。Mods 的创造和使用仍旧是令人痛苦的。你不能同时使用 IndustrialCraft 和 Buildcraft，因为它们对同一些基础文件做了太多的修改。ModLoader 只涵盖了对最常见的基础文件的修改，几乎没有接触（深层）代码，这对一个主要 mod 来说是不够的。而且，你仍然需要手动往 Minecraft jar 文件中插入代码来使用一个 mod，这一工程将许多玩家隔离在了 modding 之外。

看着他们自己的 mods 不能被一起使用，各个主要 mods 的作者于是联合起来启动了一个新的项目。他们称之为 Minecraft Forge[^14]。Forge 由 Redpower 的 Eloraam 和 Buildcraft 的 SpaceToad 发起，很快就被当时许多主要的 mods 采用。Forge 构建于 ModLoader 之上，极大地扩展了{% ruby 基础钩子|base hooks %}的数量，相比以往，提供了允许更多的 mods 一起工作的可能。这一时期，modding 迎来了它真正的“黄金时代”，一直从 Minecraft Beta 阶段持续到了正式发布。

预示着 Minecraft“官方”正式版本的 Minecraft 1.0 在 2011 年 11 月发布。与此同时，客户端 modding 正经历着转变。包括整个 Forge 团队在内，许多著名的开发者开始转去做其它事情去了。大部分他们的 mods 在没有作者维护的情况下“生存”着，而部分则有。举个例子，Redpower 在 2012 年末停止了所有的开发。Eloraam，SpaceToad 和 Flowerchild 则将 Forge 的接力棒交给了在当时还相对不出名的 LexManos。“黄金时代”告一段落，但是取而代之的是新 mods 的爆发，modding 变得比以往更加受欢迎。主要包括 LexManos 和 cpw 在内的新 Forge 团队，为 modding 带来了许多创新。最终他们甚至开发出了 Risugami 的 ModLoader 的替代品 ForgeModLoader[^15]，并整合进了 Forge 中。用户安装 mods 时不再需要徘徊游荡在 Minecraft 的内部。创新一直持续到今天，Minecraft mods 也已数不胜数。

然而，服务端 mods 的情况却没有那么乐观。长期占据支配地位的服务端 mod Bukkit，在 2014 年遭受了致命打击。原作者与维护者之间发生了{% ruby 许可冲突|Licensing conflicts %}，基本上是围绕着在主要维护者离开后，谁“拥有”这个项目的问题。最终，一位最多产的维护者利用一个技术手段作废了 Bukkit 项目使用他贡献的代码的权利[^16]，有效地杀死了整个项目。替代品还没被开发出来，只留下整个服务端社区在日渐过时的代码中蹒跚前行。不过，不必对未来太过担心。过去也曾有挑战，但几乎每有一个项目死去，很快就会被更好的东西取代。

Minecraft 有着一个有史以来最大、最有活力、最主流的 modding 社区。它有着悠久的历史，而这些只不过是 Minecraft 文化沧海中的一粟。还有更多的，是大大小小的帮助塑造了整个社区的事件。愿 Minecraft 的未来依旧那么得有趣。

## 关于作者

Aaron Mills 出生于 1983 年，生活在太平洋西北地区，一个知识、树木与雨水富饶的地方。他在温哥华华盛顿州立大学学习并获得计算机科学学士学位。他最著名的是他在 Minecraft mod Railcraft 上的工作，但同时也对 Forestry 和 Buildcraft 两个 Minecraft mod 有着突出的贡献，同时也为 Minecraft Forge 项目做出了部分功勋。


[^1]: [A Brief History of Minecraft Modding](https://www.packtpub.com/books/content/brief-history-minecraft-modding)
[^2]: [http://minecraft-zh.gamepedia.com/版本记录](http://minecraft-zh.gamepedia.com/版本记录)
[^3]: [http://www.modcoderpack.com](http://www.modcoderpack.com)
[^4]: [https://github.com/traitor/Minecraft-Server-Mod](https://github.com/traitor/Minecraft-Server-Mod)
[^5]: [Bukkit Forums](https://bukkit.org)
[^6]: [Risugami's Mods - Updated.](http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/1272333-risugamis-mods-updated)
[^7]: [Railcraft Blog | Redefine your Rails](http://www.railcraft.info)
[^8]: [Industrial-Craft-Wiki](http://wiki.industrial-craft.net)
[^9]: [BuildCraft](https://www.mod-buildcraft.com)
[^10]: [Eloraams Blog](http://www.eloraam.com)
[^11]: [Better Than Wolves Wiki](www.sargunster.com/btw/index.php?title=Main_Page)
[^12]: [Aether](http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/1275355-1-7-3-aether-collaboration-mod-v1-02-new-mobs)
[^13]: [Aether II](http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/1289717-alpha-the-aether-ii-genesis-of-the-void-the)
[^14]: [Minecraft Forge](https://files.minecraftforge.net)
[^15]: [FML](https://github.com/MinecraftForge/FML)
[^16]: [http://dl.bukkit.org/dmca/notification.txt](https://gist.github.com/h404bi/58377ce25d618287bea2b99ca09eca8f)
