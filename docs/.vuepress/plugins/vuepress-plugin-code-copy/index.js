/*
插件模版 
官方示例：https://vuepress.vuejs.org/zh/plugin/writing-a-plugin.html

*/
const path = require('path');

module.exports = (options, ctx) => {
    return {
        name: 'vuepress-plugin-code-copy',
        define: {
            copybuttonText: options.copybuttonText || 'copy',
            copiedButtonText: options.copiedButtonText || "copied!"
        },
        clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js')
    }
 }