define(function(require, exports, module) {
    var $$tmp = require('tmp.js');
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
        var date = new Date(new Date().valueOf() - 86400000);
        var paramsDate = date.getFullYear() + addZero(date.getMonth()) + addZero(date.getDate());
        var dataKey = $$data.get('dataCenter:isv:appid');
        var url = 'http://greenskin.cms5.sohu.com/flashChart/DataShow.php?conf=conf/conf.php';
        var defaultParams = {
            chartType: 'single',
            itemKey: 1,
            groupKey: 0,
            date: paramsDate,
            time: '0000',
            interval: 1440
        };


    };

    var renderTpl = function () {




    };


});