import { defineClientConfig } from '@vuepress/client';
import { usePageData } from '@vuepress/client'
import { BackToTop } from './components';
import { provide, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default defineClientConfig({
    // setup() {
    //     // 获取当前的路由位置
    //     const route = useRoute()
    //     // 或者 vue-router 实例
    //     const router = useRouter()
    //     // 供给一个值，可以被布局、页面和其他组件注入
    //     const count = ref(0)
    //     provide('count', count);
    //     console.log(usePageData())
    //   },
    enhance({ app, router, siteData }){
        console.log(app, router, siteData);
        router.beforeEach((to) => {
            console.log('before navigation',usePageData())
          })
      
          router.afterEach((to) => {
            console.log('after navigation',usePageData())
          })
    },
    
    // extendsPage: (page) => {
    //     page.foo = 'foo'
    //     page.data.bar = 'bar'
    //     console.log(page);
    //   },
    rootComponents: [BackToTop],
});
