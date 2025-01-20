(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3584],{23940:(e,t,o)=>{e.exports={srcSet:o.p+"images/20230810002-7fd67b31.webp 1187w,"+o.p+"images/20230810002-d7e8d7e0.webp 720w,"+o.p+"images/20230810002-3b91a27b.webp 480w",images:[{path:o.p+"images/20230810002-7fd67b31.webp",width:1187,height:877},{path:o.p+"images/20230810002-d7e8d7e0.webp",width:720,height:532},{path:o.p+"images/20230810002-3b91a27b.webp",width:480,height:355}],src:o.p+"images/20230810002-7fd67b31.webp",toString:function(){return o.p+"images/20230810002-7fd67b31.webp"},placeholder:"data:image/webp;base64,UklGRvQAAABXRUJQVlA4IOgAAADwBQCdASooAB4APlEmkEYjoiGhJWgAcAoJZwC+Sy6To4QGHDazRwhUvsiTvj4awsREPX2SIPsuAAD++pNid1WkcNdWSwzYebK82kYuH33T/JOyEU7FaIEfzXe/iUkNb3Z+jdi12tQYLS6Sc39GMpwRUQsAY6hkSzzTYhT4NCgBcOSDHHAC6U09F8ug0tvsW6oBf1LBaSlxvxIVoLSzlKSGGlsPt4pH5RSkwo+X4DlQ1ukqdk8+9YyTNDi6rHildGIPNHNmK33Aa/rgK3LG5V8jWD6JYtQGjILsL5wbONLr0/fr4cOhgAAA",width:1187,height:877}},69736:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>n});const a=function(e){var t,o,a,s,n,r,p=(o=void 0,a="2023-08-10 22:31:43",s="这是什么",n="开始尝试",r="为什么做",(t={}).type="post",t.internal=o,t.contentType="markdown",t.slug="reimplementing-scoop-in-rust",t.content=o,t.createdAt=new Date(1691677903e3),t.updatedAt=new Date(1691677903e3),t.layout="post",t.title="用 Rust 写的 Scoop 再实现",t.keywords="scoop,rust,package manager,command line,windows",t.description="Hok 是一个用 Rust 写的 Scoop 再实现，提供与 Scoop 类似的 CLI 接口，实现 Scoop 已有的功能，如应用检索、安装卸载、列表与状态、桶管理等等",t.date=a,t.updated=a,t.featured=!0,t.comments=!1,t.markdownHeadings=[{text:"前言",slug:"前言",level:2},{text:s,slug:s,level:2},{text:n,slug:n,level:2},{text:"hok bucket",slug:"hok-bucket",level:3},{text:"hok cache",slug:"hok-cache",level:3},{text:"hok cat",slug:"hok-cat",level:3},{text:"hok cleanup",slug:"hok-cleanup",level:3},{text:"hok config",slug:"hok-config",level:3},{text:"hok hold/unhold",slug:"hok-holdunhold",level:3},{text:"hok home",slug:"hok-home",level:3},{text:"hok info",slug:"hok-info",level:3},{text:"hok install",slug:"hok-install",level:3},{text:"hok list",slug:"hok-list",level:3},{text:"hok search",slug:"hok-search",level:3},{text:"hok uninstall",slug:"hok-uninstall",level:3},{text:"hok update",slug:"hok-update",level:3},{text:"hok upgrade",slug:"hok-upgrade",level:3},{text:r,slug:r,level:2},{text:"为什么不直接贡献 Scoop",slug:"为什么不直接贡献-scoop",level:3},{text:"为什么是 Rust",slug:"为什么是-rust",level:3},{text:"libscoop 的 roadmap",slug:"libscoop-的-roadmap",level:2},{text:"结语",slug:"结语",level:2}],t.excerpt='<p>开门见山，先放上项目地址：<a href="https://github.com/chawyehsu/hok">https://github.com/chawyehsu/hok</a></p>\n<h2 id="前言">前言</h2>\n<p>了解 Scoop 或者已经是其用户的朋友从标题已经知道本文主题，大概点了上面的链接跳走了。没点的只好留下来，听我先给不了解的人稍微介绍下 Scoop。<a href="https://scoop.sh">Scoop</a> 是一个在 Windows 下的工具，通过一套规则来描述应用软件<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>，然后提供命令行的方式来让用户相对方便地安装和管理使用的软件。它最初的开发受到过 Homebrew 的启发，虽然随着发展二者已大相径庭，\nScoop 仍然在其 README 中留着对 Homebrew 的 Credit<sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup>。</p>\n<p>一直以来 Scoop 都没有标称自己是一个包管理器<sup class="footnote-ref"><a href="#fn3" id="fnref3">[3]</a></sup>，但是它的主要功能和主流包管理器的功能又是有几分相似，所以一些用户愿意称其为 Windows 下的包管理器。相应的，也有（比如偏好\nMSYS2 的）用户批评过 Scoop 根本没有提供包管理器「标配」的软件构建环境及 build from\nsource 的能力，到底只不过是一个「软件安装器」。我作为使用 Scoop 已经有 8、9 年，于 <a href="/blog/use-scoop-to-enhance-windows-powershell">2015</a>、<a href="/blog/talk-about-scoop-the-package-manager-for-windows-again">2018</a> 两年先后为其写过两篇「荐」的用户，以为 Scoop 的这种形式更多是\nWindows 软件分发现状下的一个些许无奈的折中选择，只能说是有人喜有人愁。强如微软官方出品 Windows Package Manager —— Winget 也还是没有走出这个窠臼。AppX/MSIX 的打包分发方式不是所有应用开发者都接受并统一采用，曾几何时我从 UWP 上看到的一点点软件分发整合的希望也在其放宽 Win32 API 使用后慢慢消去（虽说就开发者角度来说这是好事）。所以\nScoop 在某些场景下仍有它的一席之地，放到末端用户就是各取所需。</p>\n<hr>\n<h2 id="这是什么">这是什么</h2>\n<p>接下来谈论的是本文的主角 <a href="https://github.com/chawyehsu/hok">Hok</a>。它是一个用 Rust 写的 Scoop 再实现，提供与 Scoop\n类似的 CLI 接口，目标是实现 Scoop 已有的功能，如应用的检索、安装卸载、列表与状态、桶管理等等。实际上 Hok 只是一个 CLI 前端，其背后的 <a href="https://crates.io/crates/libscoop">libscoop</a> 才是这个再实现的核心。后文会再提到 libscoop。</p>\n',t.permalink="/blog/reimplementing-scoop-in-rust",t.assets={},t.attributes=t,t),c=e.options.beforeCreate||[];e.options.beforeCreate=[function(){this.$page=p}].concat(c),["layout","transition"].forEach((function(t){var o=e.options.PageComponent;o&&(e.options[t]=o[t]),void 0===e.options[t]&&(e.options[t]=p[t])})),p.slug&&(e.options.name="page-wrapper-"+p.slug.replace(/[^0-9a-z\-]/gi,"-"))};var s=(0,o(14486).A)({},(function(){var e=this,t=e._self._c;return t("layout-manager",[t("p",[e._v("开门见山，先放上项目地址："),t("saber-link",{attrs:{to:"https://github.com/chawyehsu/hok"}},[e._v("https://github.com/chawyehsu/hok")])],1),e._v(" "),t("h2",{attrs:{id:"前言"}},[e._v("前言")]),e._v(" "),t("p",[e._v("了解 Scoop 或者已经是其用户的朋友从标题已经知道本文主题，大概点了上面的链接跳走了。没点的只好留下来，听我先给不了解的人稍微介绍下 Scoop。"),t("saber-link",{attrs:{to:"https://scoop.sh"}},[e._v("Scoop")]),e._v(" 是一个在 Windows 下的工具，通过一套规则来描述应用软件"),t("sup",{staticClass:"footnote-ref"},[t("saber-link",{attrs:{id:"fnref1",to:"#fn1"}},[e._v("[1]")])],1),e._v("，然后提供命令行的方式来让用户相对方便地安装和管理使用的软件。它最初的开发受到过 Homebrew 的启发，虽然随着发展二者已大相径庭，\nScoop 仍然在其 README 中留着对 Homebrew 的 Credit"),t("sup",{staticClass:"footnote-ref"},[t("saber-link",{attrs:{id:"fnref2",to:"#fn2"}},[e._v("[2]")])],1),e._v("。")],1),e._v(" "),t("p",[e._v("一直以来 Scoop 都没有标称自己是一个包管理器"),t("sup",{staticClass:"footnote-ref"},[t("saber-link",{attrs:{id:"fnref3",to:"#fn3"}},[e._v("[3]")])],1),e._v("，但是它的主要功能和主流包管理器的功能又是有几分相似，所以一些用户愿意称其为 Windows 下的包管理器。相应的，也有（比如偏好\nMSYS2 的）用户批评过 Scoop 根本没有提供包管理器「标配」的软件构建环境及 build from\nsource 的能力，到底只不过是一个「软件安装器」。我作为使用 Scoop 已经有 8、9 年，于 "),t("saber-link",{attrs:{to:"/blog/use-scoop-to-enhance-windows-powershell"}},[e._v("2015")]),e._v("、"),t("saber-link",{attrs:{to:"/blog/talk-about-scoop-the-package-manager-for-windows-again"}},[e._v("2018")]),e._v(" 两年先后为其写过两篇「荐」的用户，以为 Scoop 的这种形式更多是\nWindows 软件分发现状下的一个些许无奈的折中选择，只能说是有人喜有人愁。强如微软官方出品 Windows Package Manager —— Winget 也还是没有走出这个窠臼。AppX/MSIX 的打包分发方式不是所有应用开发者都接受并统一采用，曾几何时我从 UWP 上看到的一点点软件分发整合的希望也在其放宽 Win32 API 使用后慢慢消去（虽说就开发者角度来说这是好事）。所以\nScoop 在某些场景下仍有它的一席之地，放到末端用户就是各取所需。")],1),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"这是什么"}},[e._v("这是什么")]),e._v(" "),t("p",[e._v("接下来谈论的是本文的主角 "),t("saber-link",{attrs:{to:"https://github.com/chawyehsu/hok"}},[e._v("Hok")]),e._v("。它是一个用 Rust 写的 Scoop 再实现，提供与 Scoop\n类似的 CLI 接口，目标是实现 Scoop 已有的功能，如应用的检索、安装卸载、列表与状态、桶管理等等。实际上 Hok 只是一个 CLI 前端，其背后的 "),t("saber-link",{attrs:{to:"https://crates.io/crates/libscoop"}},[e._v("libscoop")]),e._v(" 才是这个再实现的核心。后文会再提到 libscoop。")],1),e._v(" "),t("p",[e._v("Scoop 用户在饱受着 "),t("code",{pre:!0},[e._v("scoop search")]),e._v(" 极度缓慢的折磨"),t("sup",{staticClass:"footnote-ref"},[t("saber-link",{attrs:{id:"fnref4",to:"#fn4"}},[e._v("[4]")])],1),e._v("，带防火墙 debuff 的用户更是如此。早期的 Scoop 还不支持远程搜索"),t("sup",{staticClass:"footnote-ref"},[t("saber-link",{attrs:{id:"fnref5",to:"#fn5"}},[e._v("[5]")])],1),e._v("，那时候搜索速度其实是很可以的。为了解决搜索体验问题，社区里出现了各种各样的解决方案，比如 Go 实现的 scoop-search 是社区里很流行的一个"),t("sup",{staticClass:"footnote-ref"},[t("saber-link",{attrs:{id:"fnref6",to:"#fn6"}},[e._v("[6]")])],1),e._v("，也有其它如 Python + SQLite 的实现，以及依托 Azure Search 实现的 ScoopSearch（后来成为了 Scoop 官网上提供的在线搜索"),t("sup",{staticClass:"footnote-ref"},[t("saber-link",{attrs:{id:"fnref7",to:"#fn7"}},[e._v("[7]")])],1),e._v("）等等。")]),e._v(" "),t("p",[e._v("然而社区里这些方案，都不约而同地只专注于解决搜索问题，并没有在其它方面做更多的尝试。也许是搜索问题太过于「碍眼」，导致其它如 "),t("code",{pre:!0},[e._v("scoop list")]),e._v("、"),t("code",{pre:!0},[e._v("scoop status")]),e._v(" 及 "),t("code",{pre:!0},[e._v("scoop update")]),e._v("\n等命令的效率问题不入法眼。而 Hok 便是在解决了搜索问题的基础上，更进一步去尝试解决这些也让我难受的点，最终成为一个奔着完整实现而进行的项目。")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"开始尝试"}},[e._v("开始尝试")]),e._v(" "),t("p",[e._v("假设你已经有在使用的 Scoop 环境，那么你可以使用一下命令来安装体验 Hok：")]),e._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"powershell"}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-powershell"}},[t("code",{pre:!0,attrs:{class:"language-powershell"}},[e._v("scoop bucket add dorado https://github.com/chawyehsu/dorado\nscoop install dorado/hok")])])]),t("p",[e._v("dorado 是我维护了许久的一个桶，里面有不少我在用的或者接收 Pull Request 进来的软件。\nHok 是 native 的，可以脱离 Scoop 运行，所以其实也可以从 GitHub Release 页面下载二进制文件直接使用。但是因为 Scoop 的一些功能在 Hok 上还未被实现，所以单独用 Hok\n的话会缺失关键功能，建议还是附在 Scoop 上。")]),e._v(" "),t("p",[e._v("安装完成后，可以使用 "),t("code",{pre:!0},[e._v("hok help")]),e._v(" 先查看 Hok 的帮助信息，了解下 Hok 的命令行接口：")]),e._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[t("code",{pre:!0,attrs:{class:"language-text"}},[e._v("$ hok help\nHok is a CLI implementation of Scoop in Rust\n\nUsage: hok.exe <COMMAND>\n\nCommands:\n  bucket     Manage manifest buckets\n  cache      Package cache management\n  cat        Inspect the manifest of a package\n  cleanup    Cleanup apps by removing old versions\n  config     Configuration management\n  hold       Hold package(s) to disable changes\n  home       Browse the homepage of a package\n  info       Show package(s) basic information\n  install    Install package(s)\n  list       List installed package(s)\n  search     Search available package(s)\n  unhold     Unhold package(s) to enable changes\n  uninstall  Uninstall package(s)\n  update     Fetch and update subscribed buckets\n  upgrade    Upgrade installed package(s)\n  help       Print this message or the help of the given subcommand(s)\n\nOptions:\n  -h, --help     Print help\n  -V, --version  Print version\n\nType 'hok help <command>' to get help for a specific command.")])])]),t("p",[e._v("为了照顾一些个使用习惯，Hok 的命令行接口被设计得与 Scoop 的接口有一定的相似性，比如 "),t("code",{pre:!0},[e._v("hok bucket")]),e._v("、"),t("code",{pre:!0},[e._v("hok home")]),e._v("、"),t("code",{pre:!0},[e._v("hok hold/unhold")]),e._v(" 等。但是由于 Hok 背后的 libscoop\n在内部实现上与 Scoop 不尽相同（主要是多了一些我个人的思考及针对我个人使用习惯的调整），所以体现到 Hok 的命令行接口上也有了一些变化。接下来我会逐一对目前 Hok 提供的各个命令做具体的介绍。这部分也许该写成使用文档放到项目里，但目前就先放在这吧。")]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"hok-bucket"}},[e._v("hok bucket")]),e._v(" "),t("p",[e._v("桶管理命令。这个子命令与 Scoop 的 "),t("code",{pre:!0},[e._v("scoop bucket")]),e._v(" 子命令几乎一致，唯一的一个不同是\nScoop 使用 "),t("code",{pre:!0},[e._v("scoop bucket known")]),e._v(" 来列出内置的（官方）桶"),t("sup",{staticClass:"footnote-ref"},[t("saber-link",{attrs:{id:"fnref8",to:"#fn8"}},[e._v("[8]")])],1),e._v("，而 Hok 使用 "),t("code",{pre:!0},[e._v("hok bucket list -k|--known")]),e._v("\n来做同样的事情。")]),e._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[t("code",{pre:!0,attrs:{class:"language-text"}},[e._v("$ hok bucket --help\nManage manifest buckets\n\nUsage: hok.exe bucket [COMMAND]\n\nCommands:\n  add     Add a bucket\n  list    List buckets\n  remove  Remove bucket(s)\n  help    Print this message or the help of the given subcommand(s)\n\nOptions:\n  -h, --help  Print help")])])]),t("h3",{attrs:{id:"hok-cache"}},[e._v("hok cache")]),e._v(" "),t("p",[e._v("下载缓存管理，对应 "),t("code",{pre:!0},[e._v("scoop cache")]),e._v("。Scoop 使用 "),t("code",{pre:!0},[e._v("scoop cache [show]")]),e._v(" 列出下载缓存列表，\nHok 使用 "),t("code",{pre:!0},[e._v("hok cache list [query]")]),e._v("，其中 "),t("code",{pre:!0},[e._v("query")]),e._v(" 可以作为过滤条件，只列出包含 "),t("code",{pre:!0},[e._v("query")]),e._v("\n的缓存。")]),e._v(" "),t("p",[e._v("Scoop 使用 "),t("code",{pre:!0},[e._v("scoop cache rm <app|*>")]),e._v(" 来删除缓存，类似的 Hok 使用 "),t("code",{pre:!0},[e._v("hok cache remove <query>")]),e._v("\n来删除缓存，其中 "),t("code",{pre:!0},[e._v("query")]),e._v(" 同样支持通配符 "),t("code",{pre:!0},[e._v("*")]),e._v(" 删除全部缓存。")]),e._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[t("code",{pre:!0,attrs:{class:"language-text"}},[e._v("$ hok cache --help\nPackage cache management\n\nUsage: hok.exe cache [COMMAND]\n\nCommands:\n  list    List download caches\n  remove  Remove download caches\n  help    Print this message or the help of the given subcommand(s)\n\nOptions:\n  -h, --help  Print help")])])]),t("h3",{attrs:{id:"hok-cat"}},[e._v("hok cat")]),e._v(" "),t("p",[e._v("全文输出包的 manifest 详情。"),t("code",{pre:!0},[e._v("hok cat")]),e._v(" 与 "),t("code",{pre:!0},[e._v("scoop cat")]),e._v(" 的用法完全一致，但是 "),t("code",{pre:!0},[e._v("hok cat")]),e._v("\n多了对同名包的选择功能，如果你本地的不同桶之间存在同名的包的话，"),t("code",{pre:!0},[e._v("scoop cat <app>")]),e._v("会自动选择第一个找到的包，而 "),t("code",{pre:!0},[e._v("hok cat <app>")]),e._v(" 则会列出所有同名包，让你自己选择。")]),e._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[t("code",{pre:!0,attrs:{class:"language-text"}},[e._v("$ hok cat --help\n❯ hok cat\nInspect the manifest of a package\n\nUsage: hok.exe cat <package>\n\nArguments:\n  <package>  Name of the package to be inspected\n\nOptions:\n  -h, --help  Print help\n\n$ hok cat git\nFound multiple packages named 'git':\n\n  0. dorado/git (https://gitforwindows.org)\n  1. main/git (https://gitforwindows.org)\n\nPlease select one, enter the number to continue: 0")])])]),t("p",[e._v("同名包的选择功能在 "),t("code",{pre:!0},[e._v("hok home")]),e._v(" 等其它命令中也同样存在。")]),e._v(" "),t("h3",{attrs:{id:"hok-cleanup"}},[e._v("hok cleanup")]),e._v(" "),t("p",[e._v("清理命令，对应 "),t("code",{pre:!0},[e._v("scoop cleanup")]),e._v("。Hok 暂未实现 cleanup 功能，所以在这里它只是个 placeholder。")]),e._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[t("code",{pre:!0,attrs:{class:"language-text"}},[e._v("$ hok cleanup --help\nCleanup apps by removing old versions\n\nUsage: hok.exe cleanup [OPTIONS] [app]...\n\nArguments:\n  [app]...  Given named app(s) to be cleaned up\n\nOptions:\n  -k, --cache  Remove download cache simultaneously\n  -h, --help   Print help")])])]),t("h3",{attrs:{id:"hok-config"}},[e._v("hok config")]),e._v(" "),t("p",[e._v("配置管理命令。Scoop 使用 "),t("code",{pre:!0},[e._v("scoop config")]),e._v(" 展示配置，Hok 使用 "),t("code",{pre:!0},[e._v("hok config list")]),e._v(" 以\nJSON 格式展示。Scoop 使用 "),t("code",{pre:!0},[e._v("scoop config <key> <value>")]),e._v(" 设置配置，Hok 使用\n"),t("code",{pre:!0},[e._v("hok config set <key> <value>")]),e._v(" 来设置配置，Scoop 允许给任意 "),t("code",{pre:!0},[e._v("key")]),e._v(" 设置值，而 Hok\n会检查 "),t("code",{pre:!0},[e._v("key")]),e._v(" 是否合法。Scoop 使用 "),t("code",{pre:!0},[e._v("scoop config rm <key>")]),e._v(" 删除配置，Hok 使用\n"),t("code",{pre:!0},[e._v("hok config unset <key>")]),e._v(" 来删除配置。")]),e._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[t("code",{pre:!0,attrs:{class:"language-text"}},[e._v("$ hok config --help\nConfiguration management\n\nUsage: hok.exe config [COMMAND]\n\nCommands:\n  edit   Edit the config file [default editor: notepad]\n  list   List all settings in key-value\n  set    Add a new setting to the config file\n  unset  Remove a setting from config file\n  help   Print this message or the help of the given subcommand(s)\n\nOptions:\n  -h, --help  Print help")])])]),t("p",[e._v("Hok 支持使用 "),t("code",{pre:!0},[e._v("hok config edit")]),e._v(" 命令调用外部编辑器来编辑配置文件。Hok 会使用环境变量\n"),t("code",{pre:!0},[e._v("EDITOR")]),e._v(" 的值作为调用的编辑器，比如设置了 "),t("code",{pre:!0},[e._v("EDITOR=nano")]),e._v("，"),t("code",{pre:!0},[e._v("nano")]),e._v(" 就会被用作打开配置的编辑器。如果没有 "),t("code",{pre:!0},[e._v("EDITOR")]),e._v(" 环境变量，Hok 会使用 "),t("code",{pre:!0},[e._v("notepad")]),e._v(" 来打开配置文件。")]),e._v(" "),t("Photoswipe",{attrs:{auto:""}},[t("figure",{attrs:{"data-type":"image","data-pswp":"true",itemscope:"",itemprop:"associatedMedia",itemtype:"http://schema.org/ImageObject"}},[t("saber-image",{attrs:{src:o(48758),alt:"直接调用 nano 编辑配置文件","data-pswp-title":"直接调用 nano 编辑配置文件",loading:"lazy"}}),t("figcaption",[e._v("直接调用 nano 编辑配置文件")])],1)]),e._v(" "),t("p",[e._v("Hok 完全继承并兼容 Scoop 的配置文件，虽然 Hok 不会去使用其中如 aria2 等的配置项，但是为了兼容性 Hok 支持解析和编辑这些配置。Hok 甚至已经率先支持 portable config\nfile"),t("sup",{staticClass:"footnote-ref"},[t("saber-link",{attrs:{id:"fnref9",to:"#fn9"}},[e._v("[9]")])],1),e._v("。")]),e._v(" "),t("h3",{attrs:{id:"hok-holdunhold"}},[e._v("hok hold/unhold")]),e._v(" "),t("p",[e._v("包锁定/解锁命令，对应 "),t("code",{pre:!0},[e._v("scoop hold/unhold")]),e._v("。Hok 的 "),t("code",{pre:!0},[e._v("hold")]),e._v(" 和 "),t("code",{pre:!0},[e._v("unhold")]),e._v(" 命令均与\nScoop 对应命令的用法一致。")]),e._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[t("code",{pre:!0,attrs:{class:"language-text"}},[e._v("$ hok hold --help\nHold package(s) to disable changes\n\nUsage: hok.exe hold <package>...\n\nArguments:\n  <package>...  The package(s) to be held\n\nOptions:\n  -h, --help  Print help\n\n$ hok unhold --help\nUnhold package(s) to enable changes\n\nUsage: hok.exe unhold <package>...\n\nArguments:\n  <package>...  The package(s) to be unheld\n\nOptions:\n  -h, --help  Print help")])])]),t("h3",{attrs:{id:"hok-home"}},[e._v("hok home")]),e._v(" "),t("p",[e._v("打开包主页的命令。Hok 的 "),t("code",{pre:!0},[e._v("home")]),e._v(" 命令与 Scoop 对应命令的用法一致，但是 "),t("code",{pre:!0},[e._v("hok home")]),e._v("\n多了对同名包的选择功能，具体说明见上文 "),t("code",{pre:!0},[e._v("hok cat")]),e._v("。")]),e._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[t("code",{pre:!0,attrs:{class:"language-text"}},[e._v("$ hok home --help\nBrowse the homepage of a package\n\nUsage: hok.exe home <package>\n\nArguments:\n  <package>  The package name\n\nOptions:\n  -h, --help  Print help\n\n$ hok home pixitracker\nFound multiple packages named 'pixitracker':\n\n  0. dorado/pixitracker (https://www.warmplace.ru/soft/pixitracker/)\n  1. extras/pixitracker (https://warmplace.ru/soft/pixitracker/)\n\nPlease select one, enter the number to continue: 1")])])]),t("h3",{attrs:{id:"hok-info"}},[e._v("hok info")]),e._v(" "),t("p",[e._v("包信息命令，对应 "),t("code",{pre:!0},[e._v("scoop info")]),e._v("。Hok 的 "),t("code",{pre:!0},[e._v("info")]),e._v(" 命令与 Scoop 对应命令有所不同，\n"),t("code",{pre:!0},[e._v("scoop info <app>")]),e._v(" 只会精确匹配包名，而 "),t("code",{pre:!0},[e._v("hok info <query>")]),e._v(" 中的 "),t("code",{pre:!0},[e._v("query")]),e._v(" 是一个正则表达式入参，当输入 "),t("code",{pre:!0},[e._v("hok info git")]),e._v(" 时会列出所有包名中包含 "),t("code",{pre:!0},[e._v("git")]),e._v(" 的包的信息。")]),e._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[t("code",{pre:!0,attrs:{class:"language-text"}},[e._v("$ hok info --help\nShow package(s) basic information\n\nUsage: hok.exe info <query>\n\nArguments:\n  <query>  The query string (regex supported)\n\nOptions:\n  -h, --help  Print help")])])]),t("h3",{attrs:{id:"hok-install"}},[e._v("hok install")]),e._v(" "),t("p",[e._v("包安装命令。在对包的安装、更新、卸载操作上，Hok 有着一套相对于 Scoop 改动比较大的设计，这也是 Hok 及其背后的 libscoop 之于 Scoop 区别最大的部分。依托于这部分设计改动，\nHok 得以实现对同名包的选择与替换、锁定包强制更新等功能。")]),e._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[t("code",{pre:!0,attrs:{class:"language-text"}},[e._v("$ hok install --help\nInstall package(s)\n\nUsage: hok.exe install [OPTIONS] <package>...\n\nArguments:\n  <package>...  The package(s) to install\n\nOptions:\n  -d, --download-only   Download package(s) without performing installation\n  -f, --ignore-failure  Ignore failures to ensure a complete transaction\n  -o, --offline         Leverage cache and suppress network access\n  -y, --assume-yes      Assume yes to all prompts and run non-interactively\n  -D, --ignore-cache    Ignore cache and force download\n  -I, --independent     Do not install dependencies (may break packages)\n  -R, --no-replace      Do not replace package(s)\n  -S, --escape-hold     Escape hold to allow changes on held package(s)\n  -U, --no-upgrade      Do not upgrade package(s)\n      --no-hash-check   Skip package integrity check\n  -h, --help            Print help")])])]),t("p",[e._v("但是截至目前 libscoop 在这部分功能的实现上还不完整，所以 Hok 的 "),t("code",{pre:!0},[e._v("install")]),e._v("\n命令也是不完整的，一些参数的功能也还未实现。具体实现到什么程度，可以自行体验或者查看源码和 CHANGELOG。"),t("code",{pre:!0},[e._v("hok install <package>")]),e._v(" 中的 "),t("code",{pre:!0},[e._v("package")]),e._v(" 同样支持 Scoop\n那样的桶前缀指定，比如 "),t("code",{pre:!0},[e._v("dorado/git")]),e._v("。")]),e._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[t("code",{pre:!0,attrs:{class:"language-text"}},[e._v("$ hok install git -DS\nResolving packages...\nFound multiple candidates for package 'git':\n\n  0: dorado/git\n  1: main/git\n\nPlease select one, enter the number to continue: 1\nCalculating download size...\nThe following packages will be REPLACED:\n  doradomain/git\n\nTotal download size: 55 MB\n\nDo you want to continue? [y/N]: n\nNot implemented yet.")])])]),t("h3",{attrs:{id:"hok-list"}},[e._v("hok list")]),e._v(" "),t("p",[e._v("已安装包的列表命令。Hok 的 "),t("code",{pre:!0},[e._v("list")]),e._v(" 命令与 Scoop 对应命令的基础用法一致，同时提供复杂的筛选功能。"),t("code",{pre:!0},[e._v("hok list [query]")]),e._v(" 中的 "),t("code",{pre:!0},[e._v("query")]),e._v(" 是一个正则表达式入参，支持以正则表达式的方式对已安装包的列表进行筛选。同时 "),t("code",{pre:!0},[e._v("query")]),e._v(" 还支持桶前缀指定。结合正则和桶前缀，可以实现诸如 "),t("code",{pre:!0},[e._v("hok list extras/")]),e._v("、"),t("code",{pre:!0},[e._v('hok list "dorado/^[c|g]"')]),e._v("、\n"),t("code",{pre:!0},[e._v("hok list main/git$")]),e._v(" 这样的筛选。Hok 还支持使用 "),t("code",{pre:!0},[e._v("hok list --held")]),e._v(" 查看被锁定的包。")]),e._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[t("code",{pre:!0,attrs:{class:"language-text"}},[e._v("$ hok list --help\nList installed package(s)\n\nUsage: hok.exe list [OPTIONS] [query]...\n\nArguments:\n  [query]...  The query string (regex supported by default)\n\nOptions:\n  -e, --explicit    Turn regex off and use explicit matching\n  -u, --upgradable  List upgradable package(s)\n  -H, --held        List held package(s)\n  -h, --help        Print help")])])]),t("p",[e._v("Hok 将原本属于 "),t("code",{pre:!0},[e._v("scoop status")]),e._v(" 的查看可更新包的功能移到了 "),t("code",{pre:!0},[e._v("hok list")]),e._v(" 中，使用 "),t("code",{pre:!0},[e._v("hok list --upgradable")]),e._v(" 可以查看可更新包的列表。")]),e._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[t("code",{pre:!0,attrs:{class:"language-text"}},[e._v("$ hok list dorado/^g --upgradable\ngit/dorado 2.41.0.windows.1 -> 2.41.0.windows.3 [held]\ngnupg-np/dorado 2.4.2 -> 2.4.3")])])]),t("h3",{attrs:{id:"hok-search"}},[e._v("hok search")]),e._v(" "),t("p",[e._v("包搜索命令。搜索功能可以说是整个 Hok 项目的核心，也是因为 Scoop 的搜索效率问题，才有了 libscoop 和 Hok。Hok 的 "),t("code",{pre:!0},[e._v("search")]),e._v(" 命令与 Scoop 对应命令的不同点在于，\n"),t("code",{pre:!0},[e._v("scoop search")]),e._v(" 会远程搜索那些没有挂载到本地的官方桶，"),t("code",{pre:!0},[e._v("hok search")]),e._v(" 只会搜索本地桶。另外，"),t("code",{pre:!0},[e._v("scoop search")]),e._v(" 强制对包名、包描述以及 shim 均进行匹配，而 "),t("code",{pre:!0},[e._v("hok search")]),e._v("\n默认只对包名进行匹配，提供 "),t("code",{pre:!0},[e._v("--with-description")]),e._v(" 和 "),t("code",{pre:!0},[e._v("--with-binary")]),e._v(" 选项来开关对\nshim 和包描述的匹配。这些调整为的都是最大化搜索效率。")]),e._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[t("code",{pre:!0,attrs:{class:"language-text"}},[e._v("$ hok search --help\nSearch available package(s)\n\nUsage: hok.exe search [OPTIONS] <query>...\n\nArguments:\n  <query>...  The query string (regex supported by default)\n\nOptions:\n  -e, --explicit          Turn regex off and use explicit matching\n  -B, --with-binary       Search through package binaries as well\n  -D, --with-description  Search through package descriptions as well\n  -h, --help              Print help (see more with '--help')")])])]),t("Photoswipe",{attrs:{auto:""}},[t("figure",{attrs:{"data-type":"image","data-pswp":"true",itemscope:"",itemprop:"associatedMedia",itemtype:"http://schema.org/ImageObject"}},[t("saber-image",{attrs:{src:o(23940),alt:"Benchmark of search","data-pswp-title":"Benchmark of search",loading:"lazy"}}),t("figcaption",[e._v("Benchmark of search")])],1)]),e._v(" "),t("p",[e._v("与 "),t("code",{pre:!0},[e._v("hok list")]),e._v(" 一样，"),t("code",{pre:!0},[e._v("hok search <query>")]),e._v(" 中的 "),t("code",{pre:!0},[e._v("query")]),e._v(" 同样是一个正则表达式入参，支持正则搜索，可以使用 "),t("code",{pre:!0},[e._v("--explicit")]),e._v(" 选项来关闭正则，转为使用精确匹配。同样的，这里的 "),t("code",{pre:!0},[e._v("query")]),e._v(" 也支持桶前缀指定，也是一个变长入参，可以同时指定多个查询。")]),e._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[t("code",{pre:!0,attrs:{class:"language-text"}},[e._v("$ hok search minecraft extras/^clash ^git$\nclash-verge/extras 1.3.5\nclash.mini/extras 0.2.2\ngit/dorado 2.41.0.windows.3 [installed: 2.41.0.windows.1]\ngit/main 2.41.0.3\nminecraft/games nightly")])])]),t("h3",{attrs:{id:"hok-uninstall"}},[e._v("hok uninstall")]),e._v(" "),t("p",[e._v("包卸载命令。上文讲到，与 Scoop 相比，Hok 对包的安装、更新、卸载操作有较大改动。\n"),t("code",{pre:!0},[e._v("hok uninstall")]),e._v(" 执行时默认会检查待卸载包的依赖关系，如果有其他包依赖待卸载包，则会终止卸载操作，避免破坏依赖。这应该是正常策略，只是 Scoop 好像没有考虑到这点。通过使用 "),t("code",{pre:!0},[e._v("--no-dependent-check")]),e._v(" 可以关闭这个依赖检查，强制卸载待卸载包，这可能会导致其他包无法正常运行。")]),e._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[t("code",{pre:!0,attrs:{class:"language-text"}},[e._v("$ hok uninstall --help\nUninstall package(s)\n\nUsage: hok.exe uninstall [OPTIONS] <package>...\n\nArguments:\n  <package>...  The package(s) to uninstall\n\nOptions:\n  -c, --cascade             Remove unneeded dependencies as well\n  -p, --purge               Purge package(s) persistent data as well\n  -y, --assume-yes          Assume yes to all prompts and run non-interactively\n      --no-dependent-check  Disable dependent check (may break other packages)\n  -S, --escape-hold         Escape hold to allow to uninstall held package(s)\n  -h, --help                Print help")])])]),t("p",[e._v("默认情况下，被锁定的包无法被卸载，使用 "),t("code",{pre:!0},[e._v("--escape-hold")]),e._v(" 可以绕过这个限制，强制卸载被锁定的包。此外，"),t("code",{pre:!0},[e._v("hok uninstall")]),e._v(" 支持使用 "),t("code",{pre:!0},[e._v("--cascade")]),e._v(" 选择开启「级联卸载」，这会在卸载包时同时检查其依赖，如果依赖包不再被其他已安装包依赖，则会一并卸载。\n"),t("code",{pre:!0},[e._v("--purge")]),e._v(" 选项与 "),t("code",{pre:!0},[e._v("scoop uninstall --purge")]),e._v(" 一致，用于卸载包时一并清理包的持久化数据。")]),e._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[t("code",{pre:!0,attrs:{class:"language-text"}},[e._v("$ hok uninstall swift --cascade\nResolving packages...\nThe following packages will be REMOVED:\n  dorado/swift-5.8.1  main/dark-3.11.2\n\nDo you want to continue? [y/N]: n")])])]),t("p",[e._v("与 "),t("code",{pre:!0},[e._v("hok install")]),e._v(" 一样，"),t("code",{pre:!0},[e._v("hok uninstall")]),e._v(" 的主体功能尚未完整实现，请留意项目 CHANGELOG。")]),e._v(" "),t("h3",{attrs:{id:"hok-update"}},[e._v("hok update")]),e._v(" "),t("p",[e._v("桶更新命令。Hok 的这个命令只保留了 "),t("code",{pre:!0},[e._v("scoop update")]),e._v(" 里更新所有订阅到本地的桶的功能。")]),e._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[t("code",{pre:!0,attrs:{class:"language-text"}},[e._v("$ hok update --help\nFetch and update subscribed buckets\n\nUsage: hok.exe update\n\nOptions:\n  -h, --help  Print help")])])]),t("h3",{attrs:{id:"hok-upgrade"}},[e._v("hok upgrade")]),e._v(" "),t("p",[e._v("包更新命令。与 Scoop 的 "),t("code",{pre:!0},[e._v("scoop update")]),e._v(" 更新包相对应的功能，在 Hok 中被移到了\n"),t("code",{pre:!0},[e._v("hok upgrade")]),e._v(" 这里。"),t("code",{pre:!0},[e._v("hok upgrade")]),e._v(" 类似于 "),t("code",{pre:!0},[e._v("scoop update *")]),e._v("，会更新所有已安装包，除了被锁定的包。被锁定的包可以通过 "),t("code",{pre:!0},[e._v("--escape-hold")]),e._v(" 选项来强制更新。使用带参的\n"),t("code",{pre:!0},[e._v("hok upgrade [package]")]),e._v(" 可更新指定的包。")]),e._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[t("code",{pre:!0,attrs:{class:"language-text"}},[e._v("$ hok upgrade --help\nUpgrade installed package(s)\n\nUsage: hok.exe upgrade [OPTIONS] [package]\n\nArguments:\n  [package]  The package(s) to be upgraded (default: all except held)\n\nOptions:\n  -f, --ignore-failure  Ignore failures to ensure a complete transaction\n  -o, --offline         Leverage cache and suppress network access\n  -y, --assume-yes      Assume yes to all prompts and run non-interactively\n  -S, --escape-hold     Escape hold to allow to upgrade held package(s)\n      --no-hash-check   Skip package integrity check\n  -h, --help            Print help")])])]),t("p",[e._v("无论是 "),t("code",{pre:!0},[e._v("hok upgrade")]),e._v(" 还是 "),t("code",{pre:!0},[e._v("hok install")]),e._v(" 默认状态下都会结合本地下载缓存的情况预先获取并计算需要下载的文件大小，而通过 "),t("code",{pre:!0},[e._v("--offline")]),e._v(" 选项可以关闭网络访问，强制只使用本地的下载缓存来安装或更新。但这取决于本地缓存的有效性，如若无效，安装或更新操作会失败。")]),e._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[t("code",{pre:!0,attrs:{class:"language-text"}},[e._v("$ hok upgrade git --escape-hold\nResolving packages...\nCalculating download size...\nThe following packages will be UPGRADED:\n  dorado/git-2.41.0.windows.3\n\nNothing to download, all cached.\n\nDo you want to continue? [y/N]: n")])])]),t("p",[e._v("以上就是 Hok 目前阶段提供的所有命令的介绍。通过这些介绍，应该可以大致了解到 Hok\n的开发思路。因为还在绝赞进行中，所以命令的功能还不完整，有些甚至还未实现，只是预留了个坑在那里。所以完全有可能会变化，还是那句请留意项目 CHANGELOG 以了解最新进展。")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"为什么做"}},[e._v("为什么做")]),e._v(" "),t("p",[e._v("关于这个，在文章开头部分其实已经有所提及。一开始完全是因为 "),t("code",{pre:!0},[e._v("scoop search")]),e._v("\n的搜索效率问题，继而想去解决更多我个人使用 Scoop 时遇到的痛点。Hok 这个项目其实是「老坑新开」的，有心的可以去仓库翻 git log 了解一下，早在两年前我就已经下锄头挖坑了，只是中途断了一段时间，最近才又开始填坑。个中原因不便细说，反正是按自己需求来的个人项目，见步行步。")]),e._v(" "),t("h3",{attrs:{id:"为什么不直接贡献-scoop"}},[e._v("为什么不直接贡献 Scoop")]),e._v(" "),t("p",[e._v("实话说，我作为 Scoop 的 maintainer team 成员之一，不去贡献 Scoop 而是自己写一个新的东西，这好像是有点说不过去。但是 Scoop 作为一个近 10 年的项目，拥有我觉得还挺庞大的用户量，我是不太能按个人想法去改动一些东西的，会很容易影响到其他用户。而且不是说一个 maintainer 就能确定发展方向，有积累的项目就会有惯性，想要改动一些东西也不是那么容易的。按自己的需求来做个新的相对容易推动些，另外这也算是个试验田，也许能在后续给 Scoop 带来一些反向作用力，进而反哺回去。")]),e._v(" "),t("h3",{attrs:{id:"为什么是-rust"}},[e._v("为什么是 Rust")]),e._v(" "),t("p",[e._v("这似乎是个逃不开的话题，尤其是在好像「Rewrite Everything in Rust」被调侃成为一个梗之后。既然选择了 Rust 写 Hok，是要回答一下。理由其实很简单，我单纯想学 Rust，所以就用 Rust 来开坑了。这几年是切身感受到了 "),t("code",{pre:!0},[e._v("ripgrep")]),e._v("、"),t("code",{pre:!0},[e._v("bat")]),e._v("、"),t("code",{pre:!0},[e._v("hyperfine")]),e._v(" 以及\n"),t("code",{pre:!0},[e._v("starship")]),e._v(" 等项目给我带来的愉悦，也许这些项目背后的 Rust 语言不过是一个次要因素。这里并不是如那般狂热的 RIIR 信徒"),t("sup",{staticClass:"footnote-ref"},[t("saber-link",{attrs:{id:"fnref10",to:"#fn10"}},[e._v("[10]")])],1),e._v("，因为不是用 Rust 写一遍就能解决所有问题，任何语言，背后关键的还是人和思想。Rust 的学习曲线也确实挺如网络上传说的那般陡峭，对于我这种仍未学会 C++ 的人来说更甚，真的是有「从入门到入门，到再三入门」的感受。而且学了没地方用，非常容易忘，我好像又忘了 Pin/Unpin 和一些其它的东西了。虽说如此，那个连续数年被评为最想学语言的 Rust 还是值得我去探索一下，学 Rust 后反过来再尝试读一些 C/C++ 的代码，至少我觉得会有一些帮助。")]),e._v(" "),t("p",[e._v("Hok 完全可以用其它语言来写。Scoop 是用 PowerShell 编写的，理论上用 PowerShell\n背后的 .NET/C# 来写会更方便和直接一些，甚至可以无缝过渡。PowerShell 直到 v7 才支持"),t("code",{pre:!0},[e._v("ForEach-Object -Parallel")]),t("sup",{staticClass:"footnote-ref"},[t("saber-link",{attrs:{id:"fnref11",to:"#fn11"}},[e._v("[11]")])],1),e._v("，Scoop 目前还得支持 v5 的 Windows PowerShell，所以继续用 PowerShell 改善 Scoop 的性能问题是有点技术包袱的。然后 Scoop 最近的一些优化改动，多少其实都在渐渐引入一些 .NET/C# 的接口，并非纯纯 PowerShell 实现。")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"libscoop-的-roadmap"}},[e._v("libscoop 的 roadmap")]),e._v(" "),t("p",[e._v("Hok 项目的核心是其中的 libscoop 库，之所以抽出 libscoop 这层抽象，当然是为了后续\nhok-gui 甚至 hok-tui 的可能，不过这都是待定的事情，也不一定做（得出来）。目前短中期的路线图主要是完成 "),t("code",{pre:!0},[e._v("(un)install")]),e._v("/"),t("code",{pre:!0},[e._v("upgrade")]),e._v(" 等核心命令的实现。这里面我认为的一大难点是如何处理那些带着一长串 PowerShell 脚本的包，这些脚本基本都是用来做一些复杂的安装卸载工作，而且这些脚本的上下文多少都是依赖于 Scoop 本身的。Scoop\n允许利用钩子脚本做一些额外的工作，却完全将其内部所有细节暴露了出来，导致不少\nmanifest 有点滥用 Scoop 内部功能的情况。在 Rust 侧除了考虑是直接 Command call\n还是实现 native hosting 来执行这些脚本外，还得考虑如何提供这些执行上下文。另外\nshimming 如何处理以什么形式分发也是个问题。")]),e._v(" "),t("h2",{attrs:{id:"结语"}},[e._v("结语")]),e._v(" "),t("p",[e._v("Hok 毕竟是一个实验性质的个人项目，但我想把它分享出来，收获一些正向反馈也好负向反馈也罢，至少有些作用力。埋头搞事只有输入没有输出的状态挺让人难受的，是需要些正反馈。")]),e._v(" "),t("p",[e._v("上一次写博客还是世界巨变的几年前，博客至少还在线哈哈。这是我这些年以来第三次写关于 Scoop 的内容，按这个越写越长的趋势，不知道还会不会有第四次呢。")]),e._v(" "),t("p",[e._v("如果你对 Hok 这个项目感兴趣，或者有什么想法，欢迎借由各种途径留言。")]),e._v(" "),t("p",[e._v("回见。")]),e._v(" "),t("hr",{staticClass:"footnotes-sep"}),e._v(" "),t("section",{staticClass:"footnotes"},[t("ol",{staticClass:"footnotes-list"},[t("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[t("p",[t("saber-link",{attrs:{to:"https://github.com/ScoopInstaller/Scoop/wiki/App-Manifests"}},[e._v("https://github.com/ScoopInstaller/Scoop/wiki/App-Manifests")]),e._v(" "),t("saber-link",{staticClass:"footnote-backref",attrs:{to:"#fnref1"}},[e._v("↩︎")])],1)]),e._v(" "),t("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[t("p",[t("saber-link",{attrs:{to:"https://github.com/ScoopInstaller/Scoop#inspiration"}},[e._v("https://github.com/ScoopInstaller/Scoop#inspiration")]),e._v(" "),t("saber-link",{staticClass:"footnote-backref",attrs:{to:"#fnref2"}},[e._v("↩︎")])],1)]),e._v(" "),t("li",{staticClass:"footnote-item",attrs:{id:"fn3"}},[t("p",[t("saber-link",{attrs:{to:"https://scoop.sh"}},[e._v("A command-line installer for Windows.")]),e._v(" "),t("saber-link",{staticClass:"footnote-backref",attrs:{to:"#fnref3"}},[e._v("↩︎")])],1)]),e._v(" "),t("li",{staticClass:"footnote-item",attrs:{id:"fn4"}},[t("p",[t("saber-link",{attrs:{to:"https://github.com/ScoopInstaller/Scoop/issues/4239"}},[e._v("https://github.com/ScoopInstaller/Scoop/issues/4239")]),e._v(" "),t("saber-link",{staticClass:"footnote-backref",attrs:{to:"#fnref4"}},[e._v("↩︎")])],1)]),e._v(" "),t("li",{staticClass:"footnote-item",attrs:{id:"fn5"}},[t("p",[t("saber-link",{attrs:{to:"https://github.com/ScoopInstaller/Scoop/commit/bea31895"}},[e._v("https://github.com/ScoopInstaller/Scoop/commit/bea31895")]),e._v(" "),t("saber-link",{staticClass:"footnote-backref",attrs:{to:"#fnref5"}},[e._v("↩︎")])],1)]),e._v(" "),t("li",{staticClass:"footnote-item",attrs:{id:"fn6"}},[t("p",[t("saber-link",{attrs:{to:"https://github.com/shilangyu/scoop-search"}},[e._v("https://github.com/shilangyu/scoop-search")]),e._v(" "),t("saber-link",{staticClass:"footnote-backref",attrs:{to:"#fnref6"}},[e._v("↩︎")])],1)]),e._v(" "),t("li",{staticClass:"footnote-item",attrs:{id:"fn7"}},[t("p",[t("saber-link",{attrs:{to:"https://github.com/ScoopInstaller/scoopinstaller.github.io-indexer"}},[e._v("https://github.com/ScoopInstaller/scoopinstaller.github.io-indexer")]),e._v(" "),t("saber-link",{staticClass:"footnote-backref",attrs:{to:"#fnref7"}},[e._v("↩︎")])],1)]),e._v(" "),t("li",{staticClass:"footnote-item",attrs:{id:"fn8"}},[t("p",[t("saber-link",{attrs:{to:"https://github.com/ScoopInstaller/Scoop/blob/master/buckets.json"}},[e._v("https://github.com/ScoopInstaller/Scoop/blob/master/buckets.json")]),e._v(" "),t("saber-link",{staticClass:"footnote-backref",attrs:{to:"#fnref8"}},[e._v("↩︎")])],1)]),e._v(" "),t("li",{staticClass:"footnote-item",attrs:{id:"fn9"}},[t("p",[t("saber-link",{attrs:{to:"https://github.com/ScoopInstaller/Scoop/pull/5369"}},[e._v("https://github.com/ScoopInstaller/Scoop/pull/5369")]),e._v(" "),t("saber-link",{staticClass:"footnote-backref",attrs:{to:"#fnref9"}},[e._v("↩︎")])],1)]),e._v(" "),t("li",{staticClass:"footnote-item",attrs:{id:"fn10"}},[t("p",[t("saber-link",{attrs:{to:"https://github.com/ansuz/RIIR/issues/"}},[e._v("https://github.com/ansuz/RIIR/issues/")]),e._v(" "),t("saber-link",{staticClass:"footnote-backref",attrs:{to:"#fnref10"}},[e._v("↩︎")])],1)]),e._v(" "),t("li",{staticClass:"footnote-item",attrs:{id:"fn11"}},[t("p",[t("saber-link",{attrs:{to:"https://devblogs.microsoft.com/powershell/powershell-foreach-object-parallel-feature/"}},[e._v("https://devblogs.microsoft.com/powershell/powershell-foreach-object-parallel-feature/")]),e._v(" "),t("saber-link",{staticClass:"footnote-backref",attrs:{to:"#fnref11"}},[e._v("↩︎")])],1)])])])],1)}),[],!1,null,null,null);a(s);const n=s.exports},48758:(e,t,o)=>{"use strict";e.exports=o.p+"images/20230810001.cf7b02b8.webp"}}]);