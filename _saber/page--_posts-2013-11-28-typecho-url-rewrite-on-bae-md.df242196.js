"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2244],{25119:(C,a,i)=>{i.r(a),i.d(a,{default:()=>A});var d=function(){var e=this,t=e._self._c;return t("layout-manager",[t("p",[e._v(`\u8FD9\u4E24\u5929\u5230\u5904\u627E\u8FD0\u884C\u5728BAE\u4E0A\u7684typecho\u600E\u6837\u8BBE\u7F6EURL-Rewrite\u5730\u5740\u91CD\u5199\uFF0C\u6765\u8BBE\u7F6E\u535A\u5BA2\u4F2A\u9759\u6001\u3002\u56E0\u4E3A\u4E4B\u524D\u90E8\u7F72\u8FC7WordPress\uFF0C\u6240\u4EE5\u5927\u6982\u4E5F\u77E5\u9053\u8981\u7528\u5230BAE\u7684app.conf\u7684\u4E86\uFF0C\u800C\u76F4\u63A5\u7528\u539F\u6765WP\u7684
app.conf\u80AF\u5B9A\u4E0D\u884C\uFF0C\u535A\u732A\u53C8\u61D2\u5F97\u5B66\u90A3\u5565BAE\u7684rewrite\u89C4\u5219\u3002`)]),e._v(" "),t("p",[e._v("\u540E\u6765\u627E\u5230\u4E86\u65E7\u7248\u7684typecho on BAE\uFF0C\u53D1\u73B0\u91CC\u9762\u539F\u6765\u662F\u5E26\u6709app.conf\u6587\u4EF6\u7684\uFF01\u771F\u662F\u559C\u51FA\u671B\u5916\u554A\uFF01\uFF01\u679C\u65AD\u62FF\u6765\u5F15\u7528\uFF01\uFF01\u6548\u679C\u5F88\u597D\uFF01\u9A6C\u4E0A\u5C31\u80FD\u542F\u7528\u5730\u5740\u91CD\u5199\u4E86\uFF01\u4F2A\u9759\u6001\u6210\u529F\uFF01Yeah~~ \u9644\u4E0Aapp.conf\u7684\u5185\u5BB9\uFF1A")]),e._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"apacheconf"}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-apacheconf"}},[t("code",{pre:!0,attrs:{class:"language-apacheconf"}},[e._v(`handlers:
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
    script : /index.php`)])])]),t("h3",{attrs:{id:"\u5176\u5B83\u4F2A\u9759\u6001\u89C4\u5219"}},[e._v("\u5176\u5B83\u4F2A\u9759\u6001\u89C4\u5219")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Linux Apache")])])]),e._v(" "),t("p",[e._v("\u65B0\u5EFA\u4E00\u4E2A.htaccess\u6587\u4EF6\uFF0C\u5C06\u4EE5\u4E0B\u4EE3\u7801\u590D\u5236\u5230.htaccess\u6587\u4EF6\u91CC\uFF0C\u4E0A\u4F20\u5230typecho\u7684\u6839\u76EE\u5F55\u3002\uFF08\u6CE8\uFF1A\u82E5\u4F60\u7684typecho\u4E0D\u5728\u7F51\u7AD9\u7684\u6839\u76EE\u5F55\uFF0C\u8BF7\u81EA\u884C\u4FEE\u6539RewriteRule\u8DEF\u5F84\u3002\uFF09")]),e._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[t("code",{pre:!0,attrs:{class:"language-text"}},[e._v(`<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.php/$1 [L]
</IfModule>`)])])]),t("ul",[t("li",[t("strong",[e._v("Linux Nginx")])])]),e._v(" "),t("p",[e._v("Nginx conf\uFF1A\u4EE5\u4E0B\u4EE3\u7801\u4FDD\u5B58\u4E3A "),t("code",{pre:!0},[e._v("typecho.conf")])]),e._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[t("code",{pre:!0,attrs:{class:"language-text"}},[e._v(`location / {
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
}`)])])]),t("p",[e._v("PS\uFF1A\u5728SAE\u4E0A\u8FD0\u884CTypecho\u7684\u4F2A\u9759\u6001&\u5E38\u89C1\u95EE\u9898\u53EF\u53C2\u8003"),t("saber-link",{attrs:{to:"https://web.archive.org/web/20130429022549/http://www.yovisun.com/sae-typecho-question-solution.html"}},[e._v("Yovi's Blog")])],1)])},h=[],_=i(14486);function f(r){var e=function(u,n,o,F,c,l,E){return u.type=n,u.internal=o,u.contentType="markdown",u.slug="typecho-url-rewrite-on-bae",u.content=o,u.createdAt=new Date(13856535e5),u.updatedAt=new Date(13856535e5),u.layout=n,u.title="Typecho\u5728BAE\u4E0A\u7684urlRewrite\u4F2A\u9759\u6001\u5316app.conf",u.date=F,u.updated=F,u.draft=c,u.hidden=c,u.comments=l,u.sitemap=l,u.markdownHeadings=[{text:E,slug:E,level:3}],u.excerpt=`<p>\u8FD9\u4E24\u5929\u5230\u5904\u627E\u8FD0\u884C\u5728BAE\u4E0A\u7684typecho\u600E\u6837\u8BBE\u7F6EURL-Rewrite\u5730\u5740\u91CD\u5199\uFF0C\u6765\u8BBE\u7F6E\u535A\u5BA2\u4F2A\u9759\u6001\u3002\u56E0\u4E3A\u4E4B\u524D\u90E8\u7F72\u8FC7WordPress\uFF0C\u6240\u4EE5\u5927\u6982\u4E5F\u77E5\u9053\u8981\u7528\u5230BAE\u7684app.conf\u7684\u4E86\uFF0C\u800C\u76F4\u63A5\u7528\u539F\u6765WP\u7684
app.conf\u80AF\u5B9A\u4E0D\u884C\uFF0C\u535A\u732A\u53C8\u61D2\u5F97\u5B66\u90A3\u5565BAE\u7684rewrite\u89C4\u5219\u3002</p>
`,u.permalink="/blog/typecho-url-rewrite-on-bae",u.assets={},u.attributes=u,u}({},"post",void 0,"2013-11-28 23:45:00",!0,!1,"\u5176\u5B83\u4F2A\u9759\u6001\u89C4\u5219"),t=r.options.beforeCreate||[];r.options.beforeCreate=[function(){this.$page=e}].concat(t);var v=["layout","transition"];if(v.forEach(function(u){var n=r.options.PageComponent;n&&(r.options[u]=n[u]),r.options[u]===void 0&&(r.options[u]=e[u])}),e.slug&&(r.options.name="page-wrapper-"+e.slug.replace(/[^0-9a-z\-]/ig,"-")),0)var y}const s=f;var g={},p=(0,_.A)(g,d,h,!1,null,null,null);typeof s=="function"&&s(p);const A=p.exports}}]);
