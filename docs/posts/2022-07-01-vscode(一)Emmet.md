---
layout: Post
title: vscode(一)Emmet
subtitle: Emmet语法
author: Moon
date: 2022-07-01
useHeaderImage: true
headerImage: /images/in-post/life/2022-06-15-1.jpg
headerMask: rgb(65, 48, 30, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - vscode
  - 工具
---

## 介绍
vscode内置了[Emmet](https://docs.emmet.io/)语法，在后缀为.html/.css中输入对应语法后可以生成相应代码。具体语法这一篇[blog](https://www.jianshu.com/p/922943e9c338)写得很细了,我这里记录一下自己觉得比较常用的方便的。

html语法：
```
E 代表HTML标签。
E#id 代表id属性。
E.class 代表class属性。
E[attr=foo] 代表某一个特定属性。
E{foo} 代表标签包含的内容是foo。
E>N 代表N是E的子元素。
E+N 代表N是E的同级元素。
E^N 代表N是E的上级元素。

```
例子：
``` html

<!-- 快速生成html模版 -->
! =><!DOCTYPE html>...</html>
<!-- 指定属性id,class -->
div#main.con.first => <div id="mian" class="con first" ></div>
<!-- 指定特定属性 -->
a[href='#' data-title='customer' target='_blank']
=>
<a href="#" data-title="customer" target="_blank"></a>
<!-- 子级> 同级+  父级^  乘法重复*  内容{} 分离()-->

div.friend+div#pageId>ul>li*2>div{hello world}^div.brother
=>
    <div class="friend"></div>
    <div id="pageId">
        <ul>
            <li>
                <div>hello world</div>
            </li>
            <li>
                <div>hello world</div>
            </li>
            <div class="brother"></div>
        </ul>
    </div>
```

