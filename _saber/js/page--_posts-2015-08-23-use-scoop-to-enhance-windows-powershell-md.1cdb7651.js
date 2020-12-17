(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{359:function(e,t,a){"use strict";a.r(t);var o=a(0),s=function(e){var t,o,s,p=(s=void 0,(t={}).type=o="post",t.internal=s,t.contentType="markdown",t.slug="use-scoop-to-enhance-windows-powershell",t.content=s,t.createdAt=new Date(1440343151e3),t.updatedAt=new Date(1441358378e3),t.layout=o,t.title="用 Scoop 改善 Windows Powershell",t.date="2015-08-23 23:19:11",t.updated="2015-09-04 17:19:38",t.assets={cover:a(74)},t.markdownHeadings=[{text:"一本道",slug:"一本道",level:2},{text:"正题",slug:"正题",level:2}],t.excerpt='<p style="text-align:center"><strong><a href="/blog/2018/05/talk-about-scoop-the-package-manager-for-windows-again">关于 Scoop 的新文章</a></strong></p>\n',t.permalink="/blog/use-scoop-to-enhance-windows-powershell",t.attributes=t,t),n=e.options.beforeCreate||[];e.options.beforeCreate=[function(){this.$page=p}].concat(n);["layout","transition"].forEach((function(t){var a=e.options.PageComponent;a&&(e.options[t]=a[t]),void 0===e.options[t]&&(e.options[t]=p[t])})),p.slug&&(e.options.name="page-wrapper-"+p.slug.replace(/[^0-9a-z\-]/gi,"-"))},p=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("layout-manager",[o("p",{staticStyle:{"text-align":"center"}},[o("strong",[o("saber-link",{attrs:{to:"/blog/2018/05/talk-about-scoop-the-package-manager-for-windows-again"}},[e._v("关于 Scoop 的新文章")])],1)]),e._v(" "),o("h2",{attrs:{id:"一本道"}},[e._v("一本道")]),e._v(" "),o("p",[e._v("软件包管理工具想必大家已经很清楚并且使用过。Debian/ Ubuntu 的 apt-get，\nArch Linux 的 Pacman，就连本身并无自带包管理工具的 Mac 都有了 Macports\n和极其好用的 Homebrew。至于 Windows 下，\nGeek 们也生产出各式各样的工具以贴合他们的 *nix 使用习惯。其中软件包管理工具中比较出名的就是 "),o("strong",[o("saber-link",{attrs:{to:"https://chocolatey.org/"}},[e._v("chocolatey")])],1),e._v(" 了。")]),e._v(" "),o("p",[e._v("然而本文并不细谈 chocolatey，而谈的是一个叫做 "),o("strong",[o("saber-link",{attrs:{to:"http://scoop.sh/"}},[e._v("Scoop")])],1),e._v("\n工具。官网上的描述是“A command-line installer for Windows”，其实说白了，就是和 chocolatey 同属一种东西，也就是 Windows 下的软件包管理工具，但其并没有 chocolatey 出名与强大。")]),e._v(" "),o("p",[e._v("那我为什么要用 Scoop 而不是 chocolatey？一正是 chocolatey 够强大，但其实我一开始并没打算折腾 Powershell，因为已经在用 Git Bash / MSYS2，所以我无需使用太过庞大的工具；二是 scoop 有吸引我的地方，它能把 Powershell\n弄得看起来像 Linux shell 的样子，这也是为什么我要折腾 PS 的促因。")]),e._v(" "),o("div",{staticClass:"gad"},[o("adsbygoogle",{attrs:{"ad-layout":"in-article","ad-format":"fluid","ad-slot":"8422573867"}})],1),e._v(" "),o("p",[e._v("看 Scoop 主页的 Demo 视频，你会发现视频里的 PS 用起来很简约，而又是更方便了，不仅能安装运行各种 GNU 工具（"),o("code",{pre:!0},[e._v("curl")]),e._v("、"),o("code",{pre:!0},[e._v("vim")]),e._v(" 等），而且 "),o("code",{pre:!0},[e._v("$PS1")]),e._v(" 看起来像是 Linux 下的终端，还能显示 git 仓库的分支信息，简直 Geek 范十足。虽说已有 MSYS2 这种更集成的 *nix 环境，但既然看到了 Scoop 又挺不错的于是就折腾下呗。毕竟是 Windows 内置的嘛，还能 Win + R powershell 快速打开，有时候打下指令（"),o("code",{pre:!0},[e._v("ipconfig")]),e._v("、"),o("code",{pre:!0},[e._v("nslookup")]),e._v(" 什么的）还是会用到的呢。")]),e._v(" "),o("figure",{attrs:{"data-type":"image"}},[o("saber-image",{attrs:{src:a(83),alt:"配置 Scoop 后的样子",title:"配置 Scoop 后的样子"}}),o("figcaption",[e._v("配置 Scoop 后的样子")])],1),e._v(" "),o("h2",{attrs:{id:"正题"}},[e._v("正题")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("确保你已安装 Powershell 3（其实 Windows7+ 应该都已经集成了），然后 WIn + R 输入 powershell 打开 PS，一句命令安装 scoop：")]),e._v(" "),o("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"powershell"}},[o("pre",{pre:!0,attrs:{class:"saber-highlight-code language-powershell"}},[o("code",{pre:!0,attrs:{class:"language-powershell"}},[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("iex")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("new-object")]),e._v(" net"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("webclient"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("downloadstring"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://get.scoop.sh'")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")])])])])]),e._v(" "),o("li",[o("p",[e._v("安装完成后输入 "),o("code",{pre:!0},[e._v("scoop help")]),e._v("，如果报错则需要允许 PS 提供脚本执行权限，执行：")]),e._v(" "),o("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"powershell"}},[o("pre",{pre:!0,attrs:{class:"saber-highlight-code language-powershell"}},[o("code",{pre:!0,attrs:{class:"language-powershell"}},[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("set-executionpolicy")]),e._v(" unrestricted "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("s cu")])])])]),e._v(" "),o("li",[o("p",[e._v("然后就可以像 apt-get 那样 "),o("code",{pre:!0},[e._v("install/uninstall")]),e._v(" 软件包了：")]),e._v(" "),o("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"powershell"}},[o("pre",{pre:!0,attrs:{class:"saber-highlight-code language-powershell"}},[o("code",{pre:!0,attrs:{class:"language-powershell"}},[e._v("scoop install pkgname")])])]),o("p",[e._v("用 scoop 安装软件包时不会弹出 UAC 要求提权，因为软件包是安装在当前用户的 "),o("code",{pre:!0},[e._v("appdata")]),e._v(" 下的，并通过 shims path 管理调用执行文件，而不是将每个执行文件的路径都加到 path 中。")])]),e._v(" "),o("li",[o("p",[e._v("开始美化控制台显示样式（★）首先 "),o("code",{pre:!0},[e._v("scoop install concfg")]),e._v(" 安装 "),o("code",{pre:!0},[e._v("concfg")]),e._v("，然后导入 Solarized 主题"),o("code",{pre:!0},[e._v("concfg import solarized small")]),e._v("（concfg 支持多种主题，详见 "),o("saber-link",{attrs:{to:"https://github.com/lukesampson/concfg/tree/master/presets"}},[e._v("concfg/presets")]),e._v("），期间会提示你替换了哪些控制台（其实也就 "),o("code",{pre:!0},[e._v("CMD")]),e._v(" 和 "),o("code",{pre:!0},[e._v("PS")]),e._v("）的样式。然后 "),o("code",{pre:!0},[e._v("scoop install pshazz")]),e._v(" 安装 "),o("code",{pre:!0},[e._v("pshazz")]),e._v("，当安装完后马上就能看到 shell prompt 发生变化了，而且 cd 到一个 git 仓库还能看到分支信息，还支持 git auto-completion 呢。")],1)]),e._v(" "),o("li",[o("p",[e._v("然后还可以安装使用 "),o("code",{pre:!0},[e._v("touch")]),e._v("、"),o("code",{pre:!0},[e._v("curl")]),e._v("、"),o("code",{pre:!0},[e._v("vim")]),e._v(" 等更多的 GNU 命令行工具。\nscoop 官方的 Packages 是 "),o("saber-link",{attrs:{to:"https://github.com/lukesampson/scoop/tree/master/bucket"}},[e._v("bucket")]),e._v("，如果里面没有你想安装的工具你还可以"),o("saber-link",{attrs:{to:"https://github.com/lukesampson/scoop/wiki/Buckets#creating-your-own-bucket"}},[e._v("自定义 bucket")]),e._v(" 或 "),o("saber-link",{attrs:{to:"https://github.com/lukesampson/scoop/wiki/Creating-an-app-manifest"}},[e._v("创建一个 package")]),e._v("。")],1)]),e._v(" "),o("li",[o("p",[e._v("最后还能用 scoop 进行开发语言环境的"),o("saber-link",{attrs:{to:"https://github.com/lukesampson/scoop/wiki/Switching-Ruby-and-Python-Versions"}},[e._v("多版本控制")]),e._v("呢，比如 "),o("code",{pre:!0},[e._v("scoop install python27 python")]),e._v(" 同时安装 Py2.7 和 Py3，然后 "),o("code",{pre:!0},[e._v("scoop reset python27")]),e._v(" 选择 Py2.7，"),o("code",{pre:!0},[e._v("scoop reset python")]),e._v(" 则设置为 Py3。")],1)])]),e._v(" "),o("p",[e._v("至于更详尽的使用方法请 "),o("code",{pre:!0},[e._v("scoop help")]),e._v(" 或访问 "),o("saber-link",{attrs:{to:"https://github.com/lukesampson/scoop/wiki"}},[e._v("Scoop Wiki")]),e._v(" 咯。")],1),e._v(" "),o("p",[e._v("总结：所以说这种人就只能为他们的这种“如此难以伺候”而不断地折腾自己的电脑，折腾自己。这就是所谓“生命不息，折腾不止”吧哈哈哈。。。卒")])])}),[],!1,null,null,null);"function"==typeof s&&s(p);t.default=p.exports},74:function(e,t,a){e.exports={srcSet:a.p+"images/20181225013-70a83975.png 600w,"+a.p+"images/20181225013-4aa3f919.png 480w",images:[{path:a.p+"images/20181225013-70a83975.png",width:600,height:450},{path:a.p+"images/20181225013-4aa3f919.png",width:480,height:360}],src:a.p+"images/20181225013-70a83975.png",toString:function(){return a.p+"images/20181225013-70a83975.png"},placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAIAAADRv8uKAAAACXBIWXMAAAsTAAALEwEAmpwYAAADZElEQVRIx+2WS08TURTHL4hgYlwYXRrdGLe68wO4NH4A3Bh3asTyKFDRiMYHMQYXPlioC6M2gKCCxZbptLWUVmuBYmlLX4ba8n53OvfeGQrteKbgRhEHbVmR/HNze6c5v57zP+dOkZAkeRWfwJRb5xzllUq41RVvKZgkcIpQytMUEbYOjBNYEgR/dKaseYD1TmSo8EveKF9UUfRFZ+7ohmqanU+tEfiYXzCFCieJtCR6Rmaq2wfvfRh6Zg2lMV59lC8wtFKaELt/zDY8eeOd++Qj2xNLEKiA/L2xcwaG0MuYxsfnmb7wlTaXqmXgtSO0glcf/V9XQ2gYyg2EOTIzOWt0Rz97vjV0uiOj8yuErjtLm84YegT8k1LZdT1lKPWERtnBqHVwJBybhRqse3soBYNJIk+4xWSne0zrjL9yxltdo619sMZbfgr2WmdsODYPU7Q4uwCJLpM/UpWCMQfjQe8zfnSJQRXs/us9JTUmVG5EVSyqXFOR2oQuGOp0ASm1hLk1azaIiZRNCM0kuVNNdlRp2nXZ4p3gdL6pgip2p8ZcUmcpvixrV50FVZtav8TADpjjv4ZVAOZwCguT49OHb0FoM2RZqh2SJOlhbwyS3lFrLqw1w4pqzMAOxOYyRPhTQ20ODFEkQXR4RnbUsAW15iKNBZV1n2sfBna9IYJUTJEGDuUfdLTxU3KRh27YuMhKwVmDhceMF1UagQrJ7b76EV3svqYPA/tMsw/yluusYk6/+ArfVFJnhWAiEf7scycqZ0uydkLGRxocnrHE91n++AMXUpvkw3JjIxuBSeNzAgaDl7CwOD137K4VAEXQzCojZAkmNjlixZVGdF6/5nG1yR6YglnCXC7AYHCaiv5wfE+dCTprb71V2z+OqfjCNVatC13RhzVd4X31PWDwgZu28anECqYkJ+CsweLLngBSs1Dq828Cwcnkwdv2Uq23fzTxMTLX5Z8+1OBAZcyJx66MfEH++hb6ZzCRBHK1zYUuGgrVxmKNqVhtRJcMqIKBk6z0hVUMUhkauoNwZSrsLAUeJ8kST4KhaIfN09nrfWvzdvR6dXbfe7u8ynL4OnqHzH2h5AIn8lT5ta/oykxhmiZCmlD4BwOCjbwnQlbyfoUIdJOvUaUvCbgTNpaQD3A+tA3eBudNPwDdBKzYwMuxhQAAAABJRU5ErkJggg==",width:600,height:450}},83:function(e,t,a){e.exports={srcSet:a.p+"images/20150823002-dd0e6787.png 782w,"+a.p+"images/20150823002-0f2791a2.png 720w,"+a.p+"images/20150823002-7d9d5087.png 480w",images:[{path:a.p+"images/20150823002-dd0e6787.png",width:782,height:577},{path:a.p+"images/20150823002-0f2791a2.png",width:720,height:531},{path:a.p+"images/20150823002-7d9d5087.png",width:480,height:354}],src:a.p+"images/20150823002-dd0e6787.png",toString:function(){return a.p+"images/20150823002-dd0e6787.png"},placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAdCAIAAABXK7kkAAAACXBIWXMAAAsTAAALEwEAmpwYAAACnElEQVRIx2P48+fPhw/v37979/7Dhw8fP75//x5IAllAxluqgHfvgBjGABLvgPb8/v2b4df3r/defbr76vP7F0/fv3335eOHj29ev335/PPbN/+pB4De+/H1C5Dx++fPN29eA33F8P7D+865S+qnz2ufObdp6uymuQubFy5pnjO/dd7C3pVr+las6V64tHPuIrJR++wFHXMWAlHbrPmts+ZPX7nu0ePHIItfvX6j7hnArGvGa2rPZ2zHaGDFZOXIoGvGoG/OYGjJoGXMIKPBIK3OIKtJPpIDkYwK2gziyrKWzoeOHQNGJsPrN2+sIhMl7Nyl7NyV3PyVXH0FTOy4DG05DKx5jO34TOwELJwEzJ1Y9a1Y9CwpQWz6VgwaxiqeQRcuXQYmIoaXr18rOPswaJkJmDvyAD1t5sRv7shr6sBjYi9s7Spp5y5t7wkkmXUtgGoYtMlHTDrmDKoGyh5BN27fBqYvUFBreAWx6llyGduyGVhxGtkALRa1dgXZpGnCoGUKIoFI24xCBLf4+q1bIB8Dg9okOFrE0lnW0ZPXzAHob2CwK7r6semaA0OGWrZisRgY1IquvkAf85jaiVg5cxvbsRtYsRtYA10gbOUCRILmjiDfU93iV2/eGAVGyTl5K7r4ansHS9p7AH0s6+wt7+yj7Oav7O4v7+QNdAcozKnuYxWPAEYtM0ZgkELCVgPOMAaxQTFNi6B+9VrW0YtBzZBJ14IRKKdtBiSREVUiGLuPZR29GdSMmKhnx6jFoxaPWjxq8ajFw8diOScfBnVjZnDtRDsEak2oGQIbe9dv3hwYH9+8cweplalhzKpnwaxrTjsENJ9B3VDFI/D02XMgi3/+/Hni7Pl9R48fOHaC1mj/0eNHTp0G9iSAlgIAyobPW9Wb2eIAAAAASUVORK5CYII=",width:782,height:577}}}]);