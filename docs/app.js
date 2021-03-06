'use strict';

window.$docsify = {
    el: '#app',
    name: 'docsify-tpl',
    repo: 'true',
    corner: {
        url: 'https://github.com/eleven-net-cn/docsify-tpl',
        icon: 'github',
    },
    logo: '',
    // loadSidebar: 'summary.md',
    subMaxLevel: 2,
    coverpage: 'cover.md',
    // loadNavbar: 'nav.md',
    notFoundPage: '404.md',
    auto2top: true,
    formatUpdated: '{YYYY}/{MM}/{DD} {HH}:{mm}',
    search: {
        placeholder: '输入关键词搜索...',
        noData: '----- 未搜索到结果 -----',
    },
    copyCode: {
        buttonText: '复制',
        errorText: 'Error',
        successText: '已复制',
    },
    footer: {
        copy: '<span>&copy; www.eleven.com</span>',
        auth: 'lnc.ALL Rights Reserved',
        pre: '<hr/>',
        style:
            'color:#808080;text-align:right;font-family:"Source Sans Pro", "Helvetica Neue", Arial, sans-serif;font-size:12px;',
    },
    'flexible-alerts': {
        // note: {
        //   label: "注意"
        // },
        // tip: {
        //   label: "提示"
        // },
        // warning: {
        //   label: "警示"
        // },
        // danger: {
        //   label: "危险"
        // }
    },
    scrollToTop: {
        auto: true,
        // text: '返回',
        right: 30,
        bottom: 30,
        offset: 500,
    },
    plugins: [
        window.EditOnGithubPlugin.create(
            'https://github.com/eleven-net-cn/docsify-tpl/edit/main/docs/',
            null,
            '📝&nbsp;编辑',
        ),
        function (hook, vm) { },
    ],
};

// PWA
typeof navigator.serviceWorker !== 'undefined' &&
    navigator.serviceWorker.register('./assets/sw.js');