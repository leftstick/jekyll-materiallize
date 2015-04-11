/**
 *
 * Init module.
 *
 * @author Howard.Zuo
 * @date   Apr 10, 2015
 *
 **/
(function($, global) {
    'use strict';

    //active the sidebar toggle
    $('.button-collapse').sideNav();

    //active tooltip
    $('.tooltip').tooltipster();

    //set i18n stuff
    var langs = global.language;
    for(var key in langs[langs.lang]){
        $('[lang=' + key + ']').text(langs[langs.lang][key]);
    }


})(jQuery, window);
