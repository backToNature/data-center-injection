define(function(require, exports, module) {
    var $$iframeLog = require('iframeLog.js');
    var $ = require('../../../lib/jquery-2.1.4.min.js');
    var $cyanDataWrapper = $('#cyanData-wrapper');
    var init = function () {
        $$iframeLog();
    };
    
    module.exports = init;
});