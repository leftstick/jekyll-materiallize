---
---
(function(global) {
    'use strict';

    var lang = '{{ site.lang }}' || 'en';

    var language = global.language = {};

    language.lang = lang;

    language.en = {
        TOTAL_POSTS: 'Total Posts',
        PREVIOUS_BTN: 'Previous',
        NEXT_BTN: 'Next',
        ARCHIVE_BTN: 'Archive',
        CREATED_ON: 'Created on',
        CATEGORIES: 'Categories',
        TAGS: 'Tags',
        READ_MORE_BTN: 'Read More',
        HOME: 'Home',
        ARCHIVE: 'Archive',
        MORE_INFO: 'More Reads'
    };

    language.zh = {
        TOTAL_POSTS: '博客总数',
        PREVIOUS_BTN: '上一页',
        NEXT_BTN: '下一页',
        ARCHIVE_BTN: '里程碑',
        CREATED_ON: '创作于',
        CATEGORIES: '分类',
        TAGS: '标签',
        READ_MORE_BTN: '阅读更多',
        HOME: '首页',
        ARCHIVE: '里程碑',
        MORE_INFO: '更多文章'
    };

    

}(window));
