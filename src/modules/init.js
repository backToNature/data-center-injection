define(function(require, exports, module) {
    var $ = require('../lib/jquery-2.1.4.min.js');
    var $$Stroage = require('../lib/localforage.nopromises.min.js');
    var loading = require('util/loading.js');
    if ($('#SOHUCS').length) {

        // 如果有接入畅言得话
        loading(function () {
            require('common/header/index.js')();
            if ($('#cy-cbox-wrapper').length) {
                // wap站
            } else {
                // PC站
            }
        });

    }
});
