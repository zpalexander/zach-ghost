'use strict';

var abc = (function($) {

    var mainMenu = function() {
        var menuOvrl = $('.js-main-menu-ovrl');
        var menuOvrlHugeInc = $('.main-menu-ovrl-hugeinc');
        var menuHamburger = $('.js-main-menu-open');
        $('.js-main-menu-open').on('click', function(e) {
            e.preventDefault();
            menuHamburger.hide();
            menuOvrl.addClass('open');
        });
        $('.js-main-menu-close').on('click', function(e) {
            e.preventDefault();
            menuOvrl.removeClass('open');
            menuHamburger.show();
        });
        menuOvrlHugeInc.addClass('page-loaded');
    };

    // change color according to the background
    var headerTitles = function() {
        if ($('.js-bg-check').length && $('.js-blog-bg-image').length) {
            var imgPath = $('.js-blog-bg-image').css('background-image');
            imgPath = imgPath && imgPath.match(/url\((['"])?(.*?)\1\)/);
            imgPath = imgPath && imgPath[2];
            if (imgPath) {
                $('<img>').attr('src', imgPath).load(function() {
                   $(this).remove();
                   BackgroundCheck.init({
                        targets: '.js-bg-check',
                        images: '.js-blog-bg-image',
                        threshold: 70,
                        classes: {
                            light: 'element-dark', // when background is light
                            dark: 'element-light', // when background is dark
                            complex: 'element-complex'
                        }
                    });
                });
            }
        }
    };

    // https://highlightjs.org/
    var syntaxHighlighter = function() {
        hljs.initHighlightingOnLoad();
    };

    // abc javascripts initialization
    var init = function() {
        mainMenu();
        $(document).foundation();
        headerTitles();
        syntaxHighlighter();
    };

    return { init: init };

})(jQuery);

(function () {
    abc.init();
})();
