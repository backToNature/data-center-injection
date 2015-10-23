define(function(require, exports, module) {
    var $$tmp = require('tmp.js');
    var $ = require('../../../lib/jquery-2.1.4.min.js');
    var $$template = require('../../../lib/artTemplate.min.js');

    var $cyanDataWrapper = $('#cyanData-wrapper');
    var getData = function () {
        var obj, tipsArr, dataCenter;
        var $div = $('div');
        $div.on('click', function () {
            obj = window;
        });
        $div.click();

        if (!$('#cy-cbox-wrapper').length) {
            // PC站
                dataCenter = obj.changyan.global.dev.get('/');
                var isv = dataCenter.isv;
                tipsArr = ['appid：' + isv.appid +'',
                'topicId：' + isv.topicId +'',
                'type：' + isv.config.isv_type +'',
                'sso：' + isv.config.sso +''];
        } else {
            // wap站
            dataCenter = obj.cyan.getModule('widget/util/data-center.js').get('/');
            var isv = dataCenter.isv;
            tipsArr = ['appid：' + isv.appid +'',
                    'topicId：' + isv.article.topic_id +'',
                    'type：' + isv.config.isv_type +'',
                    'sso：' + isv.config.sso +''];
        }
        return {tipsArr: tipsArr, dataCenter: dataCenter};
    };
    var renderTpl = function () {
        var getedData = getData(),
            tipsArr = getedData.tipsArr,
            dataCenter = getedData.dataCenter;
        $.ajax({
            url: 'http://e.changyan.sohu.com/dataService/getConfig',
            data: { appId: dataCenter.isv.appid },
            dataType: 'jsonp',
            cache: false,
            success: function(data) {
                if (data.code !== 0) {
                    return;
                }
                tipsArr.push('广告位：' + data.positions.join('|'));
                var tpl_data = {list: tipsArr};
                var render = $$template.compile($$tmp);
                var html = render(tpl_data);
                $cyanDataWrapper.append(html);
            }
        });

    };
    var eventBind = function () {
        $cyanDataWrapper.delegate('.cyanData-header-hide', 'click', function (e) {
            var $icon = $('.cyanData-header-hide');

            if ($icon.text() === '>>') {
                $cyanDataWrapper.css('width', '5vw');
                $icon.text('<<');
            } else if ($icon.text() === '<<') {
                $cyanDataWrapper.css('width', '70vw');
                $icon.text('>>');
            }
        });
    };
    var init = function () {
        renderTpl();
        eventBind();
    };
    module.exports = init;
});
