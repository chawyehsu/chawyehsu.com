"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5933],{47209:(b,n,E)=>{E.r(n),E.d(n,{default:()=>y});var d=function(){var e=this,F=e._self._c;return F("layout-manager",[F("h3",{attrs:{id:"\u95EE\u9898\u63CF\u53D9"}},[e._v("\u95EE\u9898\u63CF\u53D9")]),e._v(" "),F("p",[e._v(`\u56E0\u4E3AWindowsPhone\u5F00\u53D1\u9700\u8981\u7528\u5230\u57FA\u4E8EHyper-V\u7684Windows Phone Emulator\uFF0C\u6240\u4EE5\u5F00\u542F\u4E86Win8\u81EA\u5E26\u7684Hyper-V\u865A\u62DF\u673A\u3002\u800C\u6709\u591A\u9700\u6C42\u7684\u6211\u53C8\u5B89\u88C5\u4E86VirtualBox\u865A\u62DF\u673A\u6765\u8FD0\u884CLinux\u548CWinXP\u3002
Hyper-V\u5B8C\u5168\u4E0D\u80FD\u4E0EVMware\u5171\u5B58\u6240\u4EE5\u9009\u4E86\u80FD\u4E0E\u4E4B\u201C\u534A\u5171\u5B58\u201D\u7684VirtualBox\uFF0C\u4F46\u7531\u4E8E\u57FA\u4E8Ehypervisor
\u7684Hyper-V\u592A\u8FC7\u201C\u9738\u9053\u201D\uFF0C\u4E00\u5F00\u673A\u5C31\u4F1A\u59CB\u7EC8\u5360\u636E\u7740hypervisor\uFF0C\u5373\u4F7F\u5F00\u673A\u540E\u6CA1\u6253\u5F00Hyper-V\uFF0C
Hyper-V\u4E5F\u662F\u201C\u5728\u540E\u53F0\u59CB\u7EC8\u865A\u62DF\u7740\u4E00\u4E9B\u4E1C\u897F\u201D\uFF0C\u8FD9\u5C31\u9020\u6210\u4E86\u4E0EVMware\u4E0D\u5171\u5B58\uFF0C\u4EE5\u53CA\u9020\u6210VirtualBox
\u201C\u534A\u5E9F\u201D\uFF1AWinXP\u8FD8\u662F\u80FD\u6253\u5F00\u7684\uFF0C\u7B80\u5355\u8F6F\u4EF6\u4E5F\u80FD\u7528\uFF0C\u4F46\u9047\u5230\u9700\u8981VT-x\u6307\u4EE4\u96C6\uFF0C\u548C\u5D4C\u5957\u5206\u9875\u786C\u4EF6\u865A\u62DF\u5316\u7684\u8F6F\u4EF6\uFF08\u5982SQLserver\uFF09\u65F6\u5C31\u50BB\u903C\u4E86\uFF0C\u81F3\u4E8ELinux\u5C31\u5B8C\u5168\u4E0D\u80FD\u4E86\u3002`)]),e._v(" "),F("h3",{attrs:{id:"\u89E3\u51B3\u65B9\u6CD5"}},[e._v("\u89E3\u51B3\u65B9\u6CD5")]),e._v(" "),F("p",[e._v("\u627E\u904D\u4E86\u5EA6\u5A18\u548C\u8C37\u54E5\uFF0C\u53EA\u6709\u4E00\u79CD\u65B9\u6CD5\u80FD\u591F\u89E3\u51B3\u8FD9\u4E2A\u5171\u5B58\u95EE\u9898\uFF1A\u8BBE\u7F6E\u53CC\u5F15\u5BFC\u3002\u65B9\u6CD5\u5982\u4E0B\uFF1A"),F("code",{pre:!0},[e._v("Win+X")]),e._v("\u8C03\u51FA\u83DC\u5355\uFF0C\u9009\u62E9"),F("strong",[e._v("\u547D\u4EE4\u63D0\u793A\u7B26(\u7BA1\u7406\u5458)")]),e._v("\uFF0C\u4F9D\u6B21\u6572\u5165\u4EE5\u4E0B\u4EE3\u7801\u4E2D\u7684\u547D\u4EE4\uFF1A")]),e._v(" "),F("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[F("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[F("code",{pre:!0,attrs:{class:"language-text"}},[e._v(`C:\\Windows\\system32>bcdedit /set {current} hypervisorlaunchtype off
\u64CD\u4F5C\u6210\u529F\u5B8C\u6210\u3002

C:\\Windows\\system32>bcdedit /copy {current} /d "Windows 8.1 with Hyper-V"
\u5DF2\u5C06\u8BE5\u9879\u6210\u529F\u590D\u5236\u5230 {a7deccee-ce33-11e3-bea9-a1553aac30e7}\u3002

C:\\Windows\\system32>bcdedit /set {a7deccee-ce33-11e3-bea9-a1553aac30e7} hypervis
orlaunchtype auto
\u64CD\u4F5C\u6210\u529F\u5B8C\u6210\u3002`)])])]),F("p",[e._v("\u6CE8\u610F\uFF1A\u7B2C\u4E09\u884C\u547D\u4EE4\u4E2D\u7684"),F("code",{pre:!0},[e._v("{a7deccee-ce33-11e3-bea9-a1553aac30e7}")]),e._v(`\u662F\u6839\u636E\u7B2C\u4E8C\u884C\u7ED9\u51FA\u7684\uFF0C\u8BF7\u81EA\u884C\u66FF\u6362\u3002\u539F\u7406\uFF1A\u7981\u7528\u5F53\u524D\u73AF\u5883\u7684hypervisor\uFF0C\u7136\u540E\u62F7\u8D1D\u5F53\u524D\u5F15\u5BFC\u526F\u672C\uFF0C\u518D\u5F00\u542F\u6B64\u526F\u672C\u7684
hypervisor\u3002\u6700\u540E\u5F00\u673A\u4F1A\u663E\u793A\u53CC\u5F15\u5BFC\u5982\u4E0B\u56FE\uFF1A`)]),e._v(" "),F("p",[e._v("\u6211\u9ED8\u8BA4\u9009\u62E9\u7684\u662F\u7981\u7528hypervisor\u7684\u5F15\u5BFC\uFF0C\u56E0\u4E3A\u76F8\u5BF9\u6BD4\u8F83\u5E38\u7528\u8FD9\u4E00\u4E2A\uFF0C\u82E5\u9700\u6C42\u4E0D\u540C\u53EF\u81EA\u884C\u4FEE\u6539\u9ED8\u8BA4\u5F15\u5BFC\u3002\u53E6\u5916\u6B64\u65B9\u6CD5\u540C\u6837\u9002\u7528\u4E8E\u5B89\u88C5\u6709Android GenyMotion\u865A\u62DF\u673A\u540C\u65F6\u53C8\u9700\u8981\u4F7F\u7528Hyper-V\u7684\u7AE5\u978B\u3002\u7B97\u662F\u52C9\u5F3A\u7F13\u89E3\u4E00\u4E0B\u9700\u6C42\u4E86\u3002\u5C31\u9171\u7D2B\u5427\u3002")])])},B=[],D=E(14486);function v(r){var e=function(u,t,i,a,s,p,l,_,c){return u.type=t,u.internal=i,u.contentType="markdown",u.slug="dual-boot-fix-virtualbox-and-hyper-v-switch-problem",u.content=i,u.createdAt=new Date(140050824e4),u.updatedAt=new Date(140050824e4),u.layout=t,u.title="\u53CC\u5F15\u5BFC\u89E3\u51B3VirtualBox\u4E0EHyper-V\u5171\u5B58\u95EE\u9898",u.date=a,u.updated=a,u.draft=s,u.hidden=s,u.comments=p,u.sitemap=p,u.markdownHeadings=[{text:l,slug:l,level:_},{text:c,slug:c,level:_}],u.excerpt=`<h3 id="\u95EE\u9898\u63CF\u53D9">\u95EE\u9898\u63CF\u53D9</h3>
<p>\u56E0\u4E3AWindowsPhone\u5F00\u53D1\u9700\u8981\u7528\u5230\u57FA\u4E8EHyper-V\u7684Windows Phone Emulator\uFF0C\u6240\u4EE5\u5F00\u542F\u4E86Win8\u81EA\u5E26\u7684Hyper-V\u865A\u62DF\u673A\u3002\u800C\u6709\u591A\u9700\u6C42\u7684\u6211\u53C8\u5B89\u88C5\u4E86VirtualBox\u865A\u62DF\u673A\u6765\u8FD0\u884CLinux\u548CWinXP\u3002
Hyper-V\u5B8C\u5168\u4E0D\u80FD\u4E0EVMware\u5171\u5B58\u6240\u4EE5\u9009\u4E86\u80FD\u4E0E\u4E4B\u201C\u534A\u5171\u5B58\u201D\u7684VirtualBox\uFF0C\u4F46\u7531\u4E8E\u57FA\u4E8Ehypervisor
\u7684Hyper-V\u592A\u8FC7\u201C\u9738\u9053\u201D\uFF0C\u4E00\u5F00\u673A\u5C31\u4F1A\u59CB\u7EC8\u5360\u636E\u7740hypervisor\uFF0C\u5373\u4F7F\u5F00\u673A\u540E\u6CA1\u6253\u5F00Hyper-V\uFF0C
Hyper-V\u4E5F\u662F\u201C\u5728\u540E\u53F0\u59CB\u7EC8\u865A\u62DF\u7740\u4E00\u4E9B\u4E1C\u897F\u201D\uFF0C\u8FD9\u5C31\u9020\u6210\u4E86\u4E0EVMware\u4E0D\u5171\u5B58\uFF0C\u4EE5\u53CA\u9020\u6210VirtualBox
\u201C\u534A\u5E9F\u201D\uFF1AWinXP\u8FD8\u662F\u80FD\u6253\u5F00\u7684\uFF0C\u7B80\u5355\u8F6F\u4EF6\u4E5F\u80FD\u7528\uFF0C\u4F46\u9047\u5230\u9700\u8981VT-x\u6307\u4EE4\u96C6\uFF0C\u548C\u5D4C\u5957\u5206\u9875\u786C\u4EF6\u865A\u62DF\u5316\u7684\u8F6F\u4EF6\uFF08\u5982SQLserver\uFF09\u65F6\u5C31\u50BB\u903C\u4E86\uFF0C\u81F3\u4E8ELinux\u5C31\u5B8C\u5168\u4E0D\u80FD\u4E86\u3002</p>
`,u.permalink="/blog/dual-boot-fix-virtualbox-and-hyper-v-switch-problem",u.assets={},u.attributes=u,u}({},"post",void 0,"2014-05-19 22:04:00",!0,!1,"\u95EE\u9898\u63CF\u53D9",3,"\u89E3\u51B3\u65B9\u6CD5"),F=r.options.beforeCreate||[];r.options.beforeCreate=[function(){this.$page=e}].concat(F);var h=["layout","transition"];if(h.forEach(function(u){var t=r.options.PageComponent;t&&(r.options[u]=t[u]),r.options[u]===void 0&&(r.options[u]=e[u])}),e.slug&&(r.options.name="page-wrapper-"+e.slug.replace(/[^0-9a-z\-]/ig,"-")),0)var f}const o=v;var A={},C=(0,D.A)(A,d,B,!1,null,null,null);typeof o=="function"&&o(C);const y=C.exports}}]);
