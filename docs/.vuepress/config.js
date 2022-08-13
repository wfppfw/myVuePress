// const { defaultTheme } = require('vuepress');
const { path } = require("@vuepress/utils");
const resolve = (dir) => path.resolve(__dirname, dir);
const { gungnirTheme } = require("../../theme");
// const the = require('../../../vuepress-starter/node_modules/@vuepress/theme-default/index.js')
// import { defineUserConfig } from 'vuepress'
// 注册为全局vue组件插件

const { registerComponentsPlugin } = require('@vuepress/plugin-register-components');
const { nprogressPlugin } = require('@vuepress/plugin-nprogress');
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
const { backToTopPlugin } = require('./plugins/plugin-back-to-top/lib/node/index');
const { fireworksPlugin } = require('./plugins/plugin-fireworks/lib/node/index');
module.exports = {
  lang: 'zh-CN',
  title: 'Moon\'s Blog',
  description: '这是我的练习一个 VuePress 站点',
  base: '/myVuePress/',
  plugins:[

   [ registerComponentsPlugin({
      // 注册该文件下的vue文件为全局
      componentsDir: path.resolve(__dirname, './components'),
    })],
    ['vuepress-plugin-code-copy', true],
    nprogressPlugin(),
    mediumZoomPlugin({
      // 配置项
    }),

    fireworksPlugin(),


  
    // [path.resolve(__dirname,'./plugins/vuepress-plugin-code-copy/index.js')],
    // [require('./plugins/vuepress-plugin-code-copy/index')],
    // [
    //   '@vuepress/plugin-register-components',
    //     {
    //         componentsDir: path.resolve(__dirname, './components')
    //     }
    //   ],
    // [
    //   "vuepress-plugin-live2d",
    //   {
    //     "modelName": "tororo",
    //     "mobileShow": false,
    //     "position": "left"
    //   }
    // ]
    // ['vuepress-plugin-pixi-live2d-display', { model: "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-z16/assets/z16.model.json" }]
  ],
  head:[
    ['link',{rel:'icon',href:'/myVuePress/images/logo/favicon.ico'}],
      ["meta", { name: "application-name", content: "Gungnir Theme" }],
      ["link", { rel: "manifest", href: "/myVuePress/images/manifest.webmanifest" }],
      ["meta", { name: "application-name", content: "Gungnir Theme" }],
      ["meta", { name: "apple-mobile-web-app-title", content: "Gungnir Theme" }],
      [
        "meta",
        { name: "apple-mobile-web-app-status-bar-style", content: "black" }
      ],
      // [
      //   "link",
      //   { rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` }
      // ],
      ["meta", { name: "theme-color", content: "#377bb5" }],
      ["meta", { name: "msapplication-TileColor", content: "#377bb5" }],
      ["link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"}]
      // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.compat.css" />

  ],
 
  theme: gungnirTheme({
    // 添加鼠标样式
    curDefault:'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA5hJREFUWEfFl21oU1cYx//33HvzWoOaxjI3HFMcvn4RN4mfdBOGyNBNnH6b+PZBP3VD90E3B3YbY1pRGAw6u4EgCApujHT9MoYvTBF0LVac1GhttNbzNCO1rSZt7jPOTe9pg11ba5MeCLm5JPf3O+f5n5cYsVjsLyllHFPUjFgsxsz8LxHNnAoHV8ADSykFAP25HEJFAgqYy+XmZTKZZDngiqEFmBmGYbhcZt5FRHXlkNACpz+7iQ9r5sO2bU/iVyJaX2oJLfBzdRLhQADvHahAJBzxuB1SytmllCgScBiwhMCO2qXI4YnmSikLtSlBKxZwgNg8Eyu2BLFx605cSPyi8uBmg5lfJaKHk+1QJDA37sOCVT6cTgLXCXjQdA6N+3d5mYDjOJvS6fSZyZTQAk0X2/DKm0HU3gAePx1CCKsDP7y7GJZleTd/klJumywJLdDensLBZt+Izw3OAA4vDSA4LeKV5J6U8o3JkNACHydSMHlkAQXqt4Cz6+eg79kzXRIieulwaoHtDSmwM7LAk37g+5WF/sYXvY87dEV3PpvNRru7u9MTHY0xBfoGgONxgB3GuS97YPmBy7dOoa7xc81k5tVE9OdEJEYVUCvzN8uBbC+j8UgPhGkAatAZGMh3Ytuxt2AK05umR4nokxeVMCorK1nN8+2/p8D5oRJUBYHqJUDmUR7nTzyF4ZEVYVAiEvZh3RczEQyE3HACuEVEC19EYkhgWAaWRYGP5gLtzf1o+i1bvEEPwj1IwG9i06E5sP16I8sRkX+8Es+V4IPXgRWzgOZEFvf/zqGuYR9a2i7BEjZMYcMyfe61ZflgmYV32/bjWmsDLFOvFRBCVHR2dvaOJVIksGeBD6+FgQv1fcg8cpDpTaK6bs1Yz9DT0tvOh/1gmZTy+mgP0AK321KYHvQh8W0PnAEgEvJjw6EqmKYbsnpmvjxYfcHMhhBCnZ7Uy2Bm9W4ysymEMNV9da3uGYZxUkrZ+n8SRSth4qss7ICKm4HNX1chFHLD1UJES8Y1DBP4khb4cXcSwi7krfbsVrSkziv4ABEVTiglas+dB7q6/8He+rUurpTnAK8/RQIVAT821FS5aR5vil92YLz/BTj56V1srJmFcKgC+Xw+nk6nVehK3rTA/Nlvo7Xjqqr7d0S0r+TkQYC7Eg6D3SSixeWCu6u6txeUI/EjdUyHsByJH01gmpSyp5xDr6dhNBp9p6ur64+pgCvmf96hrTAtMldgAAAAAElFTkSuQmCC") 0 0 , auto',
    curHover: 'url("data:image/png;base64,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") 11 0, auto',

    //网页获得焦点失去title变化
    outTitle:'( ˘▽˘)っ♨乀(ˉεˉ乀)',
    inTitle:'(*^-^*)',
    repo: "Renovamen/blog.zxh.io",
    docsDir: "blog",
    docsBranch: "master",
    // .noʎ ʇnq ǝʌol ɹǝɥʇo oN.（倒过来看）
    hitokoto: "https://v1.hitokoto.cn?c=i", // enable hitokoto (一言) or not?
    //数字公式渲染
    katex: true,
    //使用 JavaScript 图表库 Chart.js
    chartjs: true,
    mdPlus: {
      all: true,  // 全部启用
    },
    // 添加


    // personal information
    personalInfo: {
      // 必须：名称，将在首页、移动端侧边栏和文章作者信息处显示
      name: "Moon",

      // 必须：头像，将在首页和移动端侧边栏显示
      avatar: "/images/head.jpeg",

      // 必须：个人简介，将在首页显示
      description: "孤独は一人のもの,noʎ ʇnq ǝʌol ɹǝɥʇo NO",

      // 可选：社交平台账号，将在首页和移动端侧边栏显示
      sns: {
        github: "wfppfw",
        // linkedin: "",  
        // facebook: ", 
        // zhihu: '',  // 知乎
        // weibo: '',  // 新浪微博
        email: 'wfppfw12138@gmail.com',  // 邮箱
        rss: "/rss.xml"
      //   customize: [  // 添加其他的社交平台
      //   {
      //     icon: "ri-reddit-line",  // 社交平台的图标
      //     link: "https://www.reddit.com/user/oh-renovamen"  // 主页链接
      //   },
      //   // ...
      // ]
      }
    },

    // header images on home page
    // 可选：首页本地封面图路径和蒙版
    homeHeaderImages: 
      // 可选：首页本地封面图路径和蒙版
      [
        // 图 1
        {
          "path": "/images/home-bg/1.jpg",
          "mask": "rgba(40, 57, 101, .4)"
        },
        // 图 2
        {
          "path": "/images/home-bg/2.jpg",
          "mask": "rgb(251, 170, 152, .2)"
        },
        {
          "path": "/images/home-bg/3.jpg",
          "mask": "rgba(40, 57, 101, .4)"
        },
        
        {
          "path": "/images/home-bg/4.jpg",
          "mask": "rgba(40, 57, 101, .4)"
        },

   
      ],
         // api: "https://source.unsplash.com/1600x900/?nature"
      
    

    // other pages
    pages: {
     // 标签页配置
      tags: {
         //// 可选：标签页副标题
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "/images/pages/tags.png",
          mask: "rgba(211, 136, 37, .5)"
        }
      },
      links: {
        subtitle:
          "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
        bgImage: {
          path: "/images/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)"
        }
      }
    },

    themePlugins: {
      // only enable git plugin in production mode
      // git: isProd,
      katex: true,
      giscus: {
        repo: "This-is-an-Apple/blog-giscus-comments",
        repoId: "R_kgDOGl2SjQ",
        category: "Announcements",
        categoryId: "DIC_kwDOGl2Sjc4CAcxK",
        darkTheme: "https://blog.zxh.io/styles/giscus-dark.css"
      },
      mdPlus: {
        all: true
      },
      ga: "G-HCQSX53XFG",
      ba: "75381d210789d3eaf855fa16246860cc",
      rss: {
        siteURL: "https://blog.zxh.io",
        copyright: "Renovamen 2018-2022"
      }
    },

    //导航
    navbar: [
      {
        text: "Home",
        link: "/",
        icon: "fa-fort-awesome"
      },
      {
        text: "Tags",
        link: "/tags/",
        icon: "fa-tag"
      },
      {
        text: "Links",
        link: "/links/",
        icon: "fa-satellite-dish"
      },
      {
        text: "About",
        link: "https://zxh.io",
        icon: "fa-paw"
      },
      {
        text: "Toys",
        link: "https://portfolio.zxh.io/",
        icon: "oi-rocket"
      }
    ],

    footer: `
      &copy; <a href="https://github.com/wfppfw" target="_blank">Moon</a> 2022-?
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
      <div style="display: inline-block;" class="animate__animated animate__heartBeat animate__infinite"> 
      <svg t="1655321871463" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1799" width="12" height="12"><path d="M731.428571 585.142857h174.299429c-6.838857 7.424-11.446857 11.446857-12.580571 12.580572l-355.986286 342.857142c-6.838857 6.838857-16.018286 10.276571-25.161143 10.276572s-18.285714-3.437714-25.161143-10.276572l-356.571428-343.990857A80.384 80.384 0 0 1 118.272 585.142857H329.142857c16.566857 0 31.414857-11.446857 35.437714-27.428571l40.009143-160.585143 108.580572 381.147428a36.681143 36.681143 0 1 0 70.290285 0l83.419429-277.138285 32 64c6.290286 11.995429 18.870857 20.004571 32.585143 20.004571z m292.571429-244.589714c0 65.718857-28.562286 125.696-58.843429 171.446857h-210.870857l-63.414857-126.281143a36.827429 36.827429 0 0 0-35.437714-20.004571c-15.433143 1.718857-28.013714 11.446857-32 26.294857l-73.728 245.723428-112.018286-392.009142A37.046857 37.046857 0 0 0 401.700571 219.428571a36.059429 36.059429 0 0 0-34.852571 27.428572L300.544 512H58.843429C28.562286 466.285714 0 406.272 0 340.553143c0-167.424 102.290286-267.446857 273.152-267.446857 99.986286 0 193.718857 78.848 238.848 123.428571 45.129143-44.580571 138.861714-123.428571 238.848-123.428571C921.709714 73.106286 1024 173.092571 1024 340.553143z" fill="#d81e06" p-id="1800"></path></svg>      </div>

      `,
  }),


}