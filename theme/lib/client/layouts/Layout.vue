<template>
  <Common>
    <template #page>
      <Transition
        name="fade-slide-y"
        mode="out-in"
        @before-enter="onBeforeEnter"
        @before-leave="onBeforeLeave"
      >
        <Page :key="pageData.path">
          <template #top>
            <ArticleHeader v-show="pageData.title" />
            <slot name="page-top" />
          </template>
          <template #content-top>
            <slot name="page-content-top" />
          </template>
          <template #content-bottom>
            <slot name="page-content-bottom" />
          </template>
          <template #bottom>
            <slot name="page-bottom" />
          </template>
        </Page>
      </Transition>
    </template>
  </Common>
</template>

<script setup lang="ts">
import ArticleHeader from '@theme/ArticleHeader.vue'
import Common from '@theme/Common.vue'
import Page from '@theme/Page.vue'
import { pageData } from '@vuepress/client'
import { computed, onBeforeUnmount, onMounted, reactive } from 'vue'
import { useScrollPromise } from '../composables'

// handle scrollBehavior with transition
const scrollPromise = useScrollPromise()
const onBeforeEnter = scrollPromise.resolve
const onBeforeLeave = scrollPromise.pending
// window.onblur = function () {
//   document.title = '我在这里'
// }
// window.onfocus = function () {
//   document.title = '欢迎回来'
// }

// onMounted(() => {
//   window.onblur = function () {
//     document.title = '我在这里'
//   }
//   window.onfocus = function () {
//     document.title = '欢迎回来'
//   }
//   console.log('ssss')
// })
</script>
