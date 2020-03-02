---
layout: post
title: 总结下博客最近的调整
keywords: Blog,Hexo,Static Site Generator,Saber,Netlify
description: >-
  我建博客始于 2013 年，时间也不长。那会儿也不过是一个从 WordPress 加免费空间入坑
  的新手，免费空间关了就买了个域名和虚拟空间继续折腾。啊对，也改成了 Typecho 一段
  时间，仿过几个主题。之后便是在流行之下换成了静态博客 Hexo。
date: 2019-04-21 18:07:40
updated: 2019-04-21 19:21:20
pageCoverMode: false
assets:
  cover: ../_assets/uploads/2019/04/20190421008.png
categories:
  - 技术
---

## Old Days

我建博客始于 2013 年，时间也不长。那会儿也不过是一个从 WordPress 加免费空间入坑的
新手，免费空间关了就买了个域名和虚拟空间继续折腾。啊对，也改成了 Typecho 一段时间，
仿过几个主题。之后便是在流行之下，一个 [commit] 换成了静态博客 Hexo。于是开始在这
个“自留地/实验室”里摆弄各种新玩意，做做小试验。没写过几篇文章，却也一直延续至今。

## Changes

**A. 核心系统**

将使用了近 4 年的 Hexo 换下是博客最近最大的改变，换上的是基于 Vue、Webpack 等当前
主流技术的 [Saber] 静态博客系统。

![](../_assets/uploads/2019/04/20190421002.png)

以 React、Vue、Webpack 等当代主流前端技术为基础的静态网站生成器系统持续出现并开始
崭露头角，Gatsby、Nuxt、VuePress[^1]，势必会抢占 Jekyll、Hexo 等以字符串模版为主
的“更加静态[^2]”的旧式静态博客系统，我相信这也是这个社群中的趋势。

在最初规划迭代的时候，预期是更换至 Gatsby 这个基于 React 技术栈的系统，其中的原因
是受到 Daniel Eden（知名 CSS 动画框架 animate.css[^3] 的作者）的博客改版影响。他
在稍早的一段时间将他的博客 —— [daneden.me] 从 Jekyll 换成了 Gatsby。我的博客受其
影响很大，即使到目前为止，在我博客中你仍然能够找到一些来源于他的博客的设计元素。最
明显的是在文章图文排版上的借鉴，在大屏幕下，你可以在如《[推特背后的 Notch 之道]》
等文章中看到左右溢出的插图。这个我非常喜欢的排版设计，便源于：「[Design Elitism]」，
我博客的整个排版系统很大程度上受他影响，只是彼此经过多次迭代，已不太能找出相似点了。

![Gatsby](../_assets/uploads/2019/04/20190421005.png)

没有选择 Gatsby 是因为在我对 React 生态的还不了解，头疼一连串硬啃 React、GraphQL
等技术的时候，VuePress 出世了，我还是更倾向于相对比较熟悉的 Vue。

![VuePress](../_assets/uploads/2019/04/20190421003.png)
{.right}

然而，在我尝试 VuePress 后，其更加面向于项目文档的设计，让我感觉从 Hexo 迁移显得力
不从心。对比 Gatsby 这或许是因为还是刚起步阶段，生态还不完善吧，截至目前其博客方面
的支持还在陆续开发中[^4]。

于是我便在等待/寻找一款能让我更加平滑地进行迁移的系统。然后 [Peco] 出现了，并在后来
被现在的 [Saber] 所替代。我不想在此大谈如何迁移至 Saber 的，真要这样或许会另起一篇
文章写这个。只想说，非常感谢 EGOIST 的开源工作，让大家能够用上前沿的技术。

**B. 主题外观**

得益于 Saber 的系统设计，将我的原有 Hexo 自用主题迁移至新系统并没有感觉到费力。迁移
后整体上我还是使用此前的主题，只是在原有的基础上完成了一些更加细致的迭代，使其更符合
我的现存观感。除了调整了列表的布局变得紧凑些、完善响应式文字排版设计外，最大的一点
是从以前一直使用的 CSS 预处理器 Stylus 切换成了 SASS，并用上了原版 Bulma 框架。在
生态上，果然还是 SASS 更胜一筹。

![Bulma.io](../_assets/uploads/2019/04/20190421004.png)

期间学会了几个以前不了解、不常用的 CSS 属性，并应用到了主题中。

- `text-align: justify;` —— 文字两端对齐，在单栏布局中排版差异尤为明显[^5]
- `font-display: swap;` —— 修改 Web 字体加载显示逻辑，可避免字体下载过程中闪白[^6]

不过整个主题目前还是有缺陷，只能后续随着时间推移再慢慢优化。

**C. 部署架构**

在我刚开始使用 Hexo 或者说刚入坑静态博客系统的时候，我就已经在使用持续集成工具来帮
助我进行构建和部署工作，一直在使用 [Travis CI] 的社区版。静态博客系统通过使用持续
集成做自动构建部署，真的能省下不少重复劳动。

![旧部署架构](../_assets/uploads/2019/04/20190421005.jpg)

旧架构如此的原因是以前部署到 GitHub Pages 上觉得速度不行，同时又不支持自定义域名使
用 HTTPS，我也有一台闲置的香港 VPS，于是就通过 Webhook 触发 VPS 同步 GitHub Pages
的内容，然后在 VPS 上使用 Nginx 提供服务，这样能解决前述的两个问题。后来因为域名的
SSL 证书过期（那时还没用 Let's Encrypt）和 VPS 不稳定的原因，就加了层 CloudFlare。
然后就没管了，一直这样。

![新部署架构](../_assets/uploads/2019/04/20190421006.jpg)

调整后实际上就是将提供服务的后端从 VPS 迁移到了 [Netlify]。其一是图方便，Netlify
自动申请 Let's Encrypt 不用自己麻烦在 VPS 上设置，其二是 Netlify 自带 CDN，速度还
不错，最后是因为我需要调整整个博客各页面的固定链接，同时希望旧有的链接能重定向到新
的固定链接上，保留可用性。而刚好 Netlify 原生支持重定向服务 —— [Netlify Redirect]，
这样就不用因为 CloudFlare 免费版只有 3 个 Page Rules 而显得拘谨。

构建文件依然推送到 GitHub Pages 分支上后再同步到 Netlify 的原因是，我希望保留能够
在 GitHub 仓库中查看构建后的文件的功能，构建后直接推送到 Netlify 上我就看不到构建
文件和历史变更了。

![Wappalyzer 检查](../_assets/uploads/2019/04/20190421007.png)

故意加了个假的 Hexo Generator 的 Meta 标签，所以被检测出用 Hexo（大雾）。关于这个
扩展程序，可以看我之前写的文章《[我都在用些什么 Chrome 扩展程序]》里有介绍。 

**D. 其它变化**

整个核心架构变化，于是现在托管仓库的项目架构也有所调整，改成了 Monorepo 并用 Lerna
进行管理[^7]。

修改了内容授权协议，具体可见 About 页面。因为细想了一下，真有人取走内容的话大概也不
会在意你的协议，于是干脆放飞自我。

RSS Feed 调整，增加 [JSON Feed] 的支持，路径 [`/feed/index.json`]，同时原有的
Atom Feed 的路径会从 [`/blog/atom.xml`] 调整为 [`/feed/atom.xml`]，原有路径会重定
向至新路径。

完整的迁移记录可见仓库 [Commit Log]。

[^1]: https://www.staticgen.com/
[^2]: https://vuepress.vuejs.org/zh/guide/#hexo
[^3]: https://daneden.github.io/animate.css/
[^4]: https://github.com/vuejs/vuepress/issues/36
[^5]: https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align#Justify
[^6]: https://developer.mozilla.org/zh-CN/docs/Web/CSS/@font-face/font-display
[^7]: https://github.com/h404bi/www.h404bi.com/tree/592c99120e8452a816d51fbec6fb7eabf3f15448

[commit]: https://github.com/h404bi/www.h404bi.com/commit/88362f79adfea93151ecc9f19f8647cd28562c2c
[Saber]: https://github.com/egoist/saber
[daneden.me]: https://github.com/daneden/daneden.me
[推特背后的 Notch 之道]: /blog/2018/01/the-tao-of-notch-beyond-twitter
[Design Elitism]: https://daneden.me/2014/06/28/design-elitism/
[Peco]: https://github.com/upash/peco
[Travis CI]: https://github.com/h404bi/www.h404bi.com/commits/master/.travis.yml
[Netlify]: https://www.netlify.com
[Netlify Redirect]: https://www.netlify.com/docs/redirects/
[我都在用些什么 Chrome 扩展程序]: /blog/2018/12/chrome-extensions-that-i-am-using
[JSON Feed]: https://jsonfeed.org/
[`/feed/index.json`]: /feed/index.json
[`/blog/atom.xml`]: /blog/atom.xml
[`/feed/atom.xml`]: /feed/atom.xml
[Commit Log]: https://github.com/h404bi/www.h404bi.com/compare/v2019.3.29-mina...592c99
