import { debounce } from 'ts-debounce';
import { computed, defineComponent, h, onMounted, ref, Transition } from 'vue';
import { getScrollTop, scrollToTop } from '../utils';
import { usePageData } from '@vuepress/client'
import '../styles/vars.css';
import '../styles/back-to-top.css';
export const BackToTop = defineComponent({
    name: 'BackToTop',
    setup() {
        const page = usePageData()
        console.log(page.value) // bar
        const scrollTop = ref(0);
        const show = computed(() => scrollTop.value > 300);
        const onScroll = debounce(() => {
            scrollTop.value = getScrollTop();
        }, 100);
        onMounted(() => {
            scrollTop.value = getScrollTop();
            window.addEventListener('scroll', () => onScroll());
        });
        const backToTopEl = h('div', { class: 'back-to-top', onClick: ()=>{
            console.log(usePageData().value)
        }
   
        } );
        return () => h(Transition, {
            name: 'back-to-top',
        }, () => (show.value ? backToTopEl : null));
    },
});
export default BackToTop;
