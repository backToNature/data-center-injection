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


                var tpl_data = {list: tipsArr, ad: {
                    getConfigUrl: 'http://e.changyan.sohu.com/dataService/getConfig?appId=' + dataCenter.isv.appid,
                    position: []
                }};
                console.log(getedData);
                var category = dataCenter.isv.categoryId || null;
                var title = window.document.title;
                var url = window.location.href;
                var uid = dataCenter.uuid || dataCenter.isv.uuid || '';
                var userAgent = window.navigator && window.navigator.userAgent || '';
                if (data.positions) {
                    data.positions.forEach(function (item) {
                        var temp = {};
                        temp.position = item;
                        temp.url = 'http://e.changyan.sohu.com/dataService/v2/getData?' + 'appId=' + dataCenter.isv.appid +
                        '&category=' + category +
                        '&title=' + title +
                        '&url=' + url +
                        '&uid=' + uid +
                        '&userAgent=' + userAgent +
                        '&position=' + item;
                        tpl_data.ad.position.push(temp);
                    });
                }
                console.log(tpl_data);

                var render = $$template.compile($$tmp);
                var html = render(tpl_data);
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
