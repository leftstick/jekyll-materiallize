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

    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.
    var debounce = function(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this,
                args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    //active the sidebar toggle
    $('.button-collapse').sideNav();

    //active tooltip
    $('.tooltip').tooltipster();

    //set i18n stuff
    var langs = global.language;
    for (var key in langs[langs.lang]) {
        $('[lang=' + key + ']').text(langs[langs.lang][key]);
    }

    var $doc = $(global.document);
    var $gotoTop = $('body .goto-top');

    var onscroll = debounce(function(e) {
        var top = $(this).scrollTop();
        if (top > 100 && $gotoTop.not(':visible')) {
            $gotoTop.show('slow');
        } else if (top <= 100 && $gotoTop.is(':visible')) {
            $gotoTop.hide('slow');
        }
    }, 250);

    var onclick = function() {
        $('body').animate({
            scrollTop: 0
        });
    };

    var setGotoTop = function() {
        if ($doc.scrollTop() > 100) {
            $gotoTop.show();
        } else {
            $gotoTop.hide();
        }
        $doc.on('scroll', onscroll);
        $gotoTop.on('click', onclick);
    };

    var unsetGotoTop = function() {
        $doc.off('scroll', onscroll);
        $gotoTop.off('click', onclick);
    };

    $(global).on('resize', debounce(function(e) {

        unsetGotoTop();
        if ($(global).width() > 600) {
            setGotoTop();
        }

    }, 150));

    if ($(global).width() > 600) {
        setGotoTop();
    }

    var isWechat = function() {
        var ua = global.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    };

    if (isWechat()) {
        $('html').addClass('wechat');
    }

})(jQuery, window);
