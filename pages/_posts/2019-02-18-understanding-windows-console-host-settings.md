---
layout: post
title: 彻底搞懂 Windows 控制台的设置
keywords: Windows控制台,ConHost.exe,Windows控制台设置,Windows10控制台
description: >-
  Windows Console Host（即 conhost.exe）中的设置（如命令行字体等）可能有点
  难以理解，主要是因为在过去几十年中这个设置系统不断发展。根据 ConHost 如何
  被调用，这些设置项会存储在不同的位置。
date: 2019-02-18 22:02:03
updated: 2019-03-06 23:15:20
assets:
  cover: ../_assets/uploads/2019/02/20190218005.png
categories:
  - 技术
---

Windows Console Host（即 `conhost.exe`，下称“ConHost”[^1]）中的设置可能有点难
以理解，主要是因为在过去几十年中这个设置系统不断发展。根据 ConHost 如何被调用，
这些设置项会存储在不同的位置。

![控制台设置](../_assets/uploads/2019/02/20190218001.png)

## 设置加载的层级

决定一个控制台设置的加载与存储是基于以下层级进行的：

1. 写死在 conhostv2.dll 里面的设置
2. 用户定义的控制台默认设置，存储在注册表 `HKCU\Console` 中
3. 每个控制台应用程序[^2]单独的设置，存储在注册表 `HKCU\Console\<sub-key>` 中，
   其中 `sub-key` 使用以下两种值中的一种：
   - 控制台应用程序的文件路径（其中的 `\` 会替换成 `_`）
   - 控制台应用程序的标题
4. Windows 快捷方式（.lnk）中的设置

![注册表中的控制台设置键值](../_assets/uploads/2019/02/20190218003.png)

当一个控制台应用程序被启动后，ConHost 会依据加载情况决定使用哪些设置，同时会按
照前述的层级先后对一些进行覆盖。每一个设置项将取其最后加载的值，也就是说在第 4 级
（Windows 快捷方式）中的值会覆盖掉第 2 级（用户定义的默认设置）中的值。

这样一个层级设计解释了为什么在每个控制台实例窗口的标题菜单中，都会有一个“默认值”
选项以及一个“属性”选项。

![控制台窗口标题菜单](../_assets/uploads/2019/02/20190218002.png)

修改“默认值”时，改动会存储到注册表 `HKCU\Console` 中，写入用户定义默认设置
（即前述层级中的第 2 级）。

修改“属性”时，改动会存储到注册表中的控制台应用程序单独设置或者 Windows 快捷方式中：

- 如果这个控制台应用程序是被直接（比如是从 Win+R，Windows 运行对话中）启动的，则
改动会存储到前述的控制台应用程序单独存储位置（层级中的第 3 级）中。
- 如果这个控制台应用程序是通过 Windows 快捷方式被启动的，则改动会直接存储到这个
快捷方式 .lnk 文件中（层级中的第 4 级）。你可以右键这个控制台应用程序的快捷方式，
选择“属性”查看其设置。

![快捷方式中的设置](../_assets/uploads/2019/02/20190218004.png)

当一个控制台应用程序被启动后，ConHost 会根据前述的层级，从第 1 级写死的默认设置
开始覆盖设置，最后确定使用哪些设置。这意味着在 Windows 快捷方式中的设置会覆盖掉
注册表中的控制台应用程序单独设置以及默认设置。

值得注意的是在注册表中的设置是“稀疏”的，意味着如果某个设置项为空，
则不会修改正在使用的值。这允许用户在所有控制台应用程序之间共享部分
设置项的同时指定其它一些特定设置项。

而快捷方式文件则会将每个设置项都存储其中，不管是否有默认设置。这些设置会以不透明
的数据块存储在快捷方式中。

下面是 Windows 控制台的设置列表，包含了简短的描述以介绍其作用。

| 设置项名字 | 类型 | 描述 |
|-----------|------|------|
| FontSize | Coordinate (REG_DWORD) | 字体像素大小 |
| FontFamily | REG_DWORD | GDI 字体族 |
| ScreenBufferSize | Coordinate (REG_DWORD) | 屏幕缓冲区大小，宽x高个字符 |
| CursorSize | REG_DWORD | 光标大小 |
| WindowSize | Coordinate (REG_DWORD) | 窗口大小，宽x高个字符 |
| WindowPosition | Coordinate (REG_DWORD) | 窗口位置，宽x高个像素（如果没有设置则进行自动定位） |
| WindowAlpha | REG_DWORD | 窗口透明度（取值范围：0x4D-0xFF） |
| ScreenColors | REG_DWORD | 前景色与背景色 |
| PopupColors | REG_DWORD | 显示弹窗（CMD.exe 按 F2）时的前景色与背景色 |
| QuickEdit | REG_DWORD | 快速编辑模式是否开启 |
| FaceName | REG_SZ | 字体名字 (默认使用 `__DefaultTTFont__`，根据你的代码页 CodePage 选择最合适的字体） |
| FontWeight | REG_DWORD | GDI 字重 |
| InsertMode | REG_DWORD | 插入模式是否开启 |
| HistoryBufferSize | REG_DWORD | 命令记录缓冲区大小 |
| NumberOfHistoryBuffers | REG_DWORD | 命令记录缓冲区数量 |
| HistoryNoDup | REG_DWORD |是否丢弃旧的副本 |
| ColorTable%% | REG_DWORD | 16 色的调色盘中每个颜色的 RGB 值 |
| ExtendedEditKey | REG_DWORD | 是否启用扩展的文本选择键 |
| WordDelimiters | REG_SZ | 分词符列表（例：`' .-/\=|,()[]{}'`） |
| TrimLeadingZeros | REG_DWORD | 选取复制文字时是否删除首部零宽字符（使用 `00000001` 表示 `1`） |
| EnableColorSelection | REG_DWORD | 选择时是否同时复制颜色 |
| ScrollScale | REG_DWORD | 使用滚轮滚动时一次滚动多少行 |
| CodePage | REG_DWORD | 代码页 CodePage |
| ForceV2 | REG_DWORD | 是否使用新版控制台 |
| LineSelection* | REG_DWORD | 是否启用对选定内容自动换行 |
| FilterOnPaste* | REG_DWORD | 是否在粘贴时筛选剪贴板内容（如：将弯引号替换为直引号） |
| LineWrap | REG_DWORD | 是否在调整窗口大小时对输出的文本换行 |
| CtrlKeyShortcutsDisabled | REG_DWORD | 是否启用 Ctrl 键快捷方式 |
| AllowAltF4Close | REG_DWORD | 是否禁用 Alt-F4 热键 |
| VirtualTerminalLevel | REG_DWORD | 控制台 VT 支持级别 |

*仅在新版控制台中有效

## 已知问题

与大多数复杂的事物一样，有一些问题需要注意：

### 系统更新会导致设置被重置

每当你升级到新版本的 Windows 时，系统级的快捷方式以及“「开始」菜单”中的设置会被
重置为默认值。这意味着如果你升级了系统，你自定义的字体、颜色等设置将会全部重置为
Windows 的默认值。

## 后记

我一直在使用 [concfg](https://github.com/lukesampson/concfg) 作为我管理我的
Windows 控制台设置的工具，近期成为了该项目的协作者进行项目维护，便开始稍微深入
地了解 Windows 控制台相关知识。本文是微软官方 Windows Console & WSL 团队的一篇
博文的译文，原文见 [Understanding Windows Console Host Settings]，有些许删改。

[Understanding Windows Console Host Settings]: https://blogs.msdn.microsoft.com/commandline/2017/06/20/understanding-windows-console-host-settings/

[^1]: 在 Wikipedia 上也称 [Win32 控制台](https://zh.wikipedia.org/wiki/Win32%E6%8E%A7%E5%88%B6%E5%8F%B0)
[^2]: 注意“控制台”与“控制台应用程序”的区别，前者指 ConHost 宿主程序，
      后者是运行在 ConHost 下的应用，如 cmd.exe/powershell.exe
