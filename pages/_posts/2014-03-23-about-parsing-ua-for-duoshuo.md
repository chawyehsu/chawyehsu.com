---
layout: post
title: 关于多说评论显示UserAgent
date: 2014-03-23 16:51:00
updated: 2014-03-23 16:51:00
draft: true
hidden: true
comments: false
sitemap: false
---

最近博客莫名其妙地多了十来个来自多说的访客，从统计去查看才发现有童鞋去多说讨论区发
了个问题询问我博客的多说为什么会显示UserAgent，并且附上了我博客的一个链接，所以就
有友友从多说跳转到我博客来围观了。

<!--more-->

那位询问的面条童鞋当时貌似也在微博At了我询问，后来我也回复了他，并附上了两种实现方
法：其一就是可以通过使用Github上的[make_duoshuo_show_ua][1]来实现UserAgent显示，
作者huhu乃C8（chrome吧）小吧之一，常出没于C8和火狐吧。make_duoshuo_show_ua我是在
逛某豆的博客看到的，我自己没用过，所以具体使用方法不清楚请自行前往Github查看=w=。
其二则是我用的方法了，其实在多说的评论接口中，是附带了UA信息的，只是多说给的标准调
用代码中并没有显示这部分内容。既然有接口了，自然就可以自定义输出咯。不过我并没有那
么大牛自己写这么给力的duoshuo.js，我也是在逛别人博客的时候留意到有UA显示。于是就
寻根，条件反射按F12键审查了代码，找到了调用的js文件，拷贝下来改了short_name就用上
了。。具体在[阳光的博客][2]中找到调用的duoshuo.js就是了（拷贝下来可以使用 tool.lu
盒子或者css-js工具格式化一下方便查看和修改）。但是这个duoshuo.js显示的UserAgent并
不全面（比如最新的Win8.1），只是简单的支持了部分的UA，所以后来我稍微修改了判断函数，
加上了 Win8.1，WinRT，WindowsPhone7/8/8.1，WinServer03/08/12，iOS7，Android 细分
2.2/2.3/4.0/4.1/4.2/4.3/4.4/，Linux细分Ubuntu/Debian/CentOS等，浏览器也细微改了一
下。然后这样就能显示更多的UA了，虽然也是不能全面覆盖吧。

```js
function k(a) {
    var b = "";
    return b = a.match(/win/gi) ? a.match(/nt 5.0/gi) ? "Windows 2000" : a.match(/nt 5.1/gi) ? "Windows XP" : a.match(/nt 5.2/gi) ? "Windows Server 2003" : a.match(/nt 6.0/gi) ? "Windows Vista" : a.match(/nt 6.1/gi) ? a.match(/server/gi) ? "Windows Server 2008" : "Windows 7" : a.match(/nt 6.2/gi) ? a.match(/server/gi) ? "Windows Server 2012" : "Windows 8" : a.match(/nt 6.3/gi) ? "Windows 8.1" : a.match(/phone/gi) ? a.match(/7/gi) ? "Windows Phone 7" : a.match(/8.0/gi) ? "Windows Phone 8" : a.match(/8.1/gi) ? "Windows Phone 8.1" : "Windows Phone" : a.match(/arm/gi) ? "Windows RT" : "Windows" : a.match(/android/gi) ? a.match(/2.2/gi) ? "Android 2.2" : a.match(/2.3/gi) ? "Android 2.3" : a.match(/4.0/gi) ? "Android 4.0" : a.match(/4.1/gi) ? "Android 4.1" : a.match(/4.2/gi) ? "Android 4.2" : a.match(/4.3/gi) ? "Android 4.3" : a.match(/4.4/gi) ? "Android 4.4" : "Android" : a.match(/linux/gi) ? a.match(/ubuntu/gi) ? "Ubuntu" : a.match(/centos/gi) ? "CentOS" : a.match(/debian/gi) ? "Debian" : "Linux" : a.match(/mac/gi) ? a.match(/os 6_0/gi) ? "iOS 6" : a.match(/os 7_0/gi) ? "iOS 7" : "Mac OS X" : a.match(/unix/gi) ? "Unix" : "Unknown OS";
}
```

**以上代码不能直接使用** ！至于我修改后的duoshuo.js，因为被我混淆过，即使格式化后
也不能阅读和修改（虽然使用没问题），所以就不提供了。而是提供一个UserAgent收集网站：
[http://user-agent-string.info/][3]，这个网站基本上所有的UA都有了，如果要修改
duoshuo.js判断函数的话可以参考一下这个网站里的UA字符串咯。就是这样喵~

因为最近多说有过好几次调用不了，一片白的情况，刚好Typecho又有多说评论同步插件（阳
光出品），于是酝酿已久的用回原生评论就这样执行了额（有几个评论丢失了）。多说or原生，
各有利弊吧。。顺便把扒来的主题用上鸟。评论也改成了平铺了，貌似我不怎么喜欢嵌套评
论= =b，加上怡红公子的At插件，原生评论也挺好的哈。

blablabla...


  [1]: https://github.com/huhuime/make_duoshuo_show_ua
  [2]: http://ysido.com/
  [3]: http://user-agent-string.info/
