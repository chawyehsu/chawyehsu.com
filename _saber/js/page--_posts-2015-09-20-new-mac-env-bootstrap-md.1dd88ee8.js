(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{101:function(e,a,t){e.exports={srcSet:t.p+"images/20150810001-07235173.webp 1258w,"+t.p+"images/20150810001-f9d6d601.webp 1200w,"+t.p+"images/20150810001-11f624a0.webp 720w,"+t.p+"images/20150810001-eedbb8e1.webp 480w",images:[{path:t.p+"images/20150810001-07235173.webp",width:1258,height:826},{path:t.p+"images/20150810001-f9d6d601.webp",width:1200,height:788},{path:t.p+"images/20150810001-11f624a0.webp",width:720,height:473},{path:t.p+"images/20150810001-eedbb8e1.webp",width:480,height:315}],src:t.p+"images/20150810001-07235173.webp",toString:function(){return t.p+"images/20150810001-07235173.webp"},placeholder:"data:image/webp;base64,UklGRpgBAABXRUJQVlA4IIwBAAAwBwCdASooABoAPlEgjkWjoaEVXAQAOAUEs4Bj+RADXv9TDdPdEK900H8SDAZlcuoVOokzpH07SI5HK9DbSkSyDgAA/nk//0sPi4s9K4l2iFejMXQekIdm7Pqe6wF6EcrNxKE/DtxmDhC9W0odyf+4AeNh5L/9//6lGRvi5KD6p8jnh0J3mM14p8SaByj5EYhQaysIInP0Gshm5QVGAElDHPhfEXFqKwuqJSxd6GY596IMnLtW03RtfbnUNXByWU3eDqfwm/wixC/iz6MG+8Y3r6TZpycDA43HH2Zp7y88DyNmNnf1nee3wnGABOS/l3IzsXBTv/y4T20Zv/5BlyaJJ+9uC/F2Q4bQFobD/hl1iw6Y/xNv4nduoJrPX+CofH6D+W4LHe29O/ZofIXVnzQTFE32YTQj8cBeCvjJdVXrV33MKafxKOhc+BLXb3wGluY7TsVCgA8upEFyMhtYshfhpLzSHGZZRU9fzu+MVhKi/H1NG3AxEovV3uHWsmDxI6mXW4vng0TZQYGAAAA=",width:1258,height:826}},531:function(e,a,t){"use strict";t.r(a);var s=t(1),o=function(e){var a,s,o,r,p=(o=void 0,r="2015-09-20 17:28:19",(a={}).type=s="post",a.internal=o,a.contentType="markdown",a.slug="new-mac-env-bootstrap",a.content=o,a.createdAt=new Date(1442741299e3),a.updatedAt=new Date(1442741299e3),a.layout=s,a.title="Newbie Mac Bootstrap",a.date=r,a.updated=r,a.assets={cover:t(75)},a.markdownHeadings=[{text:"Command Line Tools for Xcode",slug:"command-line-tools-for-xcode",level:2},{text:"1. 通过 Xcode 安装",slug:"1--通过-xcode-安装",level:3},{text:"2. 通过终端安装",slug:"2--通过终端安装",level:3},{text:"3. 通过离线安装包安装",slug:"3--通过离线安装包安装",level:3},{text:"Where is the package manager of OS X?",slug:"where-is-the-package-manager-of-os-x",level:2},{text:"Homebrew",slug:"homebrew",level:3},{text:"Homebrew-Cask",slug:"homebrew-cask",level:3}],a.excerpt="<p>入坑 Mac OS X，写点 note (nonsense) 以备玩坏系统重装时翻查。</p>\n",a.permalink="/blog/new-mac-env-bootstrap",a.attributes=a,a),i=e.options.beforeCreate||[];e.options.beforeCreate=[function(){this.$page=p}].concat(i);["layout","transition"].forEach((function(a){var t=e.options.PageComponent;t&&(e.options[a]=t[a]),void 0===e.options[a]&&(e.options[a]=p[a])})),p.slug&&(e.options.name="page-wrapper-"+p.slug.replace(/[^0-9a-z\-]/gi,"-"))},r=Object(s.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("layout-manager",[s("p",[e._v("入坑 Mac OS X，写点 note (nonsense) 以备玩坏系统重装时翻查。")]),e._v(" "),s("h2",{attrs:{id:"command-line-tools-for-xcode"}},[e._v("Command Line Tools for Xcode")]),e._v(" "),s("p",[e._v("OS X 系统不像 Ubuntu 等发行版，系统默认是不包含编译工具链的（因为不是每位用户都需要吧，人性化？）。所以在使用时如果执行到含有诸如 gcc、make 等命令时，就会出现以下情况：")]),e._v(" "),s("Photoswipe",{attrs:{auto:""}},[s("figure",{attrs:{"data-type":"image","data-pswp":"true",itemscope:"",itemprop:"associatedMedia",itemtype:"http://schema.org/ImageObject"}},[s("saber-image",{attrs:{src:t(101),alt:"提示需要命令行工具",title:"提示需要命令行工具","data-pswp-title":"提示需要命令行工具"}}),s("figcaption",[e._v("提示需要命令行工具")])],1)]),e._v(" "),s("p",[e._v("这时就需要安装苹果提供的命令行工具包（Command Line Tools，下称 CLT）了。安装 CLT 有几种方法：")]),e._v(" "),s("h3",{attrs:{id:"1--通过-xcode-安装"}},[e._v("1. 通过 Xcode 安装")]),e._v(" "),s("p",[s("code",{pre:!0},[e._v("for Xcode")]),e._v(" 嘛，当然能通过 Xcode 安装了，只不过没有安装 Xcode 亦可使用。所以如果你有安装 Xcode 的话，直接通过 Xcode 安装就好了。（我自己并没有安装 Xcode，因为暂无打算学习 Mac 相关的开发，所以私以为没必要耗费几个 G 的硬盘空间塞下 Xcode 吧， MacBook 的硬盘寸寸金啊。。。）。")]),e._v(" "),s("h3",{attrs:{id:"2--通过终端安装"}},[e._v("2. 通过终端安装")]),e._v(" "),s("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"bash"}},[s("pre",{pre:!0,attrs:{class:"saber-highlight-code language-bash"}},[s("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("$ xcode-select "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")])])])]),s("p",[e._v("或者输入 gcc 触发前文所提到的情况（见前文图）亦可。")]),e._v(" "),s("h3",{attrs:{id:"3--通过离线安装包安装"}},[e._v("3. 通过离线安装包安装")]),e._v(" "),s("p",[e._v("如果用前面的方法安装不成功的话，可到 Apple 下载中心获取离线安装包进行安装。（认准苹果官网）")]),e._v(" "),s("blockquote",[s("p",[s("saber-link",{attrs:{to:"https://developer.apple.com/downloads"}},[e._v("https://developer.apple.com/downloads")]),e._v(" （需要使用 AppleID 登录）")],1)]),e._v(" "),s("p",[e._v("安装 CLT 后就可以使用工具链编译安装软件了，这是 Bootstrap A New Mac 的第一步。")]),e._v(" "),s("h2",{attrs:{id:"where-is-the-package-manager-of-os-x"}},[e._v("Where is the package manager of OS X?")]),e._v(" "),s("p",[e._v("用 Mac 之前我还真没想过 OS X 有没有包管理工具。初次用了一会儿后，总觉得好像少了些什么，又说不出来。后在 Win 机上 Xshell 管理 VPS 时，才猛然想起：OS X 下用什么管理软件包？！Where is the package manager of OS X? 检索后才知道 OS X 不止默认不带 toolchains，还没有 package manager。带着使用 Linux 发行版心态的我不免有点失望。")]),e._v(" "),s("h3",{attrs:{id:"homebrew"}},[e._v("Homebrew")]),e._v(" "),s("p",[e._v("官方没有社区有。强大的 Mac 社区造就了各种易用的工具。软件包管理工具就各式各样。其中最出名的两个是 "),s("strong",[s("saber-link",{attrs:{to:"https://www.macports.org"}},[e._v("Macport")])],1),e._v(" 和 "),s("strong",[s("saber-link",{attrs:{to:"http://brew.sh"}},[e._v("Homebrew")])],1),e._v("。二者有着截然不同的理念，并且越来越多用户选择了 Homebrew。下面进行 Bootstrap A New Mac 的第二步。")]),e._v(" "),s("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"bash"}},[s("pre",{pre:!0,attrs:{class:"saber-highlight-code language-bash"}},[s("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("$ /usr/bin/ruby -e "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('"')])])])]),s("p",[s("small",[e._v("OS X 自带 ruby，难怪 ruby 社区一股 Macbook 风气。")])]),e._v(" "),s("p",[e._v("然后就可以像用 "),s("code",{pre:!0},[e._v("apt-get install/update")]),e._v(" 那样 "),s("code",{pre:!0},[e._v("brew install/update")]),e._v(" 了，更多用法参见 "),s("saber-link",{attrs:{to:"https://github.com/Homebrew/homebrew/tree/master/share/doc/homebrew#readme"}},[e._v("Doc")]),e._v("。")],1),e._v(" "),s("h3",{attrs:{id:"homebrew-cask"}},[e._v("Homebrew-Cask")]),e._v(" "),s("p",[e._v("介绍了 Homebrew 就不得不说 "),s("strong",[s("saber-link",{attrs:{to:"https://github.com/Homebrew/homebrew-cask"}},[e._v("Homebrew-Cask")])],1),e._v(" 了。Homebrew 掌管了各种 CLI 软件包的管理，App Store 提供各种 GUI 应用，这 Cask 又是什么？Cask 其实是 Homebrew 的一个扩展，能让 brew 支持安装和管理 GUI 应用。能在 App Store 获取到的应用当然最好在上面下载安装了，但有些应用程序是没有上架 App Store 的（比如 IntelliJ IDEA），得去程序的官网各种点击下载安装。于是不甘这样的 Mac 社区 Geek 们搞了个 Homebrew-Cask，然后就能打开终端一句指令愉快地安装 GUI 应用了，比如："),s("code",{pre:!0},[e._v("brew cask install intellij-idea-ce")]),e._v("。Cask 已经被集成在了 Homebrew 中，直接如下使用即可：")]),e._v(" "),s("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"bash"}},[s("pre",{pre:!0,attrs:{class:"saber-highlight-code language-bash"}},[s("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("$ brew cask "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" atom")])])])],1)}),[],!1,null,null,null);"function"==typeof o&&o(r);a.default=r.exports},75:function(e,a,t){e.exports={srcSet:t.p+"images/20181225012-d2243a81.webp 600w,"+t.p+"images/20181225012-128e7a5a.webp 480w",images:[{path:t.p+"images/20181225012-d2243a81.webp",width:600,height:450},{path:t.p+"images/20181225012-128e7a5a.webp",width:480,height:360}],src:t.p+"images/20181225012-d2243a81.webp",toString:function(){return t.p+"images/20181225012-d2243a81.webp"},placeholder:"data:image/webp;base64,UklGRsgAAABXRUJQVlA4ILwAAAAQBQCdASooAB4APkkci0QioaEapAAoBISzgGFAFm1l8o9CPnv4ABAfksoODQVyCjrAAP7+whLfQP/4LeeP7OR3PHY1meMMKGiXC72mWTfk7kf+W52hoGj0+jiGVbYy+rS9JjTNChb2Ct12Ud6pyjmwAc/CAAnXzaK7lyNZkQcmtBjIKn1x46TVUklbFlvU+9BetiF96YmjaSH4cwRMqyrHofNtKmvxXoJRiAgEMY77TKY5pBChvjvJqsAAAA==",width:600,height:450}}}]);