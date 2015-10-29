define(function(require, exports, module) {
    var $$tmp = require('header_tpl.js');
    var $ = require('../../../lib/jquery-2.1.4.min.js');
    var $$template = require('../../../lib/artTemplate.min.js');
    var $$data = require('../../util/data-center.js');

    var $cyanDataHeader = $('.cyanData-header');
    var getData = function () {
        var dataCenter = $$data.get('dataCenter'),
            tipsArr, isv = dataCenter.isv;


        if (!$('#cy-cbox-wrapper').length) {
            // PC站
                tipsArr = ['appid：' + isv.appid +'',
                'topicId：' + isv.topicId +'',
                'type：' + isv.config.isv_type +'',
                'sso：' + isv.config.sso +''];
        } else {
            // wap站
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
                if (data.positions) {
                    tipsArr.push('广告位：' + data.positions.join('|'));
                }
                var tpl_data = {list: tipsArr};
                var render = $$template.compile($$tmp);
                var html = render(tpl_data);
                console.log(html);
                $cyanDataHeader.append(html);
            }
        });

    };
    var eventBind = function () {
        var $cyanDataWrapper = $('#cyanData-wrapper');
        $cyanDataHeader.delegate('.cyanData-header-hide', 'click', function (e) {
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
