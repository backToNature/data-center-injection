define(function(require, exports, module) {
    var $ = require('../../lib/jquery-2.1.4.min.js');
    var $$data = require('../util/data-center.js');

    var getData = function () {
        var obj, tipsArr, dataCenter;
        var $div = $('div');
        $div.on('click', function () {
            obj = window;
        });
        $div.click();
        if (!$('#cy-cbox-wrapper').length) {
            // PC站
            if (obj.changyan.global) {
                dataCenter = obj.changyan.global.dev.get('/');
            } else {
                dataCenter = obj.SOHUCS;
                dataCenter.isv = dataCenter.isvConfig;
            }
        } else {
            // wap站
            dataCenter = obj.cyan.getModule('widget/util/data-center.js').get('/');
        }
        return dataCenter;
    };
    $$data.set('dataCenter', getData());
});
