"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backToTopPlugin = void 0;
const utils_1 = require("@vuepress/utils");
const fireworksPlugin = () => ({
    name: '@vuepress/plugin-fireworks',
    // clientConfigFile 客户端配置文件路径
    clientConfigFile: utils_1.path.resolve(__dirname, '../client/config.js'),
    extendsPage: (page) => {
        page.foo = 'foo'
        page.data.bar = 'bar'
        console.log(page);
      },
});
exports.fireworksPlugin = fireworksPlugin;
