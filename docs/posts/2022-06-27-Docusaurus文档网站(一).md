---
layout: Post
title: Docusaurus文档网站(一)
subtitle: Docusaurus(一)
author: Moon
date: 2022-06-27
useHeaderImage: true
headerImage: /images/in-post/life/2022-06-15-1.jpg
headerMask: rgb(65, 48, 30, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - Docusaurus
---

## 介绍

这个Docusaurus 是reactk框架，类似于vue和vuepress的关系。[官网](https://docusaurus.io/zh-CN/)。
开箱即用，短时间内搭建一个自己的文档网站部署在Github Page上很快。体验了一把，很不错，按照官网搭建往，稍微修改一下模版的标题图片，加上自己写的md,很快可以用，当然花心思去弄的话，也能弄得很漂亮，我这边想搭建一个chrome插件开发教程的文档。

## 开始

安装： (--typescript 加上该参数对typescript的支持)
```bash
npx create-docusaurus@latest my-website classic

```

经典模版结构：

```
my-website
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock

```
结构解读：
- /blog/ - 包含博客的 Markdown 文件。 如果你后续禁用了博客插件，你可以删除这个目录，或者你也可以在设置 path 选项之后修改它的名称。
- /docs/ - 包含文档的 Markdown 文件。 你可以在 sidebars.js 中自定义文档的侧边栏顺序。 如果你后续禁用了文档插件，你可以删除这个目录，或者你也可以在设置 path 选项之后修改它的名称。 详情可参考文档指南
- /src/ - 如页面或自定义 React 组件一类的非文档文件。 严格来说，你不一定要把非文档类文件放在这里。不过把它们放在一个集中的目录，可以让代码检查或者处理更为简便。
- /src/pages - 所有放在此目录中的 JSX/TSX/MDX 文件都会被转换成网站页面。 
- /static/ - 静态目录。 此处的所有内容都会被复制进 build 文件夹
- /docusaurus.config.js - 站点配置文件。 这等效于 Docusaurus 1 中的 siteConfig.js 文件
- /package.json - Docusaurus 网站是一个 React 应用。 你可以安装并使用任何 npm 包。
- /sidebars.js - 由文档使用，用于指定侧边栏中的文档顺序

运行：
```bash
cd my-website
npm run start

```

## 配置

网站许多配置都在文件docusaurus.config.js上，包括站点元数据，主题插件配置，自定义配置等,[详情](https://docusaurus.io/zh-CN/docs/api/docusaurus-config)。

## 部署到Github Pages

方案一：(我失败了，回头再试试)
仓库创建gh-pages分支
根目录创建.github/workflows/docs.yml文件

方案二：
yarn命令部署 ，yarn deploy
[参考blog](https://blog.csdn.net/weixin_44240478/article/details/124883373)
