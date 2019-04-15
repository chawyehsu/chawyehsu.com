(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{57:function(t,_,v){"use strict";v.r(_);var o=v(0),e=function(t){var _={attributes:{slug:"understanding-windows-console-host-settings",layout:"post",title:"彻底搞懂 Windows 控制台的设置",keywords:"Windows控制台,ConHost.exe,Windows控制台设置,Windows10控制台",description:"Windows Console Host（即 conhost.exe）中的设置（如命令行字体等）可能有点 难以理解，主要是因为在过去几十年中这个设置系统不断发展。根据 ConHost 如何 被调用，这些设置项会存储在不同的位置。",date:"2019-02-18 22:02:03",updated:"2019-03-06 23:15:20",cover:"/uploads/2019/02/20190218005.png",excerpt:'<p>Windows Console Host（即 <code v-pre="">conhost.exe</code>，下称“ConHost”<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>）中的设置可能有点难以理解，主要是因为在过去几十年中这个设置系统不断发展。根据 ConHost 如何被调用，这些设置项会存储在不同的位置。</p>\n',createdAt:"2019-02-18T14:02:03.000Z",updatedAt:"2019-03-06T15:15:20.000Z",type:"post",permalink:"/blog/2019/02/understanding-windows-console-host-settings"},contentType:"markdown"},v=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=_}].concat(v);var o=t.options.PageComponent;o&&(t.options.transition=o.transition),void 0===t.options.transition&&(t.options.transition=_.attributes.transition),t.options.name="page-wrapper-"+_.attributes.slug.replace(/[^0-9a-z\-]/i,"-")},s=Object(o.a)({},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("layout-manager",{attrs:{page:t.$page}},[v("p",[t._v("Windows Console Host（即 "),v("code",{pre:!0},[t._v("conhost.exe")]),t._v("，下称“ConHost”"),v("sup",{staticClass:"footnote-ref"},[v("a",{attrs:{href:"#fn1",id:"fnref1"}},[t._v("[1]")])]),t._v("）中的设置可能有点难以理解，主要是因为在过去几十年中这个设置系统不断发展。根据 ConHost 如何被调用，这些设置项会存储在不同的位置。")]),t._v(" "),v("figure",{attrs:{"data-type":"image"}},[v("img",{attrs:{src:"data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=",alt:"控制台设置","data-src":"/uploads/2019/02/20190218001.png"}}),v("figcaption",[t._v("控制台设置")])]),t._v(" "),v("h2",{attrs:{id:"%E8%AE%BE%E7%BD%AE%E5%8A%A0%E8%BD%BD%E7%9A%84%E5%B1%82%E7%BA%A7"}},[t._v("设置加载的层级")]),t._v(" "),v("p",[t._v("决定一个控制台设置的加载与存储是基于以下层级进行的：")]),t._v(" "),v("ol",[v("li",[t._v("写死在 conhostv2.dll 里面的设置")]),t._v(" "),v("li",[t._v("用户定义的控制台默认设置，存储在注册表 "),v("code",{pre:!0},[t._v("HKCU\\Console")]),t._v(" 中")]),t._v(" "),v("li",[t._v("每个控制台应用程序"),v("sup",{staticClass:"footnote-ref"},[v("a",{attrs:{href:"#fn2",id:"fnref2"}},[t._v("[2]")])]),t._v("单独的设置，存储在注册表 "),v("code",{pre:!0},[t._v("HKCU\\Console\\<sub-key>")]),t._v(" 中，其中 "),v("code",{pre:!0},[t._v("sub-key")]),t._v(" 使用以下两种值中的一种：\n"),v("ul",[v("li",[t._v("控制台应用程序的文件路径（其中的 "),v("code",{pre:!0},[t._v("\\")]),t._v(" 会替换成 "),v("code",{pre:!0},[t._v("_")]),t._v("）")]),t._v(" "),v("li",[t._v("控制台应用程序的标题")])])]),t._v(" "),v("li",[t._v("Windows 快捷方式（.lnk）中的设置")])]),t._v(" "),v("figure",{attrs:{"data-type":"image"}},[v("img",{attrs:{src:"data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=",alt:"注册表中的控制台设置键值","data-src":"/uploads/2019/02/20190218003.png"}}),v("figcaption",[t._v("注册表中的控制台设置键值")])]),t._v(" "),v("p",[t._v("当一个控制台应用程序被启动后，ConHost 会依据加载情况决定使用哪些设置，同时会按照前述的层级先后对一些进行覆盖。每一个设置项将取其最后加载的值，也就是说在第 4 级（Windows 快捷方式）中的值会覆盖掉第 2 级（用户定义的默认设置）中的值。")]),t._v(" "),v("p",[t._v("这样一个层级设计解释了为什么在每个控制台实例窗口的标题菜单中，都会有一个“默认值”\n选项以及一个“属性”选项。")]),t._v(" "),v("figure",{attrs:{"data-type":"image"}},[v("img",{attrs:{src:"data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=",alt:"控制台窗口标题菜单","data-src":"/uploads/2019/02/20190218002.png"}}),v("figcaption",[t._v("控制台窗口标题菜单")])]),t._v(" "),v("p",[t._v("修改“默认值”时，改动会存储到注册表 "),v("code",{pre:!0},[t._v("HKCU\\Console")]),t._v(" 中，写入用户定义默认设置（即前述层级中的第 2 级）。")]),t._v(" "),v("p",[t._v("修改“属性”时，改动会存储到注册表中的控制台应用程序单独设置或者 Windows 快捷方式中：")]),t._v(" "),v("ul",[v("li",[t._v("如果这个控制台应用程序是被直接（比如是从 Win+R，Windows 运行对话中）启动的，则改动会存储到前述的控制台应用程序单独存储位置（层级中的第 3 级）中。")]),t._v(" "),v("li",[t._v("如果这个控制台应用程序是通过 Windows 快捷方式被启动的，则改动会直接存储到这个快捷方式 .lnk 文件中（层级中的第 4 级）。你可以右键这个控制台应用程序的快捷方式，选择“属性”查看其设置。")])]),t._v(" "),v("figure",{attrs:{"data-type":"image"}},[v("img",{attrs:{src:"data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=",alt:"快捷方式中的设置","data-src":"/uploads/2019/02/20190218004.png"}}),v("figcaption",[t._v("快捷方式中的设置")])]),t._v(" "),v("p",[t._v("当一个控制台应用程序被启动后，ConHost 会根据前述的层级，从第 1 级写死的默认设置开始覆盖设置，最后确定使用哪些设置。这意味着在 Windows 快捷方式中的设置会覆盖掉注册表中的控制台应用程序单独设置以及默认设置。")]),t._v(" "),v("p",[t._v("值得注意的是在注册表中的设置是“稀疏”的，意味着如果某个设置项为空，则不会修改正在使用的值。这允许用户在所有控制台应用程序之间共享部分设置项的同时指定其它一些特定设置项。")]),t._v(" "),v("p",[t._v("而快捷方式文件则会将每个设置项都存储其中，不管是否有默认设置。这些设置会以不透明的数据块存储在快捷方式中。")]),t._v(" "),v("p",[t._v("下面是 Windows 控制台的设置列表，包含了简短的描述以介绍其作用。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("设置项名字")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("FontSize")]),t._v(" "),v("td",[t._v("Coordinate (REG_DWORD)")]),t._v(" "),v("td",[t._v("字体像素大小")])]),t._v(" "),v("tr",[v("td",[t._v("FontFamily")]),t._v(" "),v("td",[t._v("REG_DWORD")]),t._v(" "),v("td",[t._v("GDI 字体族")])]),t._v(" "),v("tr",[v("td",[t._v("ScreenBufferSize")]),t._v(" "),v("td",[t._v("Coordinate (REG_DWORD)")]),t._v(" "),v("td",[t._v("屏幕缓冲区大小，宽x高个字符")])]),t._v(" "),v("tr",[v("td",[t._v("CursorSize")]),t._v(" "),v("td",[t._v("REG_DWORD")]),t._v(" "),v("td",[t._v("光标大小")])]),t._v(" "),v("tr",[v("td",[t._v("WindowSize")]),t._v(" "),v("td",[t._v("Coordinate (REG_DWORD)")]),t._v(" "),v("td",[t._v("窗口大小，宽x高个字符")])]),t._v(" "),v("tr",[v("td",[t._v("WindowPosition")]),t._v(" "),v("td",[t._v("Coordinate (REG_DWORD)")]),t._v(" "),v("td",[t._v("窗口位置，宽x高个像素（如果没有设置则进行自动定位）")])]),t._v(" "),v("tr",[v("td",[t._v("WindowAlpha")]),t._v(" "),v("td",[t._v("REG_DWORD")]),t._v(" "),v("td",[t._v("窗口透明度（取值范围：0x4D-0xFF）")])]),t._v(" "),v("tr",[v("td",[t._v("ScreenColors")]),t._v(" "),v("td",[t._v("REG_DWORD")]),t._v(" "),v("td",[t._v("前景色与背景色")])]),t._v(" "),v("tr",[v("td",[t._v("PopupColors")]),t._v(" "),v("td",[t._v("REG_DWORD")]),t._v(" "),v("td",[t._v("显示弹窗（CMD.exe 按 F2）时的前景色与背景色")])]),t._v(" "),v("tr",[v("td",[t._v("QuickEdit")]),t._v(" "),v("td",[t._v("REG_DWORD")]),t._v(" "),v("td",[t._v("快速编辑模式是否开启")])]),t._v(" "),v("tr",[v("td",[t._v("FaceName")]),t._v(" "),v("td",[t._v("REG_SZ")]),t._v(" "),v("td",[t._v("字体名字 (默认使用 "),v("code",{pre:!0},[t._v("__DefaultTTFont__")]),t._v("，根据你的代码页 CodePage 选择最合适的字体）")])]),t._v(" "),v("tr",[v("td",[t._v("FontWeight")]),t._v(" "),v("td",[t._v("REG_DWORD")]),t._v(" "),v("td",[t._v("GDI 字重")])]),t._v(" "),v("tr",[v("td",[t._v("InsertMode")]),t._v(" "),v("td",[t._v("REG_DWORD")]),t._v(" "),v("td",[t._v("插入模式是否开启")])]),t._v(" "),v("tr",[v("td",[t._v("HistoryBufferSize")]),t._v(" "),v("td",[t._v("REG_DWORD")]),t._v(" "),v("td",[t._v("命令记录缓冲区大小")])]),t._v(" "),v("tr",[v("td",[t._v("NumberOfHistoryBuffers")]),t._v(" "),v("td",[t._v("REG_DWORD")]),t._v(" "),v("td",[t._v("命令记录缓冲区数量")])]),t._v(" "),v("tr",[v("td",[t._v("HistoryNoDup")]),t._v(" "),v("td",[t._v("REG_DWORD")]),t._v(" "),v("td",[t._v("是否丢弃旧的副本")])]),t._v(" "),v("tr",[v("td",[t._v("ColorTable%%")]),t._v(" "),v("td",[t._v("REG_DWORD")]),t._v(" "),v("td",[t._v("16 色的调色盘中每个颜色的 RGB 值")])]),t._v(" "),v("tr",[v("td",[t._v("ExtendedEditKey")]),t._v(" "),v("td",[t._v("REG_DWORD")]),t._v(" "),v("td",[t._v("是否启用扩展的文本选择键")])]),t._v(" "),v("tr",[v("td",[t._v("WordDelimiters")]),t._v(" "),v("td",[t._v("REG_SZ")]),t._v(" "),v("td",[t._v("分词符列表（例："),v("code",{pre:!0},[t._v("' .-/\\=|,()[]{}'")]),t._v("）")])]),t._v(" "),v("tr",[v("td",[t._v("TrimLeadingZeros")]),t._v(" "),v("td",[t._v("REG_DWORD")]),t._v(" "),v("td",[t._v("选取复制文字时是否删除首部零宽字符（使用 "),v("code",{pre:!0},[t._v("00000001")]),t._v(" 表示 "),v("code",{pre:!0},[t._v("1")]),t._v("）")])]),t._v(" "),v("tr",[v("td",[t._v("EnableColorSelection")]),t._v(" "),v("td",[t._v("REG_DWORD")]),t._v(" "),v("td",[t._v("选择时是否同时复制颜色")])]),t._v(" "),v("tr",[v("td",[t._v("ScrollScale")]),t._v(" "),v("td",[t._v("REG_DWORD")]),t._v(" "),v("td",[t._v("使用滚轮滚动时一次滚动多少行")])]),t._v(" "),v("tr",[v("td",[t._v("CodePage")]),t._v(" "),v("td",[t._v("REG_DWORD")]),t._v(" "),v("td",[t._v("代码页 CodePage")])]),t._v(" "),v("tr",[v("td",[t._v("ForceV2")]),t._v(" "),v("td",[t._v("REG_DWORD")]),t._v(" "),v("td",[t._v("是否使用新版控制台")])]),t._v(" "),v("tr",[v("td",[t._v("LineSelection*")]),t._v(" "),v("td",[t._v("REG_DWORD")]),t._v(" "),v("td",[t._v("是否启用对选定内容自动换行")])]),t._v(" "),v("tr",[v("td",[t._v("FilterOnPaste*")]),t._v(" "),v("td",[t._v("REG_DWORD")]),t._v(" "),v("td",[t._v("是否在粘贴时筛选剪贴板内容（如：将弯引号替换为直引号）")])]),t._v(" "),v("tr",[v("td",[t._v("LineWrap")]),t._v(" "),v("td",[t._v("REG_DWORD")]),t._v(" "),v("td",[t._v("是否在调整窗口大小时对输出的文本换行")])]),t._v(" "),v("tr",[v("td",[t._v("CtrlKeyShortcutsDisabled")]),t._v(" "),v("td",[t._v("REG_DWORD")]),t._v(" "),v("td",[t._v("是否启用 Ctrl 键快捷方式")])]),t._v(" "),v("tr",[v("td",[t._v("AllowAltF4Close")]),t._v(" "),v("td",[t._v("REG_DWORD")]),t._v(" "),v("td",[t._v("是否禁用 Alt-F4 热键")])]),t._v(" "),v("tr",[v("td",[t._v("VirtualTerminalLevel")]),t._v(" "),v("td",[t._v("REG_DWORD")]),t._v(" "),v("td",[t._v("控制台 VT 支持级别")])])])]),t._v(" "),v("p",[t._v("*仅在新版控制台中有效")]),t._v(" "),v("h2",{attrs:{id:"%E5%B7%B2%E7%9F%A5%E9%97%AE%E9%A2%98"}},[t._v("已知问题")]),t._v(" "),v("p",[t._v("与大多数复杂的事物一样，有一些问题需要注意：")]),t._v(" "),v("h3",{attrs:{id:"%E7%B3%BB%E7%BB%9F%E6%9B%B4%E6%96%B0%E4%BC%9A%E5%AF%BC%E8%87%B4%E8%AE%BE%E7%BD%AE%E8%A2%AB%E9%87%8D%E7%BD%AE"}},[t._v("系统更新会导致设置被重置")]),t._v(" "),v("p",[t._v("每当你升级到新版本的 Windows 时，系统级的快捷方式以及“「开始」菜单”中的设置会被重置为默认值。这意味着如果你升级了系统，你自定义的字体、颜色等设置将会全部重置为\nWindows 的默认值。")]),t._v(" "),v("h2",{attrs:{id:"%E5%90%8E%E8%AE%B0"}},[t._v("后记")]),t._v(" "),v("p",[t._v("我一直在使用 "),v("a",{attrs:{href:"https://github.com/lukesampson/concfg",target:"_blank",rel:"noopener noreferrer"}},[t._v("concfg")]),t._v(" 作为我管理我的\nWindows 控制台设置的工具，近期成为了该项目的协作者进行项目维护，便开始稍微深入地了解 Windows 控制台相关知识。本文是微软官方 Windows Console & WSL 团队的一篇博文的译文，原文见 "),v("a",{attrs:{href:"https://blogs.msdn.microsoft.com/commandline/2017/06/20/understanding-windows-console-host-settings/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Understanding Windows Console Host Settings")]),t._v("，有些许删改。")]),t._v(" "),v("hr",{staticClass:"footnotes-sep"}),t._v(" "),v("section",{staticClass:"footnotes"},[v("ol",{staticClass:"footnotes-list"},[v("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[v("p",[t._v("在 Wikipedia 上也称 "),v("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Win32%E6%8E%A7%E5%88%B6%E5%8F%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Win32 控制台")]),t._v(" "),v("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[t._v("↩︎")])])]),t._v(" "),v("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[v("p",[t._v("注意“控制台”与“控制台应用程序”的区别，前者指 ConHost 宿主程序，后者是运行在 ConHost 下的应用，如 cmd.exe/powershell.exe "),v("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[t._v("↩︎")])])])])])])},[],!1,null,null,null);"function"==typeof e&&e(s);_.default=s.exports}}]);