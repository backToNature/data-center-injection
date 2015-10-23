define(function(require, exports, module) {
    var $$tmp = require('content_tpl.js');
    var $ = require('../../../lib/jquery-2.1.4.min.js');
    var $$template = require('../../../lib/artTemplate.min.js');
    var $$data = require('../../util/data-center.js');
    var $$uri = require('../../util/uri.js');

    var dealData = function () {
        var addZero = function (num) {
            if (num <= 9) {
                return '0' + num;
            }
            return num;
        };
        var getTplItem = function (obj) {
            var date = new Date(new Date().valueOf() - 86400000),
                paramsDate = date.getFullYear().toString() + addZero(date.getMonth() + 1).toString() + addZero(date.getDate()).toString();
            var defaultParams = {
                chartType: 'single',
                itemKey: 1,
                groupKey: 0,
                date: paramsDate,
                time: '0000',
                interval: 1440,
                dataKey: $$data.get('dataCenter:isv:appid')
            };
            for (var i in defaultParams) {
                obj[i] = defaultParams[i];
            }
            return obj;
        };
        var concatUri = function (obj) {
            var uri = 'http://greenskin.cms5.sohu.com/flashChart/DataShow.php?conf=conf/conf.php?',
                key;
            for (key in obj) {
                uri += (key + '=' + obj[key] + '&');
            }
            uri = uri.substring(0, uri.length - 2);
            return uri;
        };

        return [
            {title: 'pv统计', url: concatUri(getTplItem({pid: 269, field: 'pv', fKey: 2}))},
            {title: 'uv统计', url: concatUri(getTplItem({pid: 269, field: 'uv', fKey: 3}))},
            {title: '评论数', url: concatUri(getTplItem({pid: 294, field: 4656, fKey: 4}))}
        ];
    };

    var renderTpl = function () {
        var tpl_data = {iframeList: dealData()};
        var render = $$template.compile($$tmp.iframe);
        var html = render(tpl_data);
        $('.cyanData-content').append(html);
    };
    var init = function () {
        renderTpl();
    };
    module.exports = init;
});