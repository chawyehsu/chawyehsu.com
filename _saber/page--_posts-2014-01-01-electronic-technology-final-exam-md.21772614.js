"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8967],{97356:(p,x,t)=>{t.r(x),t.d(x,{default:()=>b});var s=function(){var n=this,e=n._self._c;return e("layout-manager",[e("p",[n._v("\u5927\u4E8C\u4E0A\u5B66\u671F\u9009\u4FEE\u7535\u5B50\u5DE5\u827A\u6216\u8005\u901A\u4FE1\u539F\u7406\uFF0C\u4E8E\u662F\u679C\u65AD\u548C\u51E0\u4E2A\u673A\u6CB9\u9009\u4E86\u7535\u5B50\u5DE5\u827A\u8BFE\uFF0C\u56E0\u4E3A\u4E0D\u7528\u8003\u7B14\u8BD5\uFF0C\u4E0D\u7528\u5199\u8003\u5377\u554A\uFF01\u671F\u672B\u7684\u4F5C\u4E1A\u662F\u505A\u4E00\u4E2A\u53EF\u63A7\u5236\u706F\u901F\u7684\u6D41\u6C34\u706F\uFF0C\u672C\u6765\u8FD8\u4EE5\u4E3A\u8FDE\u5236\u7248\u795E\u9A6C\u7684\u4E5F\u4F1A\u8981\u6211\u4EEC\u505A\uFF0C\u539F\u6765PCB\u56FE\u7EB8\uFF0CPCB\u7248\u90FD\u662F\u505A\u597D\u4E86\u7684\uFF0C\u8FD9\u4E0B\u4E0D\u80FD\u8BD5\u8BD5\u5B9E\u9A8C\u5BA4\u7684\u5236\u7248\u673A\u5668\u4E86\uFF0C\u771F\u53EF\u60DC\u3002\u3002\u671F\u4E2D\u5DF2\u7ECF\u710A\u8FC7\u4E00\u4E2A\u7535\u5B50\u72D7\u7684\u677F\u5B50\u4E86\uFF08\u4E00\u4E2A\u7535\u5B50\u72D7\u82B1\u4E86\u621140\u4E2A\u5927\u6D0B\uFF0C\u5751\u7239\u7684\u5B66\u6821\uFF01\uFF09\uFF0C\u8FD9\u4E2A\u4E5F\u6CA1\u5565\u96BE\u5EA6\u8BF6\uFF0C\u6211\u7684\u710A\u5DE5\u4E5F\u662F\u4E0D\u9519\u7684\uFF0C\u54C8\u54C8\uFF01")]),n._v(" "),e("p",[n._v("\u4F5C\u4E1A\u5B8C\u6210\u56FE\uFF0C\u535A\u4E3B\u7528\u4ECE\u597D\u57FA\u53CB\u90A3\u627E\u6765\u7684\u9EC4\u8272LED\u706F\u66FF\u6362\u4E86\u539F\u6765\u7684\u7EA2\u8272\u706F\uFF0C\u66FF\u6362\u4E864\u4E2A\uFF0C\u8FD9\u6837\u6548\u679C\u5C31\u66F4\u597D\u770B\u4E86\uFF0C\u563F\u563F~")]),n._v(" "),e("h3",{attrs:{id:"\u89C6\u9891\uFF1A"}},[n._v("\u89C6\u9891\uFF1A")]),n._v(" "),e("p",[e("saber-link",{attrs:{to:"http://v.youku.com/v_show/id_XNjU1OTk3MzA4.html"}},[n._v("\u7535\u5B50\u5DE5\u827A\u8BFE\u671F\u672B\u4F5C\u4E1A\u89C6\u9891")])],1),n._v(" "),e("h3",{attrs:{id:"\u7A0B\u5E8F\uFF1A"}},[n._v("\u7A0B\u5E8F\uFF1A")]),n._v(" "),e("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"c"}},[e("pre",{pre:!0,attrs:{class:"saber-highlight-code language-c"}},[e("code",{pre:!0,attrs:{class:"language-c"}},[n._v(`#include<reg52.h>  
#include<string.h>  
#define uint unsigned int  
#define uchar unsigned char  

sbit a=P3^4;

uchar code table[]={0x01,0x02,0x04,0x08,0x10,0x20,0x40,0x80};
uchar code tablea[]={0x80,0x40,0x20,0x10,0x08,0x04,0x02,0x01};

uchar code table1[]={0x18,0x24,0x42,0x81};
uchar code tableb[]={0x81,0x42,0x24,0x18};

uchar code table2[]={0x01,0x02,0x04,0x08,0x10,0x20,0x40,0x80,
0x81,0x82,0x84,0x88,0x90,0xa0,0xc0,0xc1,0xc2,0xc4,0xc8,0xd0,0xe0,0xe1,0xe2,0xe4,0xe8,0xf0,0xf1,0xf2,0xf4,0xf8,0xf9,0xfa,0xfc,0xfd,0xfe,0xff};
uchar code table3[]={0x80,0x40,0x20,0x10,0x08,0x04,0x02,0x01,
0x81,0x41,0x21,0x11,0x09,0x05,0x03,0x83,0x43,0x23,0x13,0x0b,0x07,0x87,0x47,0x27,0x17,0x0f,0x8f,0x4f,0x2f,0x1f,0x9f,0x5f,0x3f,0xbf,0x7f,0xff};

uchar code table4[]={0x01,0x03,0x07,0x0f,0x1f,0x3f,0x7f,0xff};
uchar code tablec[]={0xff,0x7f,0x3f,0x1f,0x0f,0x07,0x03,0x01};

uchar code table5[]={0x80,0xc0,0xe0,0xf0,0xf8,0xfc,0xfe,0xff};
uchar code tabled[]={0xff,0xfe,0xfc,0xf8,0xf0,0xe0,0xc0,0x80};

void hy1()
{
    uint i;
        for(i=0;i<8;)
        if(a==1)
        {
            P1=table[i++];
            while(a);
        }
}

void hy2()
{
        uint i;
        for(i=0;i<8;)
        if(a==1)
        {
            P1=tablea[i++];
            while(a);
        }
}

void hy3()
{
        uint i;
            for(i=0;i<4;)
        if(a==1)
        {
            P1=table1[i++];
            while(a);
        }
}

void hy4()
{
        uint i;
            for(i=0;i<4;)
        if(a==1)
        {
            P1=tableb[i++];
            while(a);
        }
}

void hy5()
{
        uint i;
        for(i=0;i<strlen(table2);)
        if(a==1)
        {
            P1=table2[i++];
            while(a);
        }
}

void hy6()
{
        uint i;
        for(i=0;i<strlen(table3);)
        if(a==1)
        {
            P1=table3[i++];
            while(a);
        }
}

void hy7()
{
    uint i;
    for(i=0;i>8;)
    if(a==1)
    {
        P1=table4[i++];
        while(a);
    }
}

void hy8()
{
    uint i;
    for(i=0;i>8;)
    if(a==1)
    {
        P1=tablec[i++];
        while(a);
    }
}

void hy9()
{
    uint i;
    for(i=0;i>8;)
    if(a==1)
    {
        P1=table5[i++];
        while(a);
    }
}

void hy10()
{
    uint i;
    for(i=0;i>8;)
    if(a==1)
    {
        P1=tabled[i++];
        while(a);
    }
}


void main()
{
    while(1)
    {
        hy1();
        hy2();
        hy3();
        hy4();
        hy5();
        hy6();
        hy7();
        hy8();
        hy9();
        hy10();
    }
}`)])])]),e("p",[n._v("\u7A0B\u5E8F\u662F\u535A\u4E3B\u7684\u5C0F\u5C0F\u601D\u8DEF\u52A0\u4E0A\u5BBF\u820D\u7684\u5B9E\u9A8C\u5BA4\u6210\u5458\u7AE5\u978B\u7684\u7F16\u5199\u5171\u540C\u5B8C\u6210\u7684\uFF0C\u4E00\u517110\u4E2A\u6548\u679C\uFF0C\u7528\u7684\u662FC\u8BED\u8A00\uFF0C\u624D\u4E0D\u4F1A\u7528\u90A3\u5751\u7239\u6C47\u7F16\u5462\uFF01\u56E0\u4E3A\u4F5C\u4E1A\u7528\u7684\u8FD9\u4E2APCB\u677F\u5B50\u7528\u7684\u662F\u8C03\u8282\u8109\u51B2\u4ECE\u800C\u63A7\u5236\u706F\u901F\uFF0C\u7528\u7684\u662F\u5355\u7247\u673A\u7684P3\u53E3\uFF0C\u6240\u4EE5\u5C31\u5B9A\u4E49\u4E86\u4E2A\u53D8\u91CF"),e("code",{pre:!0},[n._v("sbit a=P3^4;")]),n._v("\uFF0C\u5176\u4ED6\u6D41\u6C34\u706F\u6548\u679C\u6570\u7EC4\u4EC0\u4E48\u7684\u5E94\u8BE5\u90FD\u5BB9\u6613\u660E\u767D\u4E86\u3002\u8FD8\u6709\u6CA1\u6709\u7528\u5EF6\u65F6\u7A0B\u5E8F\u3002")]),n._v(" "),e("p",[n._v("\u6211\u60F3\u4E5F\u5C31\u53EA\u6709\u8FD9\u4E2A\u673A\u4F1A\u63A5\u89E6\u8FD9\u7C7B\u4E1C\u897F\u4E86\uFF1F\u8C8C\u4F3C\u6211\u5BF9\u786C\u4EF6\u8FD9\u4E2A\u65B9\u5411\u4E0D\u600E\u4E48\u611F\u5192\u3002\u3002\u4F46\u662F\u542C\u8BF4\u786C\u4EF6\u65B9\u5411\u633A\u5403\u9999\u7684\u5475\uFF01\u820D\u53CB\u7AE5\u978B\u52A0\u6CB9\u4E86\uFF01~")])])},h=[],d=t(14486);function B(F){var n=function(u,i,o,f,l,r,c,C,A){return u.type=i,u.internal=o,u.contentType="markdown",u.slug="electronic-technology-final-exam",u.content=o,u.createdAt=new Date(138856782e4),u.updatedAt=new Date(138856782e4),u.layout=i,u.title="\u7535\u5B50\u5DE5\u827A\u8BFE\u671F\u672B\u4F5C\u4E1A\uFF1A\u5355\u7247\u673A\u6D41\u6C34\u706F",u.date=f,u.updated=f,u.draft=l,u.hidden=l,u.comments=r,u.sitemap=r,u.markdownHeadings=[{text:c,slug:c,level:C},{text:A,slug:A,level:C}],u.excerpt=`<p>\u5927\u4E8C\u4E0A\u5B66\u671F\u9009\u4FEE\u7535\u5B50\u5DE5\u827A\u6216\u8005\u901A\u4FE1\u539F\u7406\uFF0C\u4E8E\u662F\u679C\u65AD\u548C\u51E0\u4E2A\u673A\u6CB9\u9009\u4E86\u7535\u5B50\u5DE5\u827A\u8BFE\uFF0C\u56E0\u4E3A\u4E0D\u7528\u8003\u7B14\u8BD5\uFF0C\u4E0D\u7528\u5199\u8003\u5377\u554A\uFF01\u671F\u672B\u7684\u4F5C\u4E1A\u662F\u505A\u4E00\u4E2A\u53EF\u63A7\u5236\u706F\u901F\u7684\u6D41\u6C34\u706F\uFF0C\u672C\u6765\u8FD8\u4EE5\u4E3A\u8FDE\u5236\u7248\u795E\u9A6C\u7684\u4E5F\u4F1A\u8981\u6211\u4EEC\u505A\uFF0C\u539F\u6765PCB\u56FE\u7EB8\uFF0CPCB\u7248\u90FD\u662F\u505A\u597D\u4E86\u7684\uFF0C\u8FD9\u4E0B\u4E0D\u80FD\u8BD5\u8BD5\u5B9E\u9A8C\u5BA4\u7684\u5236\u7248\u673A\u5668\u4E86\uFF0C\u771F\u53EF\u60DC\u3002\u3002\u671F\u4E2D\u5DF2\u7ECF\u710A\u8FC7\u4E00\u4E2A\u7535\u5B50\u72D7\u7684\u677F\u5B50\u4E86\uFF08\u4E00\u4E2A\u7535\u5B50\u72D7\u82B1\u4E86\u621140\u4E2A\u5927\u6D0B\uFF0C\u5751\u7239\u7684\u5B66\u6821\uFF01\uFF09\uFF0C\u8FD9\u4E2A\u4E5F\u6CA1\u5565\u96BE\u5EA6\u8BF6\uFF0C\u6211\u7684\u710A\u5DE5\u4E5F\u662F\u4E0D\u9519\u7684\uFF0C\u54C8\u54C8\uFF01</p>
`,u.permalink="/blog/electronic-technology-final-exam",u.assets={},u.attributes=u,u}({},"post",void 0,"2014-01-01 17:17:00",!0,!1,"\u89C6\u9891\uFF1A",3,"\u7A0B\u5E8F\uFF1A"),e=F.options.beforeCreate||[];F.options.beforeCreate=[function(){this.$page=n}].concat(e);var D=["layout","transition"];if(D.forEach(function(u){var i=F.options.PageComponent;i&&(F.options[u]=i[u]),F.options[u]===void 0&&(F.options[u]=n[u])}),n.slug&&(F.options.name="page-wrapper-"+n.slug.replace(/[^0-9a-z\-]/ig,"-")),0)var v}const a=B;var _={},E=(0,d.A)(_,s,h,!1,null,null,null);typeof a=="function"&&a(E);const b=E.exports}}]);
