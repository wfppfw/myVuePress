import { debounce } from 'ts-debounce';
import { computed, defineComponent, h, onMounted, ref, Transition } from 'vue';
import { getScrollTop, scrollToTop } from '../utils';
import { usePageData } from '@vuepress/client'
import '../styles/vars.css';
import '../styles/back-to-top.css';
import '../utils/live2d';
// import 
export const Fireworks = defineComponent({
    name: 'Fireworks',
    setup() {
        // const page = usePageData()
        // console.log(page.value) // bar
        // const scrollTop = ref(0);
        // const show = computed(() => scrollTop.value > 300);
        // const onScroll = debounce(() => {
        //     scrollTop.value = getScrollTop();
        // }, 100);
        // onMounted(() => {
        //     scrollTop.value = getScrollTop();
        //     window.addEventListener('scroll', () => onScroll());
        // });
        // const backToTopEl = h('div', { class: 'back-to-top', onClick: ()=>{
        //     console.log(usePageData().value)
        // }
   
        // }
        //  );
        // return () => h(Transition, {
        //     name: 'back-to-top',
        // }, () => (show.value ? backToTopEl : null));
        return ()=>h(
            'div',{},[
                h('canvas',{id:'live2d',width:'200',height:'300',style:'position:fixed;left:10px;bottom:10px; z-index: 1;'}),
                h('canvas',{class:'fireworks',style:'position: fixed; left: 0px; top: 0px; z-index: 2; pointer-events: none; '}),
                // h('script',{},"loadlive2d('live2d','/live2d/assets/koharu.model.json');"),
                h('script',{src:'/myVuePress/js/loadLive2d.js'}),
                h('script',{src:'http://cdn.bootcss.com/animejs/2.2.0/anime.min.js'}),
                h('script',{src:'/myVuePress/js/fireworks.js'})
            ]
            // 'canvas',{class:'fireworks',style:'position: fixed; left: 0px; top: 0px; z-index: 1; pointer-events: none; '}

        );
        // return ()=>(

        // );
    },
});
export default Fireworks;
