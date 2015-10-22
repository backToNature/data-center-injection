// index页面入口
define(function(require, exports, module) {
    var $ = require('../../lib/jquery-2.1.4.min.js');
    var renderFrame = function () {
        $('#cyanData-wrapper').remove();
        var $cyanDataWrapper = $('<div id="cyanData-wrapper"></div>'),
            $body = $(window.document.body);
        $body.append($cyanDataWrapper);
    };
    var loading = function (fn) {
        var $press = $('<div class="cyan-data-press"></div>'),
            $spinner = $('<div class="spinner"><div class="dot1"></div><div class="dot2"></div></div>'),
            $body = $(window.document.body);
        $body.append($press);
        $body.append($spinner);
        window.setTimeout(function () {
            $press.remove();
            $spinner.remove();
            $('body').fadeOut().fadeIn(500);
            if ($.isFunction(fn)) {
                renderFrame();
                fn();
            }
        }, 1000);
    };
    module.exports = loading;
});
