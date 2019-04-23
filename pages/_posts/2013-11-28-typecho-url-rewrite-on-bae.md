---
layout: post
title: "Typecho在BAE上的urlRewrite伪静态化app.conf"
date: 2013-11-28 23:45:00
updated: 2013-11-28 23:45:00
draft: true
hidden: true
comments: false
---

这两天到处找运行在BAE上的typecho怎样设置URL-Rewrite地址重写，来设置博客伪静态。
因为之前部署过WordPress，所以大概也知道要用到BAE的app.conf的了，而直接用原来WP的
app.conf肯定不行，博猪又懒得学那啥BAE的rewrite规则。

<!--more-->

后来找到了旧版的typecho on BAE，发现里面原来是带有app.conf文件的！
真是喜出望外啊！！果断拿来引用！！效果很好！马上就能启用地址重写了！
伪静态成功！Yeah~~ 附上app.conf的内容：

```conf
handlers:
  - expire : .jpg modify 10 years
  - expire : .swf modify 10 years
  - expire : .png modify 10 years
  - expire : .gif modify 10 years
  - expire : .JPG modify 10 years
  - expire : .ico modify 10 years
  - url : /usr(.)
    script : /usr$1
  - url : /admin(.)
    script : /admin$1
  - url : /index.php(.)
    script : /index.php
  - url : /robots.txt
    script : /robots.txt
  - url : (.)
    script : /index.php
```

### 其它伪静态规则

- **Linux Apache**

新建一个.htaccess文件，将以下代码复制到.htaccess文件里，上传到typecho的根目录。
（注：若你的typecho不在网站的根目录，请自行修改RewriteRule路径。）

```
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.php/$1 [L]
</IfModule>
```

- **Linux Nginx**

Nginx conf：以下代码保存为 `typecho.conf`

```
location / {
index index.html index.php;
if (-f $request_filename/index.html) {
rewrite (.*) $1/index.html break;
}
if (-f $request_filename/index.php) {
rewrite (.*) $1/index.php;
}
if (!-f $request_filename) {
rewrite (.*) /index.php;
}
}
```

PS：在SAE上运行Typecho的伪静态&常见问题可参考[Yovi's Blog][1]

[1]: http://www.yovisun.com/sae-typecho-question-solution.html
