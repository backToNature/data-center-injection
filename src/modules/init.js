define(function(require, exports, module) {
    var $ = require('../lib/jquery-2.1.4.min.js');
    var $$Stroage = require('../lib/localforage.nopromises.min.js');
    var loading = require('common/loading.js');
    console.log($$Stroage);
    if ($('#SOHUCS').length) {
        // 如果有接入畅言得话
        if ($('#cy-cbox-wrapper').length) {
            // wap站
            loading();

        } else {
            // PC站
            loading();
        }
    }
});
