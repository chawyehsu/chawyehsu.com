---
layout: post
title: "电子工艺课期末作业：单片机流水灯"
date: 2014-01-01 17:17:00
updated: 2014-01-01 17:17:00
draft: true
hidden: true
comments: false
sitemap: false
---

大二上学期选修电子工艺或者通信原理，于是果断和几个机油选了电子工艺课，因为不用考
笔试，不用写考卷啊！期末的作业是做一个可控制灯速的流水灯，本来还以为连制版神马的
也会要我们做，原来PCB图纸，PCB版都是做好了的，这下不能试试实验室的制版机器了，真
可惜。。期中已经焊过一个电子狗的板子了（一个电子狗花了我40个大洋，坑爹的学校！），
这个也没啥难度诶，我的焊工也是不错的，哈哈！

<!--more-->

作业完成图，博主用从好基友那找来的黄色LED灯替换了原来的红色灯，替换了4个，这样效
果就更好看了，嘿嘿~

### 视频：

[电子工艺课期末作业视频](http://v.youku.com/v_show/id_XNjU1OTk3MzA4.html)

### 程序：

```c
#include<reg52.h>  
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
}
```

程序是博主的小小思路加上宿舍的实验室成员童鞋的编写共同完成的，一共10个效果，用的
是C语言，才不会用那坑爹汇编呢！因为作业用的这个PCB板子用的是调节脉冲从而控制灯速，
用的是单片机的P3口，所以就定义了个变量`sbit a=P3^4;`，其他流水灯效果数组什么的应
该都容易明白了。还有没有用延时程序。

我想也就只有这个机会接触这类东西了？貌似我对硬件这个方向不怎么感冒。。但是听说硬件
方向挺吃香的呵！舍友童鞋加油了！~
