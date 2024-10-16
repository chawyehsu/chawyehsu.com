(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{521:function(n,e,i){"use strict";i.r(e);var x=i(1),a=function(n){var e,i,x,a,t=(x=void 0,a="2014-01-01 17:17:00",(e={}).type=i="post",e.internal=x,e.contentType="markdown",e.slug="electronic-technology-final-exam",e.content=x,e.createdAt=new Date(138856782e4),e.updatedAt=new Date(138856782e4),e.layout=i,e.title="电子工艺课期末作业：单片机流水灯",e.date=a,e.updated=a,e.draft=!0,e.hidden=!0,e.comments=!1,e.sitemap=!1,e.markdownHeadings=[{text:"视频：",slug:"视频：",level:3},{text:"程序：",slug:"程序：",level:3}],e.excerpt="<p>大二上学期选修电子工艺或者通信原理，于是果断和几个机油选了电子工艺课，因为不用考笔试，不用写考卷啊！期末的作业是做一个可控制灯速的流水灯，本来还以为连制版神马的也会要我们做，原来PCB图纸，PCB版都是做好了的，这下不能试试实验室的制版机器了，真可惜。。期中已经焊过一个电子狗的板子了（一个电子狗花了我40个大洋，坑爹的学校！），这个也没啥难度诶，我的焊工也是不错的，哈哈！</p>\n",e.permalink="/blog/electronic-technology-final-exam",e.assets={},e.attributes=e,e),o=n.options.beforeCreate||[];n.options.beforeCreate=[function(){this.$page=t}].concat(o);["layout","transition"].forEach((function(e){var i=n.options.PageComponent;i&&(n.options[e]=i[e]),void 0===n.options[e]&&(n.options[e]=t[e])})),t.slug&&(n.options.name="page-wrapper-"+t.slug.replace(/[^0-9a-z\-]/gi,"-"))},t=Object(x.a)({},(function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("layout-manager",[i("p",[n._v("大二上学期选修电子工艺或者通信原理，于是果断和几个机油选了电子工艺课，因为不用考笔试，不用写考卷啊！期末的作业是做一个可控制灯速的流水灯，本来还以为连制版神马的也会要我们做，原来PCB图纸，PCB版都是做好了的，这下不能试试实验室的制版机器了，真可惜。。期中已经焊过一个电子狗的板子了（一个电子狗花了我40个大洋，坑爹的学校！），这个也没啥难度诶，我的焊工也是不错的，哈哈！")]),n._v(" "),i("p",[n._v("作业完成图，博主用从好基友那找来的黄色LED灯替换了原来的红色灯，替换了4个，这样效果就更好看了，嘿嘿~")]),n._v(" "),i("h3",{attrs:{id:"视频："}},[n._v("视频：")]),n._v(" "),i("p",[i("saber-link",{attrs:{to:"http://v.youku.com/v_show/id_XNjU1OTk3MzA4.html"}},[n._v("电子工艺课期末作业视频")])],1),n._v(" "),i("h3",{attrs:{id:"程序："}},[n._v("程序：")]),n._v(" "),i("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"c"}},[i("pre",{pre:!0,attrs:{class:"saber-highlight-code language-c"}},[i("code",{pre:!0,attrs:{class:"language-c"}},[n._v("#include<reg52.h>  \n#include<string.h>  \n#define uint unsigned int  \n#define uchar unsigned char  \n\nsbit a=P3^4;\n\nuchar code table[]={0x01,0x02,0x04,0x08,0x10,0x20,0x40,0x80};\nuchar code tablea[]={0x80,0x40,0x20,0x10,0x08,0x04,0x02,0x01};\n\nuchar code table1[]={0x18,0x24,0x42,0x81};\nuchar code tableb[]={0x81,0x42,0x24,0x18};\n\nuchar code table2[]={0x01,0x02,0x04,0x08,0x10,0x20,0x40,0x80,\n0x81,0x82,0x84,0x88,0x90,0xa0,0xc0,0xc1,0xc2,0xc4,0xc8,0xd0,0xe0,0xe1,0xe2,0xe4,0xe8,0xf0,0xf1,0xf2,0xf4,0xf8,0xf9,0xfa,0xfc,0xfd,0xfe,0xff};\nuchar code table3[]={0x80,0x40,0x20,0x10,0x08,0x04,0x02,0x01,\n0x81,0x41,0x21,0x11,0x09,0x05,0x03,0x83,0x43,0x23,0x13,0x0b,0x07,0x87,0x47,0x27,0x17,0x0f,0x8f,0x4f,0x2f,0x1f,0x9f,0x5f,0x3f,0xbf,0x7f,0xff};\n\nuchar code table4[]={0x01,0x03,0x07,0x0f,0x1f,0x3f,0x7f,0xff};\nuchar code tablec[]={0xff,0x7f,0x3f,0x1f,0x0f,0x07,0x03,0x01};\n\nuchar code table5[]={0x80,0xc0,0xe0,0xf0,0xf8,0xfc,0xfe,0xff};\nuchar code tabled[]={0xff,0xfe,0xfc,0xf8,0xf0,0xe0,0xc0,0x80};\n\nvoid hy1()\n{\n    uint i;\n        for(i=0;i<8;)\n        if(a==1)\n        {\n            P1=table[i++];\n            while(a);\n        }\n}\n\nvoid hy2()\n{\n        uint i;\n        for(i=0;i<8;)\n        if(a==1)\n        {\n            P1=tablea[i++];\n            while(a);\n        }\n}\n\nvoid hy3()\n{\n        uint i;\n            for(i=0;i<4;)\n        if(a==1)\n        {\n            P1=table1[i++];\n            while(a);\n        }\n}\n\nvoid hy4()\n{\n        uint i;\n            for(i=0;i<4;)\n        if(a==1)\n        {\n            P1=tableb[i++];\n            while(a);\n        }\n}\n\nvoid hy5()\n{\n        uint i;\n        for(i=0;i<strlen(table2);)\n        if(a==1)\n        {\n            P1=table2[i++];\n            while(a);\n        }\n}\n\nvoid hy6()\n{\n        uint i;\n        for(i=0;i<strlen(table3);)\n        if(a==1)\n        {\n            P1=table3[i++];\n            while(a);\n        }\n}\n\nvoid hy7()\n{\n    uint i;\n    for(i=0;i>8;)\n    if(a==1)\n    {\n        P1=table4[i++];\n        while(a);\n    }\n}\n\nvoid hy8()\n{\n    uint i;\n    for(i=0;i>8;)\n    if(a==1)\n    {\n        P1=tablec[i++];\n        while(a);\n    }\n}\n\nvoid hy9()\n{\n    uint i;\n    for(i=0;i>8;)\n    if(a==1)\n    {\n        P1=table5[i++];\n        while(a);\n    }\n}\n\nvoid hy10()\n{\n    uint i;\n    for(i=0;i>8;)\n    if(a==1)\n    {\n        P1=tabled[i++];\n        while(a);\n    }\n}\n\n\nvoid main()\n{\n    while(1)\n    {\n        hy1();\n        hy2();\n        hy3();\n        hy4();\n        hy5();\n        hy6();\n        hy7();\n        hy8();\n        hy9();\n        hy10();\n    }\n}")])])]),i("p",[n._v("程序是博主的小小思路加上宿舍的实验室成员童鞋的编写共同完成的，一共10个效果，用的是C语言，才不会用那坑爹汇编呢！因为作业用的这个PCB板子用的是调节脉冲从而控制灯速，用的是单片机的P3口，所以就定义了个变量"),i("code",{pre:!0},[n._v("sbit a=P3^4;")]),n._v("，其他流水灯效果数组什么的应该都容易明白了。还有没有用延时程序。")]),n._v(" "),i("p",[n._v("我想也就只有这个机会接触这类东西了？貌似我对硬件这个方向不怎么感冒。。但是听说硬件方向挺吃香的呵！舍友童鞋加油了！~")])])}),[],!1,null,null,null);"function"==typeof a&&a(t);e.default=t.exports}}]);